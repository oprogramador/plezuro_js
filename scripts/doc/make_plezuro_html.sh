cd $(dirname $(realpath $0))
cd ../..
set -e

vim_file=~/.vim/bundle/plezuro-html/plugin/plezuro-html.vim
mkdir -p `dirname $vim_file`
cp scripts/doc/plezuro_to_html.vim $vim_file
vim -c 'call ToHtmlAndSave()'
scripts/doc/move_plezuro_files.sh
