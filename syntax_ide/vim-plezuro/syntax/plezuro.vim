" Vim syntax file
" Language: Plezuro
" Maintainer: Piotr Sroczkowski
" Latest Revision: 2015-11-25

if exists("b:current_syntax")
  finish
endif

let b:current_syntax = "plezuro"


"syn match plezuroNumber '[-+]\=\d[[:digit:]]*\.\d*[eE][\-+]\=\d\+'

"hi def link plezuroNumber      Constant


if has("folding") && exists("plezuro_fold")
  setlocal foldmethod=syntax
endif

syn cluster plezuroNotTop contains=@plezuroExtendedStringSpecial,@plezuroRegexpSpecial,@plezuroDeclaration,plezuroConditional,plezuroExceptional,plezuroMethodExceptional,plezuroTodo

if exists("plezuro_space_errors")
  if !exists("plezuro_no_trail_space_error")
    syn match plezuroSpaceError display excludenl "\s\+$"
  endif
  if !exists("plezuro_no_tab_space_error")
    syn match plezuroSpaceError display " \+\t"me=e-1
  endif
endif

" Operators
if exists("plezuro_operators")
  syn match  plezuroOperator "[~!^|*/%+-]\|&\.\@!\|\%(class\s*\)\@<!<<\|<=>\|<=\|\%(<\|\<class\s\+\u\w*\s*\)\@<!<[^<]\@=\|===\|==\|=\~\|>>\|>=\|=\@<!>\|\*\*\|\.\.\.\|\.\.\|::"
  syn match  plezuroOperator "->\|-=\|/=\|\*\*=\|\*=\|&&=\|&=\|&&\|||=\||=\|||\|%=\|+=\|!\~\|!="
  syn region plezuroBracketOperator matchgroup=plezuroOperator start="\%(\w[?!]\=\|[]})]\)\@<=\[\s*" end="\s*]" contains=ALLBUT,@plezuroNotTop
endif

" Expression Substitution and Backslash Notation
syn match plezuroStringEscape "\\\\\|\\[abefnrstv]\|\\\o\{1,3}\|\\x\x\{1,2}"						    contained display
syn match plezuroStringEscape "\%(\\M-\\C-\|\\C-\\M-\|\\M-\\c\|\\c\\M-\|\\c\|\\C-\|\\M-\)\%(\\\o\{1,3}\|\\x\x\{1,2}\|\\\=\S\)" contained display
syn match plezuroQuoteEscape  "\\[\\']"											    contained display

syn region plezuroInterpolation	      matchgroup=plezuroInterpolationDelimiter start="#{" end="}" contained contains=ALLBUT,@plezuroNotTop
syn match  plezuroInterpolation	      "#\%(\$\|@@\=\)\w\+"    display contained contains=plezuroInterpolationDelimiter,plezuroInstanceVariable,plezuroClassVariable,plezuroGlobalVariable,plezuroPredefinedVariable
syn match  plezuroInterpolationDelimiter "#\ze\%(\$\|@@\=\)\w\+" display contained
syn match  plezuroInterpolation	      "#\$\%(-\w\|\W\)"       display contained contains=plezuroInterpolationDelimiter,plezuroPredefinedVariable,plezuroInvalidVariable
syn match  plezuroInterpolationDelimiter "#\ze\$\%(-\w\|\W\)"    display contained
syn region plezuroNoInterpolation	      start="\\#{" end="}"            contained
syn match  plezuroNoInterpolation	      "\\#{"		      display contained
syn match  plezuroNoInterpolation	      "\\#\%(\$\|@@\=\)\w\+"  display contained
syn match  plezuroNoInterpolation	      "\\#\$\W"		      display contained

syn match plezuroDelimEscape	"\\[(<{\[)>}\]]" transparent display contained contains=NONE

syn region plezuroNestedParentheses    start="("  skip="\\\\\|\\)"  matchgroup=plezuroString end=")"	transparent contained
syn region plezuroNestedCurlyBraces    start="{"  skip="\\\\\|\\}"  matchgroup=plezuroString end="}"	transparent contained
syn region plezuroNestedAngleBrackets  start="<"  skip="\\\\\|\\>"  matchgroup=plezuroString end=">"	transparent contained
syn region plezuroNestedSquareBrackets start="\[" skip="\\\\\|\\\]" matchgroup=plezuroString end="\]"	transparent contained

" These are mostly Oniguruma ready
syn region plezuroRegexpComment	matchgroup=plezuroRegexpSpecial   start="(?#"								  skip="\\)"  end=")"  contained
syn region plezuroRegexpParens	matchgroup=plezuroRegexpSpecial   start="(\(?:\|?<\=[=!]\|?>\|?<[a-z_]\w*>\|?[imx]*-[imx]*:\=\|\%(?#\)\@!\)" skip="\\)"  end=")"  contained transparent contains=@plezuroRegexpSpecial
syn region plezuroRegexpBrackets	matchgroup=plezuroRegexpCharClass start="\[\^\="								  skip="\\\]" end="\]" contained transparent contains=plezuroStringEscape,plezuroRegexpEscape,plezuroRegexpCharClass oneline
syn match  plezuroRegexpCharClass	"\\[DdHhSsWw]"	       contained display
syn match  plezuroRegexpCharClass	"\[:\^\=\%(alnum\|alpha\|ascii\|blank\|cntrl\|digit\|graph\|lower\|print\|punct\|space\|upper\|xdigit\):\]" contained
syn match  plezuroRegexpEscape	"\\[].*?+^$|\\/(){}[]" contained
syn match  plezuroRegexpQuantifier	"[*?+][?+]\="	       contained display
syn match  plezuroRegexpQuantifier	"{\d\+\%(,\d*\)\=}?\=" contained display
syn match  plezuroRegexpAnchor	"[$^]\|\\[ABbGZz]"     contained display
syn match  plezuroRegexpDot	"\."		       contained display
syn match  plezuroRegexpSpecial	"|"		       contained display
syn match  plezuroRegexpSpecial	"\\[1-9]\d\=\d\@!"     contained display
syn match  plezuroRegexpSpecial	"\\k<\%([a-z_]\w*\|-\=\d\+\)\%([+-]\d\+\)\=>" contained display
syn match  plezuroRegexpSpecial	"\\k'\%([a-z_]\w*\|-\=\d\+\)\%([+-]\d\+\)\='" contained display
syn match  plezuroRegexpSpecial	"\\g<\%([a-z_]\w*\|-\=\d\+\)>" contained display
syn match  plezuroRegexpSpecial	"\\g'\%([a-z_]\w*\|-\=\d\+\)'" contained display

syn cluster plezuroStringSpecial	      contains=plezuroInterpolation,plezuroNoInterpolation,plezuroStringEscape
syn cluster plezuroExtendedStringSpecial contains=@plezuroStringSpecial,plezuroNestedParentheses,plezuroNestedCurlyBraces,plezuroNestedAngleBrackets,plezuroNestedSquareBrackets
syn cluster plezuroRegexpSpecial	      contains=plezuroInterpolation,plezuroNoInterpolation,plezuroStringEscape,plezuroRegexpSpecial,plezuroRegexpEscape,plezuroRegexpBrackets,plezuroRegexpCharClass,plezuroRegexpDot,plezuroRegexpQuantifier,plezuroRegexpAnchor,plezuroRegexpParens,plezuroRegexpComment

" Numbers and ASCII Codes
syn match plezuroASCIICode "\%(\w\|[]})\"'/]\)\@<!\%(?\%(\\M-\\C-\|\\C-\\M-\|\\M-\\c\|\\c\\M-\|\\c\|\\C-\|\\M-\)\=\%(\\\o\{1,3}\|\\x\x\{1,2}\|\\\=\S\)\)"
syn match plezuroInteger	"\%(\%(\w\|[]})\"']\s*\)\@<!-\)\=\<0[xX]\x\+\%(_\x\+\)*r\=i\=\>"								display
syn match plezuroInteger	"\%(\%(\w\|[]})\"']\s*\)\@<!-\)\=\<\%(0[dD]\)\=\%(0\|[1-9]\d*\%(_\d\+\)*\)r\=i\=\>"						display
syn match plezuroInteger	"\%(\%(\w\|[]})\"']\s*\)\@<!-\)\=\<0[oO]\=\o\+\%(_\o\+\)*r\=i\=\>"								display
syn match plezuroInteger	"\%(\%(\w\|[]})\"']\s*\)\@<!-\)\=\<0[bB][01]\+\%(_[01]\+\)*r\=i\=\>"								display
syn match plezuroFloat	"\%(\%(\w\|[]})\"']\s*\)\@<!-\)\=\<\%(0\|[1-9]\d*\%(_\d\+\)*\)\.\d\+\%(_\d\+\)*r\=i\=\>"					display
syn match plezuroFloat	"\%(\%(\w\|[]})\"']\s*\)\@<!-\)\=\<\%(0\|[1-9]\d*\%(_\d\+\)*\)\%(\.\d\+\%(_\d\+\)*\)\=\%([eE][-+]\=\d\+\%(_\d\+\)*\)r\=i\=\>"	display

" Identifiers
syn match plezuroLocalVariableOrMethod "\<[_[:lower:]][_[:alnum:]]*[?!=]\=" contains=NONE display transparent
syn match plezuroBlockArgument	    "&[_[:lower:]][_[:alnum:]]"		 contains=NONE display transparent

syn match  plezuroConstant		"\%(\%(^\|[^.]\)\.\s*\)\@<!\<\u\%(\w\|[^\x00-\x7F]\)*\>\%(\s*(\)\@!"
syn match  plezuroClassVariable	"@@\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*" display
syn match  plezuroInstanceVariable "@\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*"  display
syn match  plezuroGlobalVariable	"$\%(\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*\|-.\)"
syn match  plezuroSymbol		"[]})\"':]\@<!:\%(\^\|\~@\|\~\|<<\|<=>\|<=\|<\|===\|[=!]=\|[=!]\~\|!@\|!\|>>\|>=\|>\||\|-@\|-\|/\|\[]=\|\[]\|\*\*\|\*\|&\|%\|+@\|+\|`\)"
syn match  plezuroSymbol		"[]})\"':]\@<!:\$\%(-.\|[`~<=>_,;:!?/.'"@$*\&+0]\)"
syn match  plezuroSymbol		"[]})\"':]\@<!:\%(\$\|@@\=\)\=\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*"
syn match  plezuroSymbol		"[]})\"':]\@<!:\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*\%([?!=]>\@!\)\="
syn region plezuroSymbol		start="[]})\"':]\@<!:'"  end="'"  skip="\\\\\|\\'"  contains=plezuroQuoteEscape fold
syn region plezuroSymbol		start="[]})\"':]\@<!:\"" end="\"" skip="\\\\\|\\\"" contains=@plezuroStringSpecial fold

syn match  plezuroCapitalizedMethod	"\%(\%(^\|[^.]\)\.\s*\)\@<!\<\u\%(\w\|[^\x00-\x7F]\)*\>\%(\s*(\)*\s*(\@="

syn match  plezuroBlockParameter	  "\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*" contained
syn region plezuroBlockParameterList start="\%(\%(\<do\>\|{\)\s*\)\@<=|" end="|" oneline display contains=plezuroBlockParameter

syn match plezuroInvalidVariable	 "$[^ A-Za-z_-]"
syn match plezuroPredefinedVariable #$[!$&"'*+,./0:;<=>?@\`~]#
syn match plezuroPredefinedVariable "$\d\+"										   display
syn match plezuroPredefinedVariable "$_\>"											   display
syn match plezuroPredefinedVariable "$-[0FIKadilpvw]\>"									   display
syn match plezuroPredefinedVariable "$\%(deferr\|defout\|stderr\|stdin\|stdout\)\>"					   display
syn match plezuroPredefinedVariable "$\%(DEBUG\|FILENAME\|KCODE\|LOADED_FEATURES\|LOAD_PATH\|PROGRAM_NAME\|SAFE\|VERBOSE\)\>" display
syn match plezuroPredefinedConstant "\%(\%(^\|[^.]\)\.\s*\)\@<!\<\%(ARGF\|ARGV\|ENV\|DATA\|FALSE\|NIL\|STDERR\|STDIN\|STDOUT\|TOPLEVEL_BINDING\|TRUE\)\>\%(\s*(\)\@!"
syn match plezuroPredefinedConstant "\%(\%(^\|[^.]\)\.\s*\)\@<!\<\%(RUBY_\%(VERSION\|RELEASE_DATE\|PLATFORM\|PATCHLEVEL\|REVISION\|DESCRIPTION\|COPYRIGHT\|ENGINE\)\)\>\%(\s*(\)\@!"

" Normal Regular Expression
syn region plezuroRegexp matchgroup=plezuroRegexpDelimiter start="\%(\%(^\|\<\%(and\|or\|while\|until\|unless\|if\|elsif\|when\|not\|then\|else\)\|[;\~=!|&(,{[<>?:*+-]\)\s*\)\@<=/" end="/[iomxneus]*" skip="\\\\\|\\/" contains=@plezuroRegexpSpecial fold
syn region plezuroRegexp matchgroup=plezuroRegexpDelimiter start="\%(\h\k*\s\+\)\@<=/[ \t=]\@!" end="/[iomxneus]*" skip="\\\\\|\\/" contains=@plezuroRegexpSpecial fold

" Generalized Regular Expression
syn region plezuroRegexp matchgroup=plezuroRegexpDelimiter start="%r\z([~`!@#$%^&*_\-+=|\:;"',.? /]\)" end="\z1[iomxneus]*" skip="\\\\\|\\\z1" contains=@plezuroRegexpSpecial fold
syn region plezuroRegexp matchgroup=plezuroRegexpDelimiter start="%r{"				 end="}[iomxneus]*"   skip="\\\\\|\\}"	 contains=@plezuroRegexpSpecial fold
syn region plezuroRegexp matchgroup=plezuroRegexpDelimiter start="%r<"				 end=">[iomxneus]*"   skip="\\\\\|\\>"	 contains=@plezuroRegexpSpecial,plezuroNestedAngleBrackets,plezuroDelimEscape fold
syn region plezuroRegexp matchgroup=plezuroRegexpDelimiter start="%r\["				 end="\][iomxneus]*"  skip="\\\\\|\\\]"	 contains=@plezuroRegexpSpecial fold
syn region plezuroRegexp matchgroup=plezuroRegexpDelimiter start="%r("				 end=")[iomxneus]*"   skip="\\\\\|\\)"	 contains=@plezuroRegexpSpecial fold

" Normal String
let s:spell_cluster = exists('plezuro_spellcheck_strings') ? ',@Spell' : ''
exe 'syn region plezuroString matchgroup=plezuroStringDelimiter start="\"" end="\"" skip="\\\\\|\\\"" fold contains=@plezuroStringSpecial' . s:spell_cluster
exe 'syn region plezuroString matchgroup=plezuroStringDelimiter start="''" end="''" skip="\\\\\|\\''" fold contains=plezuroQuoteEscape'    . s:spell_cluster

" Shell Command Output
syn region plezuroString matchgroup=plezuroStringDelimiter start="`" end="`" skip="\\\\\|\\`" contains=@plezuroStringSpecial fold

" Generalized Single Quoted String, Symbol and Array of Strings
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[qw]\z([~`!@#$%^&*_\-+=|\:;"',.?/]\)" end="\z1" skip="\\\\\|\\\z1" fold
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[qw]{"				   end="}"   skip="\\\\\|\\}"	fold contains=plezuroNestedCurlyBraces,plezuroDelimEscape
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[qw]<"				   end=">"   skip="\\\\\|\\>"	fold contains=plezuroNestedAngleBrackets,plezuroDelimEscape
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[qw]\["				   end="\]"  skip="\\\\\|\\\]"	fold contains=plezuroNestedSquareBrackets,plezuroDelimEscape
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[qw]("				   end=")"   skip="\\\\\|\\)"	fold contains=plezuroNestedParentheses,plezuroDelimEscape
syn region plezuroString matchgroup=plezuroStringDelimiter start="%q "				   end=" "   skip="\\\\\|\\)"	fold
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%s\z([~`!@#$%^&*_\-+=|\:;"',.? /]\)"   end="\z1" skip="\\\\\|\\\z1" fold
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%s{"				   end="}"   skip="\\\\\|\\}"	fold contains=plezuroNestedCurlyBraces,plezuroDelimEscape
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%s<"				   end=">"   skip="\\\\\|\\>"	fold contains=plezuroNestedAngleBrackets,plezuroDelimEscape
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%s\["				   end="\]"  skip="\\\\\|\\\]"	fold contains=plezuroNestedSquareBrackets,plezuroDelimEscape
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%s("				   end=")"   skip="\\\\\|\\)"	fold contains=plezuroNestedParentheses,plezuroDelimEscape

" Generalized Double Quoted String and Array of Strings and Shell Command Output
" Note: %= is not matched here as the beginning of a double quoted string
syn region plezuroString matchgroup=plezuroStringDelimiter start="%\z([~`!@#$%^&*_\-+|\:;"',.?/]\)"	    end="\z1" skip="\\\\\|\\\z1" contains=@plezuroStringSpecial fold
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[QWx]\z([~`!@#$%^&*_\-+=|\:;"',.?/]\)" end="\z1" skip="\\\\\|\\\z1" contains=@plezuroStringSpecial fold
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[QWx]\={"				    end="}"   skip="\\\\\|\\}"	 contains=@plezuroStringSpecial,plezuroNestedCurlyBraces,plezuroDelimEscape    fold
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[QWx]\=<"				    end=">"   skip="\\\\\|\\>"	 contains=@plezuroStringSpecial,plezuroNestedAngleBrackets,plezuroDelimEscape  fold
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[QWx]\=\["				    end="\]"  skip="\\\\\|\\\]"	 contains=@plezuroStringSpecial,plezuroNestedSquareBrackets,plezuroDelimEscape fold
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[QWx]\=("				    end=")"   skip="\\\\\|\\)"	 contains=@plezuroStringSpecial,plezuroNestedParentheses,plezuroDelimEscape    fold
syn region plezuroString matchgroup=plezuroStringDelimiter start="%[Qx] "				    end=" "   skip="\\\\\|\\)"   contains=@plezuroStringSpecial fold

" Array of Symbols
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%i\z([~`!@#$%^&*_\-+=|\:;"',.?/]\)" end="\z1" skip="\\\\\|\\\z1" fold
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%i{"				end="}"   skip="\\\\\|\\}"	fold contains=plezuroNestedCurlyBraces,plezuroDelimEscape
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%i<"				end=">"   skip="\\\\\|\\>"	fold contains=plezuroNestedAngleBrackets,plezuroDelimEscape
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%i\["				end="\]"  skip="\\\\\|\\\]"	fold contains=plezuroNestedSquareBrackets,plezuroDelimEscape
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%i("				end=")"   skip="\\\\\|\\)"	fold contains=plezuroNestedParentheses,plezuroDelimEscape

" Array of interpolated Symbols
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%I\z([~`!@#$%^&*_\-+=|\:;"',.?/]\)" end="\z1" skip="\\\\\|\\\z1" contains=@plezuroStringSpecial fold
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%I{"				end="}"   skip="\\\\\|\\}"	 contains=@plezuroStringSpecial,plezuroNestedCurlyBraces,plezuroDelimEscape    fold
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%I<"				end=">"   skip="\\\\\|\\>"	 contains=@plezuroStringSpecial,plezuroNestedAngleBrackets,plezuroDelimEscape  fold
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%I\["				end="\]"  skip="\\\\\|\\\]"	 contains=@plezuroStringSpecial,plezuroNestedSquareBrackets,plezuroDelimEscape fold
syn region plezuroSymbol matchgroup=plezuroSymbolDelimiter start="%I("				end=")"   skip="\\\\\|\\)"	 contains=@plezuroStringSpecial,plezuroNestedParentheses,plezuroDelimEscape    fold

" Here Document
syn region plezuroHeredocStart matchgroup=plezuroStringDelimiter start=+\%(\%(class\s*\|\%([]})"'.]\|::\)\)\_s*\|\w\)\@<!<<-\=\zs\%(\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*\)+	 end=+$+ oneline contains=ALLBUT,@plezuroNotTop
syn region plezuroHeredocStart matchgroup=plezuroStringDelimiter start=+\%(\%(class\s*\|\%([]})"'.]\|::\)\)\_s*\|\w\)\@<!<<-\=\zs"\%([^"]*\)"+ end=+$+ oneline contains=ALLBUT,@plezuroNotTop
syn region plezuroHeredocStart matchgroup=plezuroStringDelimiter start=+\%(\%(class\s*\|\%([]})"'.]\|::\)\)\_s*\|\w\)\@<!<<-\=\zs'\%([^']*\)'+ end=+$+ oneline contains=ALLBUT,@plezuroNotTop
syn region plezuroHeredocStart matchgroup=plezuroStringDelimiter start=+\%(\%(class\s*\|\%([]})"'.]\|::\)\)\_s*\|\w\)\@<!<<-\=\zs`\%([^`]*\)`+ end=+$+ oneline contains=ALLBUT,@plezuroNotTop

syn region plezuroString start=+\%(\%(class\|::\)\_s*\|\%([]})"'.]\)\s\|\w\)\@<!<<\z(\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*\)\ze\%(.*<<-\=['`"]\=\h\)\@!+hs=s+2	matchgroup=plezuroStringDelimiter end=+^\z1$+ contains=plezuroHeredocStart,plezuroHeredoc,@plezuroStringSpecial fold keepend
syn region plezuroString start=+\%(\%(class\|::\)\_s*\|\%([]})"'.]\)\s\|\w\)\@<!<<"\z([^"]*\)"\ze\%(.*<<-\=['`"]\=\h\)\@!+hs=s+2	matchgroup=plezuroStringDelimiter end=+^\z1$+ contains=plezuroHeredocStart,plezuroHeredoc,@plezuroStringSpecial fold keepend
syn region plezuroString start=+\%(\%(class\|::\)\_s*\|\%([]})"'.]\)\s\|\w\)\@<!<<'\z([^']*\)'\ze\%(.*<<-\=['`"]\=\h\)\@!+hs=s+2	matchgroup=plezuroStringDelimiter end=+^\z1$+ contains=plezuroHeredocStart,plezuroHeredoc			fold keepend
syn region plezuroString start=+\%(\%(class\|::\)\_s*\|\%([]})"'.]\)\s\|\w\)\@<!<<`\z([^`]*\)`\ze\%(.*<<-\=['`"]\=\h\)\@!+hs=s+2	matchgroup=plezuroStringDelimiter end=+^\z1$+ contains=plezuroHeredocStart,plezuroHeredoc,@plezuroStringSpecial fold keepend

syn region plezuroString start=+\%(\%(class\|::\)\_s*\|\%([]}).]\)\s\|\w\)\@<!<<-\z(\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*\)\ze\%(.*<<-\=['`"]\=\h\)\@!+hs=s+3    matchgroup=plezuroStringDelimiter end=+^\s*\zs\z1$+ contains=plezuroHeredocStart,@plezuroStringSpecial fold keepend
syn region plezuroString start=+\%(\%(class\|::\)\_s*\|\%([]}).]\)\s\|\w\)\@<!<<-"\z([^"]*\)"\ze\%(.*<<-\=['`"]\=\h\)\@!+hs=s+3  matchgroup=plezuroStringDelimiter end=+^\s*\zs\z1$+ contains=plezuroHeredocStart,@plezuroStringSpecial fold keepend
syn region plezuroString start=+\%(\%(class\|::\)\_s*\|\%([]}).]\)\s\|\w\)\@<!<<-'\z([^']*\)'\ze\%(.*<<-\=['`"]\=\h\)\@!+hs=s+3  matchgroup=plezuroStringDelimiter end=+^\s*\zs\z1$+ contains=plezuroHeredocStart		     fold keepend
syn region plezuroString start=+\%(\%(class\|::\)\_s*\|\%([]}).]\)\s\|\w\)\@<!<<-`\z([^`]*\)`\ze\%(.*<<-\=['`"]\=\h\)\@!+hs=s+3  matchgroup=plezuroStringDelimiter end=+^\s*\zs\z1$+ contains=plezuroHeredocStart,@plezuroStringSpecial fold keepend

if exists('main_syntax') && main_syntax == 'eplezuro'
  let b:plezuro_no_expensive = 1
end

syn match  plezuroAliasDeclaration    "[^[:space:];#.()]\+" contained contains=plezuroSymbol,plezuroGlobalVariable,plezuroPredefinedVariable nextgroup=plezuroAliasDeclaration2 skipwhite
syn match  plezuroAliasDeclaration2   "[^[:space:];#.()]\+" contained contains=plezuroSymbol,plezuroGlobalVariable,plezuroPredefinedVariable
syn match  plezuroMethodDeclaration   "[^[:space:];#(]\+"	 contained contains=plezuroConstant,plezuroBoolean,plezuroPseudoVariable,plezuroInstanceVariable,plezuroClassVariable,plezuroGlobalVariable
syn match  plezuroClassDeclaration    "[^[:space:];#<]\+"	 contained contains=plezuroConstant,plezuroOperator
syn match  plezuroModuleDeclaration   "[^[:space:];#<]\+"	 contained contains=plezuroConstant,plezuroOperator
syn match  plezuroFunction "\<[_[:alpha:]][_[:alnum:]]*[?!=]\=[[:alnum:]_.:?!=]\@!" contained containedin=plezuroMethodDeclaration
syn match  plezuroFunction "\%(\s\|^\)\@<=[_[:alpha:]][_[:alnum:]]*[?!=]\=\%(\s\|$\)\@=" contained containedin=plezuroAliasDeclaration,plezuroAliasDeclaration2
syn match  plezuroFunction "\%([[:space:].]\|^\)\@<=\%(\[\]=\=\|\*\*\|[-+!~]@\=\|[*/%|&^~]\|<<\|>>\|[<>]=\=\|<=>\|===\|[=!]=\|[=!]\~\|!\|`\)\%([[:space:];#(]\|$\)\@=" contained containedin=plezuroAliasDeclaration,plezuroAliasDeclaration2,plezuroMethodDeclaration

syn cluster plezuroDeclaration contains=plezuroAliasDeclaration,plezuroAliasDeclaration2,plezuroMethodDeclaration,plezuroModuleDeclaration,plezuroClassDeclaration,plezuroFunction,plezuroBlockParameter

" Keywords
" Note: the following keywords have already been defined:
" begin case class def do end for if module unless until while
syn match   plezuroControl	       "\<\%(and\|break\|in\|next\|not\|or\|redo\|rescue\|retry\|return\)\>[?!]\@!"
syn match   plezuroOperator       "\<defined?" display
syn match   plezuroKeyword	       "\<\%(super\|yield\)\>[?!]\@!"
syn match   plezuroBoolean	       "\<\%(true\|false\)\>[?!]\@!"
syn match   plezuroPseudoVariable "\<\%(nil\|self\|__ENCODING__\|__dir__\|__FILE__\|__LINE__\|__callee__\|__method__\)\>[?!]\@!" " TODO: reorganise
syn match   plezuroBeginEnd       "\<\%(BEGIN\|END\)\>[?!]\@!"

" Expensive Mode - match 'end' with the appropriate opening keyword for syntax
" based folding and special highlighting of module/class/method definitions
if !exists("b:plezuro_no_expensive") && !exists("plezuro_no_expensive")
  syn match  plezuroDefine "\<alias\>"  nextgroup=plezuroAliasDeclaration  skipwhite skipnl
  syn match  plezuroDefine "\<def\>"    nextgroup=plezuroMethodDeclaration skipwhite skipnl
  syn match  plezuroDefine "\<undef\>"  nextgroup=plezuroFunction	     skipwhite skipnl
  syn match  plezuroClass	"\<class\>"  nextgroup=plezuroClassDeclaration  skipwhite skipnl
  syn match  plezuroModule "\<module\>" nextgroup=plezuroModuleDeclaration skipwhite skipnl

  syn region plezuroMethodBlock start="\<def\>"	matchgroup=plezuroDefine end="\%(\<def\_s\+\)\@<!\<end\>" contains=ALLBUT,@plezuroNotTop fold
  syn region plezuroBlock	     start="\<class\>"	matchgroup=plezuroClass  end="\<end\>"		       contains=ALLBUT,@plezuroNotTop fold
  syn region plezuroBlock	     start="\<module\>" matchgroup=plezuroModule end="\<end\>"		       contains=ALLBUT,@plezuroNotTop fold

  " modifiers
  syn match plezuroConditionalModifier "\<\%(if\|unless\)\>"    display
  syn match plezuroRepeatModifier	     "\<\%(while\|until\)\>" display

  syn region plezuroDoBlock      matchgroup=plezuroControl start="\<do\>" end="\<end\>"                 contains=ALLBUT,@plezuroNotTop fold
  " curly bracket block or hash literal
  syn region plezuroCurlyBlock	matchgroup=plezuroCurlyBlockDelimiter  start="{" end="}"				contains=ALLBUT,@plezuroNotTop fold
  syn region plezuroArrayLiteral	matchgroup=plezuroArrayDelimiter	    start="\%(\w\|[\]})]\)\@<!\[" end="]"	contains=ALLBUT,@plezuroNotTop fold

  " statements without 'do'
  syn region plezuroBlockExpression       matchgroup=plezuroControl	  start="\<begin\>" end="\<end\>" contains=ALLBUT,@plezuroNotTop fold
  syn region plezuroCaseExpression	       matchgroup=plezuroConditional start="\<case\>"  end="\<end\>" contains=ALLBUT,@plezuroNotTop fold
  syn region plezuroConditionalExpression matchgroup=plezuroConditional start="\%(\%(^\|\.\.\.\=\|[{:,;([<>~\*%&^|+=-]\|\%(\<[_[:lower:]][_[:alnum:]]*\)\@<![?!]\)\s*\)\@<=\%(\\\n\s*\)\@<!\%(if\|unless\)\>" end="\%(\%(\%(\.\@<!\.\)\|::\)\s*\)\@<!\<end\>" contains=ALLBUT,@plezuroNotTop fold

  syn match plezuroConditional "\<\%(then\|else\|when\)\>[?!]\@!"	contained containedin=plezuroCaseExpression
  syn match plezuroConditional "\<\%(then\|else\|elsif\)\>[?!]\@!" contained containedin=plezuroConditionalExpression

  syn match plezuroExceptional	  "\<\%(\%(\%(;\|^\)\s*\)\@<=rescue\|else\|ensure\)\>[?!]\@!" contained containedin=plezuroBlockExpression
  syn match plezuroMethodExceptional "\<\%(\%(\%(;\|^\)\s*\)\@<=rescue\|else\|ensure\)\>[?!]\@!" contained containedin=plezuroMethodBlock

  " statements with optional 'do'
  syn region plezuroOptionalDoLine   matchgroup=plezuroRepeat start="\<for\>[?!]\@!" start="\%(\%(^\|\.\.\.\=\|[{:,;([<>~\*/%&^|+-]\|\%(\<[_[:lower:]][_[:alnum:]]*\)\@<![!=?]\)\s*\)\@<=\<\%(until\|while\)\>" matchgroup=plezuroOptionalDo end="\%(\<do\>\)" end="\ze\%(;\|$\)" oneline contains=ALLBUT,@plezuroNotTop
  syn region plezuroRepeatExpression start="\<for\>[?!]\@!" start="\%(\%(^\|\.\.\.\=\|[{:,;([<>~\*/%&^|+-]\|\%(\<[_[:lower:]][_[:alnum:]]*\)\@<![!=?]\)\s*\)\@<=\<\%(until\|while\)\>" matchgroup=plezuroRepeat end="\<end\>" contains=ALLBUT,@plezuroNotTop nextgroup=plezuroOptionalDoLine fold

  if !exists("plezuro_minlines")
    let plezuro_minlines = 500
  endif
  exec "syn sync minlines=" . plezuro_minlines

else
  syn match plezuroControl "\<def\>[?!]\@!"    nextgroup=plezuroMethodDeclaration skipwhite skipnl
  syn match plezuroControl "\<class\>[?!]\@!"  nextgroup=plezuroClassDeclaration  skipwhite skipnl
  syn match plezuroControl "\<module\>[?!]\@!" nextgroup=plezuroModuleDeclaration skipwhite skipnl
  syn match plezuroControl "\<\%(case\|begin\|do\|for\|if\|unless\|while\|until\|else\|elsif\|ensure\|then\|when\|end\)\>[?!]\@!"
  syn match plezuroKeyword "\<\%(alias\|undef\)\>[?!]\@!"
endif

" Special Methods
if !exists("plezuro_no_special_methods")
  syn keyword plezuroAccess    public protected private public_class_method private_class_method public_constant private_constant module_function
  " attr is a common variable name
  syn match   plezuroAttribute "\%(\%(^\|;\)\s*\)\@<=attr\>\(\s*[.=]\)\@!"
  syn keyword plezuroAttribute attr_accessor attr_reader attr_writer
  syn match   plezuroControl   "\<\%(exit!\|\%(abort\|at_exit\|exit\|fork\|loop\|trap\)\>[?!]\@!\)"
  syn keyword plezuroEval	    eval class_eval instance_eval module_eval
  syn keyword plezuroException raise fail catch throw
  " false positive with 'include?'
  syn match   plezuroInclude   "\<include\>[?!]\@!"
  syn keyword plezuroInclude   autoload extend load prepend refine require require_relative using
  syn keyword plezuroKeyword   callcc caller lambda proc
endif

" Comments and Documentation
syn match   plezuroSharpBang "\%^#!.*" display
syn keyword plezuroTodo	  FIXME NOTE TODO OPTIMIZE HACK REVIEW XXX todo contained
syn match   plezuroComment   "\/\/.*" contains=plezuroSharpBang,plezuroSpaceError,plezuroTodo,@Spell
if !exists("plezuro_no_comment_fold")
  syn region plezuroMultilineComment start="\%(\%(^\s*#.*\n\)\@<!\%(^\s*#.*\n\)\)\%(\(^\s*#.*\n\)\{1,}\)\@=" end="\%(^\s*#.*\n\)\@<=\%(^\s*#.*\n\)\%(^\s*#\)\@!" contains=plezuroComment transparent fold keepend
  syn region plezuroDocumentation	  start="^=begin\ze\%(\s.*\)\=$" end="^=end\%(\s.*\)\=$" contains=plezuroSpaceError,plezuroTodo,@Spell fold
else
  syn region plezuroDocumentation	  start="^=begin\s*$" end="^=end\s*$" contains=plezuroSpaceError,plezuroTodo,@Spell
endif

" Note: this is a hack to prevent 'keywords' being highlighted as such when called as methods with an explicit receiver
syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(alias\|and\|begin\|break\|case\|class\|def\|defined\|do\|else\)\>"		  transparent contains=NONE
syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(elsif\|end\|ensure\|false\|for\|if\|in\|module\|next\|nil\)\>"		  transparent contains=NONE
syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(not\|or\|redo\|refine\|rescue\|retry\|return\|self\|super\|then\|true\)\>"		  transparent contains=NONE
syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(undef\|unless\|until\|when\|while\|yield\|BEGIN\|END\|__FILE__\|__LINE__\)\>" transparent contains=NONE

syn match plezuroKeywordAsMethod "\<\%(alias\|begin\|case\|class\|def\|do\|end\)[?!]" transparent contains=NONE
syn match plezuroKeywordAsMethod "\<\%(if\|module\|refine\|undef\|unless\|until\|while\)[?!]" transparent contains=NONE

syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(abort\|at_exit\|attr\|attr_accessor\|attr_reader\)\>"	transparent contains=NONE
syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(attr_writer\|autoload\|callcc\|catch\|caller\)\>"		transparent contains=NONE
syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(eval\|class_eval\|instance_eval\|module_eval\|exit\)\>"	transparent contains=NONE
syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(extend\|fail\|fork\|include\|lambda\)\>"			transparent contains=NONE
syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(load\|loop\|prepend\|private\|proc\|protected\)\>"		transparent contains=NONE
syn match plezuroKeywordAsMethod "\%(\%(\.\@<!\.\)\|::\)\_s*\%(public\|require\|require_relative\|raise\|throw\|trap\|using\)\>"	transparent contains=NONE

syn match  plezuroSymbol		"\%([{(,]\_s*\)\@<=\l\w*[!?]\=::\@!"he=e-1
syn match  plezuroSymbol		"[]})\"':]\@<!\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*[!?]\=:[[:space:],]\@="he=e-1
syn match  plezuroSymbol		"\%([{(,]\_s*\)\@<=[[:space:],{]\l\w*[!?]\=::\@!"hs=s+1,he=e-1
syn match  plezuroSymbol		"[[:space:],{(]\%(\h\|[^\x00-\x7F]\)\%(\w\|[^\x00-\x7F]\)*[!?]\=:[[:space:],]\@="hs=s+1,he=e-1

" __END__ Directive
syn region plezuroData matchgroup=plezuroDataDirective start="^__END__$" end="\%$" fold

hi def link plezuroClass			plezuroDefine
hi def link plezuroModule			plezuroDefine
hi def link plezuroMethodExceptional	plezuroDefine
hi def link plezuroDefine			Define
hi def link plezuroFunction		Function
hi def link plezuroConditional		Conditional
hi def link plezuroConditionalModifier	plezuroConditional
hi def link plezuroExceptional		plezuroConditional
hi def link plezuroRepeat			Repeat
hi def link plezuroRepeatModifier		plezuroRepeat
hi def link plezuroOptionalDo		plezuroRepeat
hi def link plezuroControl			Statement
hi def link plezuroInclude			Include
hi def link plezuroInteger			Number
hi def link plezuroASCIICode		Character
hi def link plezuroFloat			Float
hi def link plezuroBoolean			Boolean
hi def link plezuroException		Exception
if !exists("plezuro_no_identifiers")
  hi def link plezuroIdentifier		Identifier
else
  hi def link plezuroIdentifier		NONE
endif
hi def link plezuroClassVariable		plezuroIdentifier
hi def link plezuroConstant		Type
hi def link plezuroGlobalVariable		plezuroIdentifier
hi def link plezuroBlockParameter		plezuroIdentifier
hi def link plezuroInstanceVariable	plezuroIdentifier
hi def link plezuroPredefinedIdentifier	plezuroIdentifier
hi def link plezuroPredefinedConstant	plezuroPredefinedIdentifier
hi def link plezuroPredefinedVariable	plezuroPredefinedIdentifier
hi def link plezuroSymbol			Constant
hi def link plezuroKeyword			Keyword
hi def link plezuroOperator		Operator
hi def link plezuroBeginEnd		Statement
hi def link plezuroAccess			Statement
hi def link plezuroAttribute		Statement
hi def link plezuroEval			Statement
hi def link plezuroPseudoVariable		Constant
hi def link plezuroCapitalizedMethod	plezuroLocalVariableOrMethod

hi def link plezuroComment			Comment
hi def link plezuroData			Comment
hi def link plezuroDataDirective		Delimiter
hi def link plezuroDocumentation		Comment
hi def link plezuroTodo			Todo

hi def link plezuroQuoteEscape		plezuroStringEscape
hi def link plezuroStringEscape		Special
hi def link plezuroInterpolationDelimiter	Delimiter
hi def link plezuroNoInterpolation		plezuroString
hi def link plezuroSharpBang		PreProc
hi def link plezuroRegexpDelimiter		plezuroStringDelimiter
hi def link plezuroSymbolDelimiter		plezuroSymbol
hi def link plezuroStringDelimiter		Delimiter
hi def link plezuroHeredoc			plezuroString
hi def link plezuroString			String
hi def link plezuroRegexpEscape		plezuroRegexpSpecial
hi def link plezuroRegexpQuantifier	plezuroRegexpSpecial
hi def link plezuroRegexpAnchor		plezuroRegexpSpecial
hi def link plezuroRegexpDot		plezuroRegexpCharClass
hi def link plezuroRegexpCharClass		plezuroRegexpSpecial
hi def link plezuroRegexpSpecial		Special
hi def link plezuroRegexpComment		Comment
hi def link plezuroRegexp			plezuroString

hi def link plezuroInvalidVariable		Error
hi def link plezuroError			Error
hi def link plezuroSpaceError		plezuroError

let b:current_syntax = "plezuro"

" vim: nowrap sw=2 sts=2 ts=8 noet:

