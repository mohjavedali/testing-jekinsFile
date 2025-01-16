pipeline{
    agent any
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'main',
                    url: 'https://github.com/MIRTAHAALI/express_server_for_flutter_app_testing.git'
            }
        }
        
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
        stage('Run the App') {
            steps {
                sh 'npm start &'
                sleep 5
            }
        }
        // stage('Install pm2'){
        //     steps {
        //         sh 'npm install pm2 -g'
        //     }
        // }
        
        // stage('Deploy'){
        //     steps {
        //         sh 'pm2 startOrRestart pm2.config.json'
        //     }
        // }
    }
}
