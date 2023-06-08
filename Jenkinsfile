pipeline {
    agent {
        node {
            label 't058-runner'
        }
    }
    stages {
        stage('checkout') {
            steps {
                git credentialsId: 'ca-git-access', branch: 'develop', url: "https://git.cloudavise.com/visops/t058/sample-nodejs-app.git"
            }
        }

        
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
         stage('Install pm2'){
            steps {
                sh 'npm install pm2 -g'
            }
        }
        
        stage('Deploy'){
            steps {
                sh 'pm2 startOrRestart pm2.config.json'
            }
        }
        
        stage('install') {
            steps {

		   sh 'ansible-vault decrypt --vault-id /tmp/vault-id /opt/jenkins/workspace/VisOps/t058/sample-nodejs-app/deploy-on-nginx/master.pem'
                sh 'chmod 400 /opt/jenkins/workspace/VisOps/t058/sample-nodejs-app/deploy-on-nginx/master.pem'
                sh "ansible-playbook -i inventory install-nginx.yml"
            }
        }
        stage('deploy') {
            steps {

                sh 'ansible-playbook -i inventory deploy-index.yaml'
            }
        }
   } 
    
}

