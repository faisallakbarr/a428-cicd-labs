pipeline {
    agent {
        docker {
            image 'node:16-buster-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage ('Build') {
            steps {
                sh 'npm install'
                }
            }
        stage ('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
                }
            }
            stage ('manual Aproval') {
                steps {
                    sh './jenkins/scripts/deliver.sh'
                    input message: 'Lanjutkan ke tahap deploy?'
                    sh './jenkins/scripts/kill.sh'
                }
            }
            stage ('After sleep') {
                steps {
                echo 'APLIKASI SUDAH BERHASIL DI DEPLOY'
                }
            }
        }
    }