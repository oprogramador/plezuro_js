cd $(dirname $(realpath $0))
cd ../..
set -e

langs=(en pl)
for i in `find src/plezuro -name *.plez.html`; do
    for lang in ${langs[@]}; do
        newName=`echo $i | sed "s/^src\/plezuro\//doc\/rst\/build\/$lang\/html\/plezuro_html\//g"`
        mkdir -p `dirname $newName`
        cp $i $newName
    done
    rm $i
done
