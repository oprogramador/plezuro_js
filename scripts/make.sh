cd $(dirname $(realpath $0))
cd ..
scripts/build.sh &&
scripts/export_jar.sh &&
sudo cp bin/plezuro.jar /usr/bin/
scripts/make_js.sh
