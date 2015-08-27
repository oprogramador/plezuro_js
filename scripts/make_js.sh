cd $(dirname $(realpath $0))
cd ..
mkdir -p bin/js &&
echo '' > bin/js/all.js &&
for i in `find src/js -name *.js`; do cat $i >> bin/js/all.js; done
cd bin/java
for i in `find ../../src/plezuro -name *.ml`; do ./run.sh $i ../js/`basename $i`.js ; done
