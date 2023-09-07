pipeline {
    agent any

    environment {
        BACKEND="page-server:3000"
        FRONTEND="dev-thanos.red-net.gr"
        CERTBOT_EMAIL="chmaikos@gmail.com"
        DOCKER_IMAGE="chmaikos/devops-front"
        DOCKER_TAG="latest"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: '17.0.0') {
                    sh '''
                        npm --version
                        npm ci && npm run build
                    '''
                }
            }
        }

        stage('Docker Build and Push') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "docker login -u $DOCKER_USER -p $DOCKER_PASS"
                        sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG -f ./docker/Dockerfile ."
                        sh "docker push $DOCKER_IMAGE:$DOCKER_TAG"
                    }
                }
            }
        }
    }
}
