pipeline{
    agent any
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'master',
                    url: 'https://github.com/mohjavedali/testing-jekinsFile.git'
            }
        }
        
    stage('Install Dependencies') {
        steps {
            catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                sh 'npm install'
            }
          }
    }
    // stage('Install pm2'){
    //     steps {
    //         sh 'sudo npm install pm2 -g'
    //     }
    // }
    
    // stage('Run the App') {
    //     steps {
    //         sh 'npm start'
    //     }
    // }

    stage('Restart Server') {
            steps {
                try {
                    // This is the missing step. You can replace 'pm2 restart Backend' with your actual restart command
                    sh 'pm2 restart Backend'
                } catch (Exception e) {
                    currentBuild.result = 'FAILED'
                    error("Failed to restart server: ${e.message}")
                }
            }
        }
    }
}

