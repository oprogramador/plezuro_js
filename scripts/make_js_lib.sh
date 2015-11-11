cd $(dirname $(realpath $0))
cd ..
mkdir -p bin/js &&
cat src/js/lib.js > bin/js/plezuro.js &&
for i in `find src/js/libs -name *.js`; do cat $i >> bin/js/plezuro.js; done
