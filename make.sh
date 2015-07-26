mkdir -p bin
cd src
javac $@ -d ../bin `find -name *.java`
