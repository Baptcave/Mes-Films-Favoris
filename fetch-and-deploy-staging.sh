#!/bin/sh
git fetch origin && git reset --hard origin/staging && git clean -f -d && \
docker compose -f docker-compose.staging.yml down && \
docker compose -f docker-compose.staging.yml pull && \
docker compose -f docker-compose.staging.yml up -d;
