#!/bin/bash
set -e

# Substitute environment variables in the Nginx configuration file
envsubst '${BACKEND},${FRONTEND}' < /etc/nginx/user_conf.d/user.conf.template > /etc/nginx/user_conf.d/user.conf

# Execute the CMD from the Dockerfile (i.e., run Nginx in the foreground)
exec "$@"
