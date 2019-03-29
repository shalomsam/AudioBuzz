#!/bin/bash

if [ -d "./ios" ]; then
  echo -n "Killing running metro server..."
  if [[ $(lsof -t -i :8081) ]]; then
    kill -9 $(lsof -t -i :8081)
  fi
  echo "[Done]"
  if [ -d "./ios/build" ]; then
    echo -n "Clearing Build Directory..."
    rm -rf ./ios/build/
    echo "[Done]"
  else 
    echo "No Build Directory found...[ignoring]"
  fi
  echo -n "Clearing Metro Bundler cache..."
  rm -rf /tmp/metro-bundler-cache-*
  echo "[Done]"
  echo -n "Clearing Haste map packagers..."
  rm -rf /tmp/haste-map-react-native-packager-*
  echo "[Done]"
else
  echo "Unable to find ./ios/build directory. Are you in the project root?"
fi
