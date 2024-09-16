#!/bin/bash

# Create the main directories
mkdir -p easy medium hard super-hard

# Define the list of files to be created in each directory
files=("SRP.ts" "OCP.ts" "LSP.ts" "ISP.ts" "DIP.ts")

# Create files for each level
for level in easy medium hard super-hard; do
  for file in "${files[@]}"; do
    touch "$level/$file"
  done
done

# Create tsconfig.json and package.json files at the root
touch tsconfig.json package.json

echo "Folder structure and files have been created successfully!"
