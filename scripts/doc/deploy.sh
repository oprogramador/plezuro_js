cd $(dirname $(realpath $0))
set -e
langs=(en fr pl)
cd ../../doc/rst
rm -rf deploy
cp -r website deploy
mkdir -p deploy/site/public/downloads
cp ../../bin/plezuro.jar deploy/site/public/downloads/plezuro.jar
cp ../../bin/js/plezuro.js deploy/site/public/downloads/plezuro.js
dir=deploy/site/public/tutorial
mkdir -p $dir
for lang in ${langs[@]}; do
    cp -r build/$lang/html $dir/$lang
    pdfDir=deploy/site/public/downloads/pdf/$lang
    mkdir -p $pdfDir
    cp build/$lang/latex/Plezuro.pdf $pdfDir/Plezuro.pdf
done
cd deploy/site
git add --all
git commit -m 'deploy'
git push heroku master --force
