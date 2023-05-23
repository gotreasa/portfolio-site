#!/bin/sh

npm i
git config --global --add safe.directory /workspaces/portfolio-site
git submodule update --init --depth 1
