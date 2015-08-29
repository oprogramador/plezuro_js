cd $(dirname $(realpath $0))
cd ..
mkdir -p bin/js
cd bin/java
./run.sh ../../$1 ../js/`basename $1`.js
