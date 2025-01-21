module.exports = {
    apps: [{
        name: 'my-app',
        script: './server.js',
        autorestart: true,
        max_memory_restart: '1G',
        env: {
            "NODE_ENV": "production"
        },
        env_development: {
            "NODE_ENV": "development"
        }
    }],

    deploy: {
        development: {
            user: 'ubuntu',
            host: ['54.174.89.121'],
            ref: 'origin/master',
            repo: 'https://github.com/mohjavedali/testing-jekinsFile.git',
            path: '/var/lib/jenkins/workspace/node-cicdjenkins',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env development'
        }
    }
};