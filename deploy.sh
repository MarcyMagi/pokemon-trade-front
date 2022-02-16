
set -e

npm run build

cd dist

git init
git add *
git commit -m 'deploy'

git push -f https://github.com/MarcyMagi/pokemon-trade-front.git master:gh-pages

cd -

git re --cached dist
