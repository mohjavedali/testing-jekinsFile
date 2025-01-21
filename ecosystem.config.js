module.exports = {
    apps: [
        {
            name: 'my-app',                // Application name
            script: './server.js',            // Path to the app's entry file
            instances: 1,                  // Number of instances (1 = single process)
            exec_mode: 'fork',             // Use 'cluster' for multi-core support
            env: {
                NODE_ENV: 'production',      // Default environment
            },
            env_development: {             // Development environment
                NODE_ENV: 'development',
                DEBUG: 'my-app:*',           // Optional debug variables
            },
        },
    ],
};
