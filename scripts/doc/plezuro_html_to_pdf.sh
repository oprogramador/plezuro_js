cd $(dirname $(realpath $0))
cd ../..
set -e
langs=(en pl)

cd doc/rst/build

for lang in ${langs[@]}; do
    for i in `find $lang -name *.plez.html`; do
        newName=`echo $i | sed "s/^$lang\/html\/plezuro_html\//$lang\/latex\/plezuro_pdf\//g"`.pdf
        mkdir -p `dirname $newName`
        echo $newName
        html2pdf $i $newName
    done
done
