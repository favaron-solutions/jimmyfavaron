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
    stage('install terraform') {
      steps {
        sh 'ls /etc/apt/sources.list.d'
        sh 'add-apt-repository -r /etc/apt/sources.list.d/nodesource.list'
        sh 'apt-get update && apt-get install -y gnupg software-properties-common curl'
        sh 'curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -'
        sh 'apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"'
        sh 'apt-get update && apt-get install terraform'
      }
    }
    // stage('use terraform') {
    //   steps {
    //     sh 'terraform init -no-color'
    //     sh 'terraform apply -auto-approve -no-color'
    //   }
    // }
    // stage('Build React App') {
    //   steps {
    //     sh '''
    //       add-apt-repository -y -r ppa:chris-lea/node.js
    //       rm -f /etc/apt/sources.list.d/chris-lea-node_js-*.list
    //       rm -f /etc/apt/sources.list.d/chris-lea-node_js-*.list.save
          
    //       KEYRING=/usr/share/keyrings/nodesource.gpg
    //       curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | tee "$KEYRING" >/dev/null
    //       # wget can also be used:
    //       # wget --quiet -O - https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | tee "$KEYRING" >/dev/null
    //       gpg --no-default-keyring --keyring "$KEYRING" --list-keys

    //       VERSION=node_8.x
    //       KEYRING=/usr/share/keyrings/nodesource.gpg
    //       # The below command will set this correctly, but if lsb_release isn't available, you can set it manually:
    //       # - For Debian distributions: jessie, sid, etc...
    //       # - For Ubuntu distributions: xenial, bionic, etc...
    //       # - For Debian or Ubuntu derived distributions your best option is to use the codename corresponding to the upstream release your distribution is based off. This is an advanced scenario and unsupported if your distribution is not listed as supported per earlier in this README.
    //       DISTRO="$(lsb_release -s -c)"
    //       echo "deb [signed-by=$KEYRING] https://deb.nodesource.com/$VERSION $DISTRO main" | tee /etc/apt/sources.list.d/nodesource.list
    //       echo "deb-src [signed-by=$KEYRING] https://deb.nodesource.com/$VERSION $DISTRO main" | tee -a /etc/apt/sources.list.d/nodesource.list
    //       apt-get update
    //       apt-get install nodejs
    //     '''
    //   }
    // }
  }
  post {
    always {
      cleanWs()
    }
  }
}