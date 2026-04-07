pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'node --version'
            }
        }

        stage('Test') {
            steps {
                sh 'node calculate.js'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy done"
            }
        }
    }
}
