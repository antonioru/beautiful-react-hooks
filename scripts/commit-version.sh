#!/bin/bash

cd ..
git add package.json
git commit -m "chore(release): Updates package.json version to $1 [skip ci]"
git push origin master
