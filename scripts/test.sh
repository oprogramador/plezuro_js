cd $(dirname $(realpath $0))
cd ..
nesh --eval bin/js/plezuro.js < src/tests/path.js
