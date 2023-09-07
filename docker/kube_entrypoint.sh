#!/bin/bash
set -e

# Substitute environment variables in the Nginx configuration file
envsubst '${FRONTEND}' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf
rm /etc/nginx/conf.d/nginx.conf.template

# Execute the CMD from the Dockerfile???
exec "$@"
