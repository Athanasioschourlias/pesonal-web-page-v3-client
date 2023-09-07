#!/bin/bash
set -e

# Substitute environment variables in the Nginx configuration file
envsubst '${BACKEND},${FRONTEND}' < /etc/nginx/user_conf.d/user.conf.template > /etc/nginx/user_conf.d/user.conf
rm /etc/nginx/user_conf.d/user.conf.template

# Execute the CMD from the Dockerfile???
exec "$@"
