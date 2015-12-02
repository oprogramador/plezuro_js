cd $(dirname $(realpath $0))
cd ../..
set -e

for i in `find doc/rst/build -name *.html`; do
    sed -i 's/include_vim(\(.*\))/<div class="plezuro_source_container"><iframe class="plezuro_source" src="\1.html"><\/iframe><\/div>/g' $i
done
