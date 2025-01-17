module.exports = {
    apps: [
        {
            name: "Backend", // Name of your application
            script: "./server.js", // Entry point of your application
            watch: true, // Enables auto-restart on file changes
            watch_ignore: [ // Prevent unnecessary restarts
                "node_modules", // Ignore node_modules folder
                "logs/*", // Ignore log files
                "*.log", // Ignore log files directly
                "tmp/*", // Ignore temp files
            ],
            env: {
                NODE_ENV: "development", // Environment variables for development
                PORT: 8000,
            },
            env_production: {
                NODE_ENV: "production", // Environment variables for production
                PORT: 9000,
            },
        },
    ],
};
