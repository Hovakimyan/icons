#!/bin/bash

rm -rf ./lib

node ./scripts/update-version.js

git add ./package.json

git commit -m "update version"

git push

./node_modules/.bin/babel ./src --out-dir ./lib

cp ./package.json ./lib

cp ./README.md ./lib

npm publish ./lib

rm -rf ./lib

