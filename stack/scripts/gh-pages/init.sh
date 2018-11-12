#!/bin/bash

git worktree remove build

rm build/ -rf

git worktree add build gh-pages || \
# on error
echo "[react23] Could not initiate worktree on /build."
