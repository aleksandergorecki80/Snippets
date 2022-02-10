/ [gn]inja /gi              //  ninja ginja
/ [a-z]/gi                  // zakres   
/ [a-zA-Z]/g                // zakres całość nie jest insensitive bo nie ma "i"
/ [a-zA-Z]+/g               // zakres jw. powtórzony wiele razy


// REPETATION
/ [a-zA-Z]{11}/g            // zakres jw. powtórzony 11 razy
/ [a-zA-Z]{5,11}/g          // zakres jw. powtórzony od 5 do 11 długi


// META CHARACTERS
/\d\s\w/gi                  // (match) /digit, whitespace, number/ np:   '1 w'
/\d{3}\s\w{5}/g               // (match ) /digit * 3,  whitespace, number * 5/ np:   '123 words'


// SPETIAL CHARACTERS
/hello?/        //  ? oznacza że znak przed nim jest opcjonalnu     (match)     'helol'
/a[0-10]?/g     //  (match)     /a[znak od 0 do 10]  np:   "a9"
/.+/            // " . " any character      " + " raz lub więcej (match) 'asghawryhrayhwasgsg...itd' random
/abc\*/g        // (match) 'abc*'           "\*"  eskape character


// Starting & Ending Patterns
/^[a-z]{5}$/gm      //  ^ - to co w regEx musi być na początkiem tego co wpisano    $  - i końcem 

//  Alternate Characters
/(p|t)yre/gm        //  p lub t  potem reszta   (match) "pyre" oraz "tyre"



//      RegEx in JavaScript     //

const reg = /[a-z]/ig;                          // a do z global insensitive 
const reg2 = new RegExp(/[a-z]/, 'i g');        // pierwszy parametr - regural expresion , drugi string of flags

