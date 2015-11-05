cd $(dirname $(realpath $0))
set -e
langs=(en fr pl)
cd ../../doc/rst
dir=deploy/site/public/tutorial
rm -rf $dir
mkdir -p $dir
for lang in ${langs[@]}; do
    cp -r build/$lang/html $dir/$lang
done
cd deploy/site
git add --all
git commit -m 'deploy'
git push heroku master
