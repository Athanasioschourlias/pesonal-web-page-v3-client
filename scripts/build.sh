#!/bin/bash

#Getting the full dir name of the script no matter where we call the script from.
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Set relative path context
cd "$SCRIPT_DIR/.."


###SERVER BUILD###
npm install
npm run build || exit 1
echo "Done Building Server!!"