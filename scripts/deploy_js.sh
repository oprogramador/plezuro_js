cd $(dirname $(realpath $0))
cd ..
mkdir -p bin/js

newName=`realpath $1 | sed 's/\/src\/plezuro\//\/bin\/js\//g'`

if [ -d $1 ]; then
for i in `find $1/*`; do
    scripts/deploy_js.sh $i;
done;
elif [ "${1##*.}" = 'plez' ]; then
    newName=$newName.js
    mkdir -p `dirname $newName`
    cd bin/java
    ./run.sh ../../$1 $newName
else
    mkdir -p `dirname $newName`
    cp $1 $newName
fi
echo $newName
