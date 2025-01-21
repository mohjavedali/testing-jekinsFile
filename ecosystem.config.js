module.exports = {
    apps: [{
        name: 'my-app',
        script: './server.js', // Path to your compiled JavaScript file
        // watch: ['./dist'], // Watch for changes in the dist directory
        // instances: 'max', // Start as many instances as possible
        autorestart: true, // Automatically restart the app on crash
        max_memory_restart: '1G', // Restart if the app uses more than 1GB of memory
        env: {
            "NODE_ENV": "production"
        },
        env_development: {
            "NODE_ENV": "development"
        }
    }],

    deploy: {
        development: {
            user: 'node',
            host: ['http://54.144.218.111/'],
            ref: 'origin/master',
            repo: 'https://github.com/mohjavedali/testing-jekinsFile.git',
            path: '/var/lib/jenkins/workspace/node-cicd',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env development'
        }
    }

    // deploy: {
    //     production: {
    //         user: 'node',
    //         host: ['212.83.163.1'],
    //         ref: 'origin/master',
    //         repo: 'git@github.com:repo.git',
    //         path: '/var/www/production',
    //         'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    //     }
    // }
};