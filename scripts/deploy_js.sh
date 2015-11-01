cd $(dirname $(realpath $0))
cd ..
mkdir -p bin/js

newName=`realpath $1 | sed 's/\/src\/plezuro\//\/bin\/js\//g'`.js
echo $newName
cd bin/java
mkdir -p `dirname $newName`
./run.sh ../../$1 $newName
