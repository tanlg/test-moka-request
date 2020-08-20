#!/bin/sh

# 确保脚本抛出遇到的错误
set -e

current_version=$(grep '"version": ".*"' package.json | grep -oE "[0-9]+\.[0-9]+\.[0-9]+")
printf "Current version is: $current_version\n"
printf "Next version (e.g. 0.3.2, ATTENTION: don't prepend 'v' to version number): "
read next_version
if ! [[ "$next_version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Wrong version format: $next_version . Expected format: 0.3.2"
  exit 1
fi
next_version_v="v$next_version"

# goto master branch
git checkout master
git pull origin master

# update version
if [ "$(uname)" == "Darwin" ]; then
  sed -i '' -e "s/\"version\": \".*\"/\"version\": \"$next_version\"/" package.json
  sed -i '' -e "s/current version: .*/current version: $next_version_v/" README.md
  sed -i '' -e "s/version: .*/version: '$next_version_v',/" styleguide.config.js
  sed -i '' -e "s/:TryMoka\/moka-email.*/:TryMoka\/moka-email#$next_version_v/" README.md
  sed -i '' -e "s/__VERSION__ = '.*'/__VERSION__ = '$next_version_v'/" ./src/lib/HtmlEmailTemplate.js
else
  sed -i'' -e "s/\"version\": \".*\"/\"version\": \"$next_version\"/" package.json
  sed -i'' -e "s/current version: .*/current version: $next_version_v/" README.md
  sed -i'' -e "s/version: .*/version: '$next_version_v',/" styleguide.config.js
  sed -i'' -e "s/:TryMoka\/moka-email.*/:TryMoka\/moka-email#$next_version_v/" README.md
  sed -i'' -e "s/__VERSION__ = '.*'/__VERSION__ = '$next_version_v'/" ./src/lib/HtmlEmailTemplate.js
fi

npm run test

# build source files
npm run build

# genderate doc pages
npm run doc

# publish master branch
cp package.json dist/
cp package-lock.json dist/

git add .
git commit -m "Release version $next_version_v"
git push origin master

# publish release branch
if git branch -D release; then
  echo 'release delete succeed'
fi
git checkout release

for f in `ls dist`; do rm -rf ./$f; mv ./dist/$f .; done
rmdir dist
git add .
git commit -m "Release version $next_version_v"
git tag $next_version_v
git push origin release
git push origin release --tags

# back to master branch
git checkout master

