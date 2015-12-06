cd $(dirname $(realpath $0))
set -e
langs=(en pl)

cd ../../doc/rst/build
for lang in ${langs[@]}; do
  cd $lang/latex
  sed -i '/include\\_vim/s/\\_/_/g' Plezuro.tex 
  sed -i 's/^include_vim(\(\.\.\/\)*plezuro_html\/\(.*\))/\\includepdf[pages=-]{plezuro_pdf\/\2.html.pdf}/g' Plezuro.tex
  cd ../..
done

