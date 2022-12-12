# !/bin/bash
set -o pipefail
tag=$1
org=$2
name=obsrv-query-engine

docker build -f ./Dockerfile -t ${org}/${name}:${tag} .