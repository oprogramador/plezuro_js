��    U      �              l     m     �  c   �  7   �  ?   .     n     w  	   �  =   �  $   �  q   �  H   _     �  '   �     �     �     �  x   	  \   �  *   �     
	     	  
   	     %	     *	     /	     7	     E	     T	  �   i	     
     -
     6
  h   >
  4   �
  3   �
  L     ?   ]  �   �  O   ~  `   �  �   /  1   �     �  Q        W  <   ]  6   �  /   �            G   &  +   n     �  �   �  #   4     X  =   e     �  7   �     �       
          L   )  )   v  o   �  (     $  9  K   ^  Y   �  E        J     [  -   l     �     �     �     �     �  /   �  K   *     v     ~  �  �     M     k  c   r  7   �  ?        N     W  	   `  =   j  $   �  q   �  H   ?     �  '   �     �     �     �  x   �  \   b  *   �     �     �  
   �          
               %     4  �   I     �            h     4   �  3   �  L   �  ?   =  �   }  O   ^  `   �  �     1   �     �  Q   �     7   <   =   6   z   /   �      �      �   G   !  +   N!     z!  �   �!  #   "     8"  =   E"     �"  7   �"     �"     �"  
   �"     �"  L   	#  )   V#  o   �#  (   �#  $  $  K   >%  Y   �%  E   �%     *&     ;&  -   L&     z&     �&     �&     �&     �&  /   �&  K   
'     V'     ^'   A Unix-like operating system. Action As you can see, some of these scripts invoke others. So to do all you need, just run three of them: Binding output language (currenty Javascript) libraries Checking if the script is not empty (otherwise it return null). Classes: Compiler Compiling Converting of Plezuro tokens into the output language tokens. Division of the code into the lines. Engine - It handles the arguments of the compiler. For each pair input file - output files it invokes the Parser. Eventual changing of token types (ex. from basic ones to its subtokens). Example Exporting .class files into single .jar For whom is it? General algorithm Implementation In not Unix-like systems the Plezuro development is still possible, although you have to rewrite the automating scripts. In the 'scripts' directory there are utilities for compilation, running and testing Plezuro. It is divided into the following packages: JDK 1.8 JRE 1.8 Main parts Name Nesh Node.js Package Token Package engine Package invalidToken Parser - It reads the input, handles the situation of an empty file, invokes the Tokenizer, it invokes the basic operations for each token and finally it writes to the output. Reading the script. Realpath Scripts The basic tool is the Java 1.8. However in the future it is scheduled a compiler implemented in Plezuro. The source code is divided into the following parts: The whole compiler is currenty implemented in Java. These three are not combined into one at reason of not mixing their outputs. This is documentation of the mainstream Plezuro implementation. This is for developers who want to write extensions for the language, as well for them who want to write their own implementation (for obtaining the exact knowledge how it works and how to create a compiler in a simple way). This is the kernel of the compiler. It is not dependent on the output language. This is the set of all the tokens and subtokens of Plezuro with their translation to Javascript. This is the set off all exception classes. It includes their mapping to the Javascript. All the other classes inherit from the InvalidTokenException. To fully utilize the source of Plezuro, you need: Tokenization: Tokenizer - It divides the code into tokens by conditions given in token classes. Tools Validation - detecting of syntax errors by the tokens order. Validator - It detects all the possible syntax errors. We can specify the main parts of the algorithm: Writing output to the file. build.sh build.sh, export_jar.sh, copying .jar file into '/usr/bin/', make_js.sh building Java source code into .class files clear.sh compiling single script (into 'bin' directory) for plezuro files, copying for other files, recursive running the same script for the directories deleting all generated output files deploy_js.sh except of multiline tokens which can expand to multiple lines export_jar.sh joining all Javascript libraries into bin/js/plezuro.js lines are divided into tokens make.sh make_js.sh make_js_lib.sh make_js_lib.sh, compiling all Plezuro scripts from 'src/plezuro' to 'bin/js' mondo.engine - the kernel of the compiler mondo.invalidToken - the exception classes combined with syntax errors and their binding to the output language mondo.main - the main class and function mondo.main and mondo.engine are not dependent on the output language, on the other hand mondo.token and mondo.invalidToken are dependent. So if you want to write a compiler from Plezuro to other language than Javascript, you should change only the packages mondo.token and mondo.invalidToken. mondo.token - translation of Plezuro specific tokens to the output language node_modules - external libraries providing functionalities above the standard Javascript scripts - automated scripts to compiling, running and testing Plezuro scripts/build.sh scripts/clear.sh scripts/deploy_js.sh src/plezuro/tests/1.plez scripts/export_jar.sh scripts/make.sh scripts/make_js.sh scripts/make_js_lib.sh scripts/test.sh src/java - source code of the compiler in Java: src/js - Javascript libraries providing Plezuro capabilities for Javascript test.sh testing Plezuro scripts Project-Id-Version: Plezuro 1.0
Report-Msgid-Bugs-To: 
POT-Creation-Date: 2015-11-11 19:04+0100
PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE
Last-Translator: FULL NAME <EMAIL@ADDRESS>
Language: pl
Language-Team: pl <LL@li.org>
Plural-Forms: nplurals=3; plural=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)
MIME-Version: 1.0
Content-Type: text/plain; charset=utf-8
Content-Transfer-Encoding: 8bit
Generated-By: Babel 2.1.1
 A Unix-like operating system. Action As you can see, some of these scripts invoke others. So to do all you need, just run three of them: Binding output language (currenty Javascript) libraries Checking if the script is not empty (otherwise it return null). Classes: Compiler Compiling Converting of Plezuro tokens into the output language tokens. Division of the code into the lines. Engine - It handles the arguments of the compiler. For each pair input file - output files it invokes the Parser. Eventual changing of token types (ex. from basic ones to its subtokens). Example Exporting .class files into single .jar For whom is it? General algorithm Implementation In not Unix-like systems the Plezuro development is still possible, although you have to rewrite the automating scripts. In the 'scripts' directory there are utilities for compilation, running and testing Plezuro. It is divided into the following packages: JDK 1.8 JRE 1.8 Main parts Name Nesh Node.js Package Token Package engine Package invalidToken Parser - It reads the input, handles the situation of an empty file, invokes the Tokenizer, it invokes the basic operations for each token and finally it writes to the output. Reading the script. Realpath Scripts The basic tool is the Java 1.8. However in the future it is scheduled a compiler implemented in Plezuro. The source code is divided into the following parts: The whole compiler is currenty implemented in Java. These three are not combined into one at reason of not mixing their outputs. This is documentation of the mainstream Plezuro implementation. This is for developers who want to write extensions for the language, as well for them who want to write their own implementation (for obtaining the exact knowledge how it works and how to create a compiler in a simple way). This is the kernel of the compiler. It is not dependent on the output language. This is the set of all the tokens and subtokens of Plezuro with their translation to Javascript. This is the set off all exception classes. It includes their mapping to the Javascript. All the other classes inherit from the InvalidTokenException. To fully utilize the source of Plezuro, you need: Tokenization: Tokenizer - It divides the code into tokens by conditions given in token classes. Tools Validation - detecting of syntax errors by the tokens order. Validator - It detects all the possible syntax errors. We can specify the main parts of the algorithm: Writing output to the file. build.sh build.sh, export_jar.sh, copying .jar file into '/usr/bin/', make_js.sh building Java source code into .class files clear.sh compiling single script (into 'bin' directory) for plezuro files, copying for other files, recursive running the same script for the directories deleting all generated output files deploy_js.sh except of multiline tokens which can expand to multiple lines export_jar.sh joining all Javascript libraries into bin/js/plezuro.js lines are divided into tokens make.sh make_js.sh make_js_lib.sh make_js_lib.sh, compiling all Plezuro scripts from 'src/plezuro' to 'bin/js' mondo.engine - the kernel of the compiler mondo.invalidToken - the exception classes combined with syntax errors and their binding to the output language mondo.main - the main class and function mondo.main and mondo.engine are not dependent on the output language, on the other hand mondo.token and mondo.invalidToken are dependent. So if you want to write a compiler from Plezuro to other language than Javascript, you should change only the packages mondo.token and mondo.invalidToken. mondo.token - translation of Plezuro specific tokens to the output language node_modules - external libraries providing functionalities above the standard Javascript scripts - automated scripts to compiling, running and testing Plezuro scripts/build.sh scripts/clear.sh scripts/deploy_js.sh src/plezuro/tests/1.plez scripts/export_jar.sh scripts/make.sh scripts/make_js.sh scripts/make_js_lib.sh scripts/test.sh src/java - source code of the compiler in Java: src/js - Javascript libraries providing Plezuro capabilities for Javascript test.sh testing Plezuro scripts 