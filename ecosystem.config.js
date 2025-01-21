module.exports = {
    apps: [
        {
            name: 'my-app',
            script: 'server.js', // Entry point of your app
            env: {
                NODE_ENV: 'development',
            },
        },
    ],
};