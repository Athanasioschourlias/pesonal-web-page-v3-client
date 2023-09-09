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

        stage('Docker Build and Push Images') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "docker login -u $DOCKER_USER -p $DOCKER_PASS"
                        sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG -f Dockerfile ."
                        sh "docker push $DOCKER_IMAGE:$DOCKER_TAG"
                    }
                }
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "docker login -u $DOCKER_USER -p $DOCKER_PASS"
                        sh "docker build -t $DOCKER_IMAGE:kube -f Dockerfile.Kube ."
                        sh "docker push $DOCKER_IMAGE:kube"
                    }
                }
            }
        }

        stage('List pods') {
            steps {
                withKubeConfig(caCertificate: '', clusterName: '', contextName: '', credentialsId: 'KubectlToken', namespace: 'devops', restrictKubeConfigAccess: false, serverUrl: 'https://49.13.59.12:6443') {
                    sh "kubectl get pods"
                }
            }
        }
    }
}
