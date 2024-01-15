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
            stage ('Deploy') {
                steps {
                    sh './jenkins/scripts/deliver.sh'
                    input message: 'Sudah selesai menggunakan React App? (Klik "Proceed" untuk mengakhiri)'
                    sh './jenkins/scripts/kill.sh'
                }
            }
            stage ('Sleep') {
                steps {
                    scripts {
                        print('aku akan kembali dalam beberapa saat')
                        sleep(60)
                    }
                }
            }
            stage ('aku akan kembali dalam 60 detik') {
                steps {
                    echo 'aku akan kembali dalam 60 detik'
                    sleep (time:60, unit: "SECONDS")
                }
            }
            stage ('After Sleep') {
                steps {
                    echo 'Aku sudah kembali'
                }
            }
        }
    }