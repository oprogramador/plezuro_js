cd $(dirname $(realpath $0))
set -e
langs=(en pl)
cd ../../doc/
mkdir -p tmp
cd tmp
for i in `find ../src -name *.tex`; do
  for lang in ${langs[@]}; do
    pdflatex "\def\lang{$lang}\input $i"
    pdflatex "\def\lang{$lang}\input $i"
    new_file=`echo ${i%.*}.$lang.pdf | sed 's/^\.\.\/src/..\/bin/g'`
    mkdir -p `dirname $new_file`
    mv `basename ${i%.*}`.pdf $new_file
  done
done
cd ..
rm -rf tmp
