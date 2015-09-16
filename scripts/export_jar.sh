cd $(dirname $(realpath $0))
cd ..
cd bin
echo 'Main-Class: mondo.main.Main' > Manifest.txt
jar cvfm plezuro.jar Manifest.txt -C java/ .
chmod 775 plezuro.jar
