pipeline {
    agent any

    environment {
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

        // TODO: Add tests

        stage('Docker Build and Push Main Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "docker login -u $DOCKER_USER -p $DOCKER_PASS"
                        sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG -f Dockerfile ."
                        sh "docker push $DOCKER_IMAGE:$DOCKER_TAG"
                    }
                }
            }
        }

        stage('Docker Build and Push Kube Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "docker login -u $DOCKER_USER -p $DOCKER_PASS"
                        sh "docker build -t $DOCKER_IMAGE:kube -f Dockerfile.Kube ."
                        sh "docker push $DOCKER_IMAGE:kube"
                    }
                }
            }
        }
    }
}
