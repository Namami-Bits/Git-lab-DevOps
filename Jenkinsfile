pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Namami-Bits/Git-lab-DevOps.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'node test.js'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment step (dummy for now)'
            }
        }
    }
}
