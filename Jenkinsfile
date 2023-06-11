pipeline {
    agent {
        node {
            label 't058-runner'
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'ca-git-access', branch: 'development', url: "https://git.cloudavise.com/visops/t058/sample-nodejs-app.git"
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
		sh 'npm run build'
            }
        }
	  
        stage('install') {
            steps {

		   sh 'ansible-vault decrypt --vault-id /opt/vault-id /opt/jenkins/workspace/VisOps/t058/sample-nodejs-app/deploy-on-nginx/master.pem'
                sh 'chmod 400 /opt/jenkins/workspace/VisOps/t058/sample-nodejs-app/deploy-on-nginx/master.pem'
                sh "ansible-playbook -i inventory install-nginx.yaml"
            }
        }
        stage('deploy') {
            steps {

                sh 'ansible-playbook -i inventory deploy-index.yaml'
            }
        }
   } 
    
}

        

