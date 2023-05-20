#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://fengxuguang.github.io
# git push -f git@github.com:fengxuguang/fengxuguang.github.io.git master:gh-pages

git push -f https://github.com/fengxuguang/fengxuguang.github.io.git master:gh-pages

cd -