cd $(dirname $(realpath $0))
cd ..
scripts/build.sh &&
scripts/export_jar.sh &&
scripts/make_js.sh
