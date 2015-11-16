cd $(dirname $(realpath $0))
set -e
langs=(en fr pl)
cd ../../doc/rst
rm -rf build
for lang in ${langs[@]}; do
    make -e BUILDDIR="build/$lang" SPHINXOPTS="-D language='$lang'" html
    make -e BUILDDIR="build/$lang" SPHINXOPTS="-D language='$lang'" latexpdf
done
