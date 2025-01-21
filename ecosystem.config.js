module.exports = {
    apps: [
        {
            name: 'my-app',                // Name of your application
            script: './server.js',            // Entry point of your application
            instances: 1,                  // Number of instances (use 'max' for all cores)
            exec_mode: 'cluster',          // Cluster mode for multi-core usage
            env: {                         // Default environment
                NODE_ENV: 'production',
            },
            env_development: {             // Development environment
                NODE_ENV: 'development',
                DEBUG: 'my-app:*',           // Example environment variable
            },
        },
    ],
};
