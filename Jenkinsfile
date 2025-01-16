pipeline{
    agent any
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'master',
                    url: 'https://github.com/mohjavedali/testing-jekinsFile.git'
            }
        }
        
        stage('Install Dependencies'){
            steps {
                bat 'npm install'
            }
        }
        // stage('Install pm2'){
        //     steps {
        //         bat 'npm install pm2 -g'
        //     }
        // }
        
        stage('Deploy'){
            steps {
                bat 'pm2 startOrRestart pm2.config.json'
            }
        }
    }
}
