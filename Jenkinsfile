pipeline{
    agent any
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'master',
                    url: 'https://github.com/mohjavedali/CI_CD.git'
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
                        sh 'pm2 start ecosystem.config.js --env development --daemon'
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

