pipeline {
  agent { label 'linux'}
  options {
    skipDefaultCheckout(true)
  }
  environment {
    AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
    AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
    AWS_DEFAULT_REGION = 'us-west-2'
  }
  stages{
    stage('clean workspace') {
      steps {
        cleanWs()
      }
    }
    stage('checkout') {
      steps {
        checkout scm
      }
    }
    stage('install terraform') {
      steps {
        sh 'apt-get update && apt-get install -y gnupg software-properties-common curl'
        sh 'curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -'
        sh 'apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"'
        sh 'apt-get update && apt-get install terraform'
      }
    }

    stage('use terraform') {
      steps {
        sh 'terraform init -no-color'
        sh 'terraform apply -auto-approve -no-color'
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}