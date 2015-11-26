" Vim syntax file
" Language: Plezuro
" Maintainer: Piotr Sroczkowski
" Latest Revision: 2015-11-25

if exists("b:current_syntax")
  finish
endif

let b:current_syntax = "plezuro"

syn keyword basicLanguageKeywords null true false __pos__ __line__ __file__ __dir__

syn match plezuroNumber "\v<[0-9]+(\.[0-9]+)?(e[\+\-]?[0-9]+)?>" display
syn match plezuroNumber "\v<(0x[0-9a-f]+)|(0b[01]+)|(0[0-7]+)>" display

syn match plezuroSymbol "\v<[A-Za-z_]+[A-Za-z_0-9]*>" display
syn match plezuroMethod "\v\. *<[A-Za-z_]+[A-Za-z_0-9]*>" display
syn match plezuroDeclaration "\v\$<[A-Za-z_]+[A-Za-z_0-9]*>" display
syn match plezuroObjectField "\v\@<[A-Za-z_]+[A-Za-z_0-9]*>" display

syntax match   plezuroSpecial          "\\\d\d\d\|\\."

syntax region  plezuroRegex	          start=+r"+  skip=+\\\\\|\\"+  end=+"\|$+	contains=plezuroSpecial
syntax region  plezuroRegex	          start=+r'+  skip=+\\\\\|\\'+  end=+'\|$+	contains=plezuroSpecial

syntax region  plezuroString	          start=+"+  skip=+\\\\\|\\"+  end=+"\|$+	contains=plezuroSpecial
syntax region  plezuroString	          start=+'+  skip=+\\\\\|\\'+  end=+'\|$+	contains=plezuroSpecial

syn match plezuroComment "\/\/.*" display
syn region plezuroMultiLineComment start="/\*"  end="\*/" display

hi link plezuroNumber      Number
hi link plezuroString      String
hi link plezuroRegex      String
hi link plezuroSpecial     Special
hi link plezuroComment     Comment
hi link plezuroMultiLineComment     Comment
hi link plezuroSymbol Identifier
hi link plezuroMethod NONE
hi link plezuroDeclaration Statement
hi link plezuroObjectField Identifier
