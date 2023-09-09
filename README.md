# Personal Web Page V3 Client

Welcome to the Personal Web Page V3 Client repository. This project, structured using Vue 3 and TypeScript, leverages Vite for a faster and more efficient development experience. Below, you will find a detailed breakdown of each module and guidelines on how to use them to their fullest potential.

## Table of Contents

---

- [Personal Web Page V3 Client](#personal-web-page-v3-client)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Project Structure](#project-structure)
    - [Source Files (`src/`)](#source-files-src)
    - [Public Assets (`public/`)](#public-assets-public)
    - [Configuration Files](#configuration-files)
  - [Scripts](#scripts)
  - [Docker Deployment](#docker-deployment)
    - [Docker Files](#docker-files)
      - [Dockerfile](#dockerfile)
      - [Dockerfile.Kube](#dockerfilekube)
    - [Docker Compose](#docker-compose)
      - [docker-compose.yaml](#docker-composeyaml)
    - [Docker Scripts](#docker-scripts)
      - [entrypoint.sh](#entrypointsh)
      - [kube\_entrypoint.sh](#kube_entrypointsh)
    - [Configuration Templates](#configuration-templates)
      - [user.conf.template](#userconftemplate)
      - [user\_kube.conf.template](#user_kubeconftemplate)
    - [Usage](#usage)
  - [CI/CD](#cicd)
  - [Production Deployment](#production-deployment)

## Prerequisites

---

Before you begin, ensure you have met the following prerequisites:

- Node.js and npm installed. You can download them from [Node.js](https://nodejs.org/).
- A basic understanding of TypeScript and Vue 3.

## Project Structure

---

### Source Files (`src/`)

This directory contains the source files for the project, including Vue components and views, the main TypeScript file, and a router setup file.

- `main.ts`: The entry point of the application where the Vue instance is created and mounted to the DOM.
- `App.vue`: The root component that houses the navigation bar and footer components, and a router-view to display different pages based on the route.
- `components/`: This directory contains various reusable Vue components.
- `views/`: This directory contains Vue components representing different pages of the application.

### Public Assets (`public/`)

This directory contains public assets such as icons and images.

### Configuration Files

- `vite.config.ts`: The configuration file for Vite, specifying server options and plugins used in the project.
- `package.json`: This file contains the list of project dependencies and scripts to facilitate the development process.
- `.eslintrc.js`, `.prettierrc.js`, `postcss.config.js`, `tailwind.config.js`, `tsconfig.json`: These files contain various configurations for ESLint, Prettier, PostCSS, Tailwind CSS, and TypeScript respectively.

## Scripts

---

The `package.json` file houses several scripts to streamline the development process:

- `dev`: Start the Vite development server.
- `build`: Build the project for production deployment. This script first runs `vue-tsc` for type checking and then builds the project using Vite.
- `serve`: Start the Vite development server.
- `lint`: Lint the project files using ESLint.
- `format`: Format the project files using Prettier.

To run any of these scripts, use the following command in your terminal:

```bash
npm run <script-name>
```

Replace `<script-name>` with the name of the script you want to run.  

Also in the scripts folder you can use the build.sh script to build the project. The same script is used inside the Dockerfiles.

## Docker Deployment

---

This project is configured to be deployed using Docker and Kubernetes, facilitating both development and production environments. Below, we detail the various files involved in the deployment process and how to use them:

### Docker Files

#### Dockerfile

The `Dockerfile` orchestrates the building of a Docker image for the project, which is a crucial step in containerizing the application. Here is a step-by-step breakdown of how the image is built:

1. **Base Image**: It starts with specifying a base image, which in this case is a Nginx-Certbot image as the base image, leveraging the efficiency of the Nginx server to serve static files and automaticaly create SSL certs image. Nginx is a high-performance HTTP server.

2. **Copying Built Files**: The next step is to copy the built static files of the application into the Nginx server directory. This is done using the `COPY` instruction which transfers the files from your local filesystem into the Docker image.

3. **Configuration**: After copying the necessary files, the Nginx server is configured using a template file (`user.conf.template`) and an entry script (`entrypoint.sh`). The template file contains the server configuration details, and the entry script dynamically generates the Nginx configuration file at runtime using this template.

4. **Exposing Ports**: The Dockerfile specifies which ports the application should use, ensuring that the Nginx server can communicate with the outside world.

5. **Entry Point**: Finally, the entry script is specified as the entry point of the Docker container. This script will be executed when the Docker container starts up, setting up the Nginx server with the correct configuration.

#### Dockerfile.Kube

The `Dockerfile.Kube` is designed to build a Docker image specifically tailored for deployments on a Kubernetes cluster. It shares many similarities with the main Dockerfile but includes configurations specific to a Kubernetes environment. Here is how the image is built:

1. **Base Image**: Similar to the main Dockerfile, it specifies the official Nginx image as the base image, leveraging the efficiency of the Nginx server to serve static files. In this case the image will not handle SSL as this is generally handled by the Kubernetes Cluster

2. **Copying Built Files**: The built static files of the application are copied into the Nginx server directory, preparing the image to serve the application files.

3. **Configuration**: The server is configured using a different template file (`user_kube.conf.template`) and entry script (`kube_entrypoint.sh`) tailored for Kubernetes deployments. The template file outlines the server configuration for a Kubernetes environment, and the entry script dynamically generates the Nginx configuration file at runtime using this template.

4. **Exposing Ports**: The necessary ports are exposed to ensure the application can communicate within the Kubernetes cluster.

5. **Entry Point**: The Kubernetes-specific entry script is specified as the entry point of the Docker container, ensuring the server is correctly configured when the container starts up in a Kubernetes environment.

### Docker Compose

#### docker-compose.yaml

This YAML file defines the services, networks, and volumes to run the Docker containers. It leverages the Docker image built from the Dockerfile and sets up the necessary environment for the Nginx server, facilitating a smooth deployment process.  
There is a .env file that contains the URI for the backend as well as the FQDN of the server and an email address for certbot. The backend is not necessarily needed as the UI will function properly without it.  
The backend is housed at [Node Application Server](https://github.com/Athanasioschourlias/pesonal-web-page-v3-server/tree/devops)

### Docker Scripts

#### entrypoint.sh

This shell script serves as the entry point for the Docker container. It dynamically generates the Nginx server configuration using environment variables passed to the Docker container at runtime, allowing for flexible deployments.

#### kube_entrypoint.sh

Tailored for a Kubernetes environment, this script performs similar actions to `entrypoint.sh`, configuring the Nginx server dynamically based on the environment variables passed to the Kubernetes pod.

### Configuration Templates

#### user.conf.template

This template is utilized by the `entrypoint.sh` script to generate the Nginx server configuration during the container startup. It defines how the Nginx server should handle incoming requests and how it should serve the application's static files.

#### user_kube.conf.template

Used in a Kubernetes deployment, this template is leveraged by the `kube_entrypoint.sh` script to dynamically create the Nginx server configuration, ensuring the server behaves correctly in a Kubernetes environment.

### Usage

To deploy the application using Docker and Docker Compose, follow these general steps:

1. Build the Docker image using the appropriate Dockerfile with a command such as:

   ```bash
   docker build -t personal-web-page-v3-client -f Dockerfile .
   ```

2. Use Docker Compose to bring up the Docker containers with a command such as:

   ```bash
   docker-compose -f docker-compose.yaml up
   ```

3. For Kubernetes deployments, build the image using the `Dockerfile.Kube` and use the generated image in your Kubernetes configuration, ensuring to pass the necessary environment variables to configure the Nginx server correctly.

## CI/CD

---

The repository includes a Jenkinsfile with steps to build, test and push images to docker-hub for both Latest and Kubernetes tags.  
You can leverage this feature to include automatic deployments to your production environment. As an example, we have included a rolling restart of the kubernetes deployment we have setup

## Production Deployment

---

If you wan to deploy a production stack of the whole app (Front+Back+Database), you can take a look at the deployment repository for easy deployment in:

- VM
- Docker Server
- Kubernetes Cluster

[Devops Project Deployment](https://github.com/chmaikos/pesonal-web-page-deployer)