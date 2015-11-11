Scripts
=======

In the 'scripts' directory there are utilities for compilation, running and
testing Plezuro.

====================== ================================== ============================================================
Name                   Action                             Example
====================== ================================== ============================================================
build.sh               building Java source code into     scripts/build.sh
                       .class files

clear.sh               deleting all generated output      scripts/clear.sh
                       files

deploy_js.sh           compiling single script (into      scripts/deploy_js.sh src/plezuro/tests/1.plez
                       'bin' directory)                   

export_jar.sh          Exporting .class files into single scripts/export_jar.sh
                       .jar

make.sh                build.sh, export_jar.sh, copying   scripts/make.sh
                       .jar file into '/usr/bin/',
                       make_js.sh

make_js.sh             make_js_lib.sh, compiling all      scripts/make_js.sh
                       Plezuro scripts from 'src/plezuro'
                       to 'bin/js'

make_js_lib.sh         joining all Javascript libraries   scripts/make_js_lib.sh
                       into bin/js/all.js

test.sh                testing Plezuro scripts            scripts/test.sh
====================== ================================== ============================================================

As you can see, some of these scripts invoke others. So to do all you need,
just run three of them:

scripts/clear.sh

scripts/make.sh

scripts/test.sh

These three are not combined into one at reason of not mixing their outputs.
