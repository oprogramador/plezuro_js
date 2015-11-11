cd $(dirname $(realpath $0))
cd ..
mkdir -p bin/js &&
scripts/make_js_lib.sh &&
scripts/deploy_js.sh src/plezuro
