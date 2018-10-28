#!/bin/bash

cd build && \
git add --all && \
git commit -m ":cat: Deploy to gh-pages" && \
git push origin gh-pages
