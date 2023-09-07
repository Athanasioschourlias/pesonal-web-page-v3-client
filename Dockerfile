# This is a good practice if you have builds that use different stack and need a different docker image
# And this is how we can use a separate temporary image for compilation step.
FROM node:18.17.1-alpine AS builder
RUN apk add --no-cache bash

WORKDIR /usr/src/app
COPY . .
# Run custom build script
RUN chmod +x /usr/src/app/scripts/build.sh
RUN ["bash", "/usr/src/app/scripts/build.sh"]

FROM jonasal/nginx-certbot:latest

WORKDIR /etc/html/www/static/client
COPY --from=builder /usr/src/app/dist .

WORKDIR /etc/nginx/user_conf.d
COPY ./docker/user.conf user.conf.template

WORKDIR /
COPY ./docker/entrypoint.sh entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD [ "/scripts/start_nginx_certbot.sh" ]
