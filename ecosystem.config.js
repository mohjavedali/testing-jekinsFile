module.exports = {
    apps: [
        {
            name: "my-app", // Replace with your app's name
            script: "server.js", // Replace with your app's entry file
            watch: true, // Enables auto-restart on file changes
            ignore_watch: ["node_modules", "logs"], // Prevents unnecessary restarts
            env: {
                NODE_ENV: "development",
                PORT: 8000, // Replace with your app's port if needed
            },
            // env_production: {
            //     NODE_ENV: "production",
            //     PORT: 3000,
            // },
        },
    ],
};
