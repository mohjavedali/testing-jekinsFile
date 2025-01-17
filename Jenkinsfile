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
        script {
            try {
                sh 'pm2 reload Backend --update-env'
            } catch (Exception e) {
                currentBuild.result = 'FAILURE'
                error("Failed to restart PM2 process: ${e.message}")
            }
        }
    }
}


    }

}

