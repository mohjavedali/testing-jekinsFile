pipeline{
    agent any
    stages {
        stage('Clone Repository'){
            steps{
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mohjavedali/testing-jekinsFile.git']])
            }
        }
        
    stage('Install Dependencies') {
        steps {
            catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                sh 'npm install'
            }
          }
    }
    
    stage('Run the App') {
        steps {
            script {
                try {
                    // sh 'pm2 start -d ecosystem.config.js --env development'
                    sh './node_modules/.bin/pm2 start server.js --name myapp'
                    // Save the pm2 process list
                    sh 'pm2 save'
                } catch (error) {
                    echo "Error starting app: ${error}"
                }
            }
        }
    }

    // stage('Restart Server') {
    //     steps {
    //         script {
    //             try {
    //                 sh 'pm2 restart all'
    //             } catch (Exception e) {
    //                 currentBuild.result = 'FAILURE'
    //                 error("Failed to restart PM2 process: ${e.message}")
    //             }
    //         }
    //     }
    // }


    }

}

