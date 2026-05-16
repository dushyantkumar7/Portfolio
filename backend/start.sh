#!/bin/bash

# Resolve the absolute path of the script's directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_ROOT="$SCRIPT_DIR/.."

# Set up environment variables
export JAVA_HOME="$SCRIPT_DIR/.tools/jdk-21.0.10+7/Contents/Home"
export PATH="$JAVA_HOME/bin:$SCRIPT_DIR/.tools/apache-maven-3.9.6/bin:$PATH"

# Create temp directory if it doesn't exist
mkdir -p "$SCRIPT_DIR/.tools/tmp"

# Build the project if the jar doesn't exist
if [ ! -f "$SCRIPT_DIR/target/portfolio-backend-0.0.1-SNAPSHOT.jar" ]; then
    echo "Building the project..."
    cd "$SCRIPT_DIR"
    mvn -Dmaven.repo.local=.mvn/repository clean package
fi

# Run the application
echo "Starting Spring Boot application..."
cd "$SCRIPT_DIR"
java -Djava.io.tmpdir="$SCRIPT_DIR/.tools/tmp" -jar target/portfolio-backend-0.0.1-SNAPSHOT.jar
