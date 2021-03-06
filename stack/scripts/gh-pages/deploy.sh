#!/bin/bash

(GH_PAGES=true npm run build && \
cd build && \
git add --all && \
git commit -m ":rocket: deploy build to gh-pages" && \
git push origin gh-pages) || \
# Your branch is up to date with 'origin/gh-pages'.
# nothing to commit, working tree clean
echo "[react23] Build new version and try again."
