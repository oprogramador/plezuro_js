Token types
===========

The first step of the compilation is the tokenization.

Plezuro has the following token types (the order matters, when regex or condition of multiple tokens matches,
the first of them wins):

======================  ============================================================================= =====================
Type                    Regex or condition                                                            Example
======================  ============================================================================= =====================
single line comment     \\/\\/.*                                                                      //a comment
multi line comment      \\/\\*.*                                                                      /\*a comment\*/
regex                   r(('([^']|(''))*')|(\"([^\"]|(\"\"))*\"))                                     r'[a-k]'
bracket                 \\[\|\\]|\\(\|\\)|\\{\|\\}\|(#\\()\|(\\$\\()\|(%\\()                          {this + first}
number                  '^(0x[0-9a-f]+)|(0b[01]+)|(0[0-7]+)|([0-9]+(\.[0-9]+)?(e[\+\-]?[0-9]+)?)$'    23.45e56
declaration             \\$[A-Za-z\_]+[A-Za-z_0-9]*                                                   $aVariable
class field             [A-Za-z\_]+[A-Za-z_0-9]*::[A-Za-z\_]+[A-Za-z_0-9]*                            Person::totalNr
object field            @[A-Za-z\_]+[A-Za-z_0-9]*                                                     @name
whitespace              [ \\\t]+                                                                      
operator                one of defined char sequences                                                 \+
symbol                  [A-Za-z\_]+[A-Za-z_0-9]*                                                      aVariable
string                  ('')|('.*?([^\\\\]|(\\\\\\\\))')|(\"\")|(\".*?([^\\\\]|(\\\\\\\\))\")         'a text'
======================  ============================================================================= =====================
