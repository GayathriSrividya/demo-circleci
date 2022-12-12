#!/bin/sh
check=$(cat ./package.json | jq -c '{name: .name , version: .version, org: .author, hubuser: "sri6379", "password":"***"}')
echo $check