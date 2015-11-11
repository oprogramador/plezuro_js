cd $(dirname $(realpath $0))
cd ..
mkdir -p bin/js &&
scripts/make_js_lib.sh &&
cd bin/java
for i in `find ../../src/plezuro -name *.plez`; do
    newName="../js/`echo $i | sed 's/\.\.\/\.\.\/src\/plezuro\///g'`.js"
    mkdir -p `dirname $newName`
    ./run.sh $i $newName
done
