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
        //         sh 'npm install pm2 -g'
        //     }
        // }
    stage('Run the App') {
        steps {
            sh 'npm start'
        }
    }

    }
}
