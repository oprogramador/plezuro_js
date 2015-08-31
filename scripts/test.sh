cd $(dirname $(realpath $0))
cd ..
nesh --eval bin/js/all.js < src/tests/path.js
