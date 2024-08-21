#!/usr/bin/env bash

# Check if node_modules directory exists and use it if available
if [[ -d node_modules ]]; then
  echo "Reusing existing node_modules"
else
  echo "Installing node_modules"
  npm install
fi

# Build the React app
npm run build
