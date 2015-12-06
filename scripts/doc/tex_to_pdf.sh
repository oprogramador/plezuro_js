cd $(dirname $(realpath $0))
set -e
langs=(en pl)

cd ../../doc/rst/build
for lang in ${langs[@]}; do
  cd $lang/latex
  pdflatex Plezuro.tex
  cd ../..
done
