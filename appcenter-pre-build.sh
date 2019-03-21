#!/usr/bin/env bash

if [ ! -f ".env" ]; then
  touch ".env"
  echo "REACT_APP_YOUTUBE_API=" >> .env
fi
