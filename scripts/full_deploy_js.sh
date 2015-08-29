cd $(dirname $(realpath $0))
cd ..
cat bin/js/all.js $1 > "${1%.*}".full.js
