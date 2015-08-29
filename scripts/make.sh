cd $(dirname $(realpath $0))
cd ..
scripts/build.sh &&
scripts/make_js.sh
