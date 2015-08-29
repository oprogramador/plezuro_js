cd $(dirname $(realpath $0))
cd ..
mkdir -p bin/java &&
javac $@ -d bin/java `find src/java -name *.java` &&
echo 'java mondo.main.Main $@' > bin/java/run.sh &&
chmod 775 bin/java/run.sh

