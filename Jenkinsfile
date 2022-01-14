pipeline {
  agent { label 'linux'}
  options {
    skipDefaultCheckout(true)
  }
  environment {
    AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
    AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
    AWS_DEFAULT_REGION = 'us-east-1'
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
    stage('setup workspace') {
      steps {
        sh '''
          apt-get update && apt-get install -y gnupg software-properties-common curl
          curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -
          apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
          apt-get update && apt-get install terraform
          apt-get install -y nodejs npm
          curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
          unzip awscliv2.zip
          ./aws/install
          '''
      }
    }
    stage('use terraform') {
      steps {
        sh '''
          terraform init -no-color
          terraform apply -auto-approve -no-color
          '''
      }
    }
    stage('build production application') {
      steps {
        sh '''
          npm install
          npm run build
          '''
      }
    }
    stage('deploy build') {
      steps {
        sh '''
          ls
          aws s3 sync ./build/ s3://www.jimmyfavaron.com
          '''
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}