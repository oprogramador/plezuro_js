cd $(dirname $(realpath $0))
set -e
langs=(en pl)
cd ../../doc/rst
rm -rf build
for lang in ${langs[@]}; do
    make -e BUILDDIR="build/$lang" SPHINXOPTS="-D language='$lang'" html
    make -e BUILDDIR="build/$lang" SPHINXOPTS="-D language='$lang'" latex
done
cd -
cd ../..
scripts/doc/make_plezuro_html.sh
scripts/doc/insert_iframe.sh
scripts/doc/plezuro_html_to_pdf.sh
scripts/doc/insert_pdf_to_tex.sh
scripts/doc/tex_to_pdf.sh
