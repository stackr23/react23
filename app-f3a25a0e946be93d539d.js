(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~cowsay"],{"./node_modules/cowsay/build/cowsay.umd.js":
/*!*************************************************!*\
  !*** ./node_modules/cowsay/build/cowsay.umd.js ***!
  \*************************************************/
/*! no static exports found */function(_,n,t){!function(_){"use strict";function n(_,n){return _(n={exports:{}},n.exports),n.exports}var t=n(function(_){_.exports=(()=>{const _=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|");return new RegExp(_,"g")})}),o=n(function(_){_.exports=(_=>!Number.isNaN(_)&&_>=4352&&(_<=4447||9001===_||9002===_||11904<=_&&_<=12871&&12351!==_||12880<=_&&_<=19903||19968<=_&&_<=42182||43360<=_&&_<=43388||44032<=_&&_<=55203||63744<=_&&_<=64255||65040<=_&&_<=65049||65072<=_&&_<=65131||65281<=_&&_<=65376||65504<=_&&_<=65510||110592<=_&&_<=110593||127488<=_&&_<=127569||131072<=_&&_<=262141))}),e=n(function(_){_.exports=(_=>{if("string"!=typeof _||0===_.length)return 0;_=(_=>"string"==typeof _?_.replace(t(),""):_)(_);let n=0;for(let t=0;t<_.length;t++){const e=_.codePointAt(t);e<=31||e>=127&&e<=159||e>=768&&e<=879||(e>65535&&t++,n+=o(e)?2:1)}return n})});function h(_,n,t){var o,h=function(_,n){_=_.replace(/\r\n?|[\n\u2028\u2029]/g,"\n").replace(/^\uFEFF/,"").replace(/\t/g,"        ");var t=[];if(n)for(var o=0;o<_.length;){var e=_.indexOf("\n",o),h=Math.min(o+n,-1===e?_.length:e);t.push(_.substring(o,h)),o=h,"\n"===_.charAt(o)&&(o+=1)}else t=_.split("\n");return t}(_,n),X=function(_){for(var n=0,t=0,o=_.length;t<o;t+=1)e(_[t])>n&&(n=e(_[t]));return n}(h);if(1===h.length)o=[" "+s(X),t.only[0]+" "+h[0]+" "+t.only[1]," "+u(X)];else{o=[" "+s(X)];for(var g=0,r=h.length;g<r;g+=1){var O;O=0===g?t.first:g===r-1?t.last:t.middle,o.push(O[0]+" "+$(h[g],X)+" "+O[1])}o.push(" "+u(X))}return o.join("\n")}function $(_,n){return _+new Array(n-e(_)+1).join(" ")}function s(_){return new Array(_+3).join("_")}function u(_){return new Array(_+3).join("-")}var X={say:function(_,n){return h(_,n,{first:["/","\\"],middle:["|","|"],last:["\\","/"],only:["<",">"]})},think:function(_,n){return h(_,n,{first:["(",")"],middle:["(",")"],last:["(",")"],only:["(",")"]})}},g=function(_,n){var t=r(n.eyes),o=r(n.tongue);return-1!==_.indexOf("$the_cow")&&(_=function(_){_=_.replace(/\r\n?|[\n\u2028\u2029]/g,"\n").replace(/^\uFEFF/,"");var n=/\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(_);return n?n[1].replace(/\\{2}/g,"\\").replace(/\\@/g,"@").replace(/\\\$/g,"$"):(console.error("Cannot parse cow file\n",_),_)}(_)),_.replace(/\$thoughts/g,n.thoughts).replace(/\$eyes/g,t).replace(/\$tongue/g,o).replace(/\$\{eyes\}/g,t).replace(/\$\{tongue\}/g,o)};function r(_){return _&&_.replace?_.replace(/\$/g,"$$$$"):_}var O={b:{eyes:"==",tongue:"  "},d:{eyes:"xx",tongue:"U "},g:{eyes:"$$",tongue:"  "},p:{eyes:"@@",tongue:"  "},s:{eyes:"**",tongue:"U "},t:{eyes:"--",tongue:"  "},w:{eyes:"OO",tongue:"  "},y:{eyes:"..",tongue:"  "}},c=function(_){for(var n in O)if(!0===_[n])return O[n];return{eyes:_.e||"oo",tongue:_.T||"  "}},E='$the_cow = <<"EOC";\n        $thoughts   ^__^\n         $thoughts  ($eyes)\\\\_______\n            (__)\\\\       )\\\\/\\\\\n             $tongue ||----w |\n                ||     ||\nEOC\n';function i(_){const n={e:_.eyes||"oo",T:_.tongue||"  ",n:_.wrap,W:_.wrapLength||40,text:_.text||"",_:_.text||[],f:_.cow};return _.mode&&(n[_.mode]=!0),n}function a(_,n){const t=_.f||E,o=c(_);o.thoughts=n?"\\":"o";const e=n?"say":"think";return X[e](_.text||_._.join(" "),_.n?null:_.W)+"\n"+g(t,o)}_.say=function(_){return a(i(_),!0)},_.think=function(_){return a(i(_),!1)},_.BEAVIS_ZEN="##\n## Beavis, with Zen philosophy removed.\n##\n$the_cow = <<EOC;\n   $thoughts         __------~~-,\n    $thoughts      ,'            ,\n          /               \\\\\n         /                :\n        |                  '\n        |                  |\n        |                  |\n         |   _--           |\n         _| =-.     .-.   ||\n         o|/o/       _.   |\n         /  ~          \\\\ |\n       (____\\@)  ___~    |\n          |_===~~~.`    |\n       _______.--~     |\n       \\\\________       |\n                \\\\      |\n              __/-___-- -__\n             /            _ \\\\\nEOC\n",_.BONG="##\n## A cow with a bong, from lars@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n         $thoughts\n          $thoughts\n            ^__^ \n    _______/($eyes)\n/\\\\/(       /(__)\n   | W----|| |~|\n   ||     || |~|  ~~\n             |~|  ~\n             |_| o\n             |#|/\n            _+#+_\nEOC\n",_.BUD_FROGS="##\n## The Budweiser frogs\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n          oO)-.                       .-(Oo\n         /__  _\\\\                     /_  __\\\\\n         \\\\  \\\\(  |     ()~()         |  )/  /\n          \\\\__|\\\\ |    (-___-)        | /|__/\n          '  '--'    ==`-'==        '--'  '\nEOC\n",_.BUNNY="##\n## A cute little wabbit\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts   \\\\\n        \\\\ /\\\\\n        ( )\n      .( o ).\nEOC\n",_.CHEESE="##\n## The cheese from milk & cheese\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n      _____   _________\n     /     \\\\_/         |\n    |                 ||\n    |                 ||\n   |    ###\\\\  /###   | |\n   |     0  \\\\/  0    | |\n  /|                 | |\n / |        <        |\\\\ \\\\\n| /|                 | | |\n| |     \\\\_______/   |  | |\n| |                 | / /\n/||                 /|||\n   ----------------|\n        | |    | |\n        ***    ***\n       /___\\\\  /___\\\\\nEOC\n",_.COWER="##\n## A cowering cow\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n        ,__, |    | \n        (oo)\\\\|    |___\n        (__)\\\\|    |   )\\\\_\n             |    |_w |  \\\\\n             |    |  ||   *\n\n             Cower....\nEOC\n",_.DAEMON="##\n## 4.4 >> 5.4\n##\n$the_cow = <<EOC;\n   $thoughts         ,        ,\n    $thoughts       /(        )`\n     $thoughts      \\\\ \\\\___   / |\n            /- _  `-/  '\n           (/\\\\/ \\\\ \\\\   /\\\\\n           / /   | `    \\\\\n           O O   ) /    |\n           `-^--'`<     '\n          (_.)  _  )   /\n           `.___/`    /\n             `-----' /\n<----.     __ / __   \\\\\n<----|====O)))==) \\\\) /====\n<----'    `--' `.__,' \\\\\n             |        |\n              \\\\       /\n        ______( (_  / \\\\______\n      ,'  ,-----'   |        \\\\\n      `--{__________)        \\\\/\nEOC\n",_.DEFAULT=E,_.DOGE="##\n## Doge\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n\n           _                _\n          / /.           _-//\n         / ///         _-   /\n        //_-//=========     /\n      _///        //_ ||   ./\n    _|                 -__-||\n   |  __              - \\\\   \\\n  |  |#-       _-|_           |\n  |            |#|||       _   |  \n |  _==_                       ||\n- ==|.=.=|_ =                  |\n|  |-|-  ___                  |\n|    --__   _                /\n||     ===                  |\n |                     _. //\n  ||_         __-   _-  _|\n     \\_______/  ___/  _|\n                   --*\nEOC\n",_.DRAGON_AND_COW="##\n## A dragon smiting a cow, possible credit to kube@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n                       $thoughts                    ^    /^\n                        $thoughts                  / \\\\  // \\\\\n                         $thoughts   |\\\\___/|      /   \\\\//  .\\\\\n                          $thoughts  /O  O  \\\\__  /    //  | \\\\ \\\\           *----*\n                            /     /  \\\\/_/    //   |  \\\\  \\\\          \\\\   |\n                            \\@___\\@`    \\\\/_   //    |   \\\\   \\\\         \\\\/\\\\ \\\\\n                           0/0/|       \\\\/_ //     |    \\\\    \\\\         \\\\  \\\\\n                       0/0/0/0/|        \\\\///      |     \\\\     \\\\       |  |\n                    0/0/0/0/0/_|_ /   (  //       |      \\\\     _\\\\     |  /\n                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\\\\.-~       /   /\n                             ,-}        _      *-.|.-~-.           .~    ~\n            \\\\     \\\\__/        `/\\\\      /                 ~-. _ .-~      /\n             \\\\____($eyes)           *.   }            {                   /\n             (    (--)          .----~-.\\\\        \\\\-`                 .~\n             //__\\\\\\\\  \\\\__ Ack!   ///.----..<        \\\\             _ -~\n            //    \\\\\\\\               ///-._ _ _ _ _ _ _{^ - - - - ~\nEOC\n",_.DRAGON="##\n## The Whitespace Dragon\n##\n$the_cow = <<EOC;\n      $thoughts                    / \\\\  //\\\\\n       $thoughts    |\\\\___/|      /   \\\\//  \\\\\\\\\n            /0  0  \\\\__  /    //  | \\\\ \\\\    \n           /     /  \\\\/_/    //   |  \\\\  \\\\  \n           \\@_^_\\@'/   \\\\/_   //    |   \\\\   \\\\ \n           //_^_/     \\\\/_ //     |    \\\\    \\\\\n        ( //) |        \\\\///      |     \\\\     \\\\\n      ( / /) _|_ /   )  //       |      \\\\     _\\\\\n    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\\\.-~        .-~~~^-.\n  (( / / )) ,-{        _      `-.|.-~-.           .~         `.\n (( // / ))  '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\\n (( /// ))      `.   {            }                   /      \\\\  \\\\\n  (( / ))     .----~-.\\\\        \\\\-'                 .~         \\\\  `. \\\\^-.\n             ///.----..>        \\\\             _ -~             `.  ^-`  ^-_\n               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~\n                                                                  /.-~\nEOC\n",_.ELEPHANT_IN_SNAKE="##\n## Do we need to explain this?\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts              ....       \n           ........    .      \n          .            .      \n         .             .      \n.........              .......\n..............................\n\nElephant inside ASCII snake\nEOC\n",_.ELEPHANT="##\n## An elephant out and about\n##\n$the_cow = <<EOC;\n $thoughts     /\\\\  ___  /\\\\\n  $thoughts   // \\\\/   \\\\/ \\\\\\\\\n     ((    O O    ))\n      \\\\\\\\ /     \\\\ //\n       \\\\/  | |  \\\\/ \n        |  | |  |  \n        |  | |  |  \n        |   o   |  \n        | |   | |  \n        |m|   |m|  \nEOC\n",_.EYES='##\n## Evil-looking eyes\n##\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n                                   .::!!!!!!!:.\n  .!!!!!:.                        .:!!!!!!!!!!!!\n  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW\\$\\$\\$ \n      :\\$\\$NWX!!:           .:!!!!!!XUWW\\$\\$\\$\\$\\$\\$\\$\\$\\$P \n      \\$\\$\\$\\$\\$##WX!:      .<!!!!UW\\$\\$\\$\\$"  \\$\\$\\$\\$\\$\\$\\$\\$# \n      \\$\\$\\$\\$\\$  \\$\\$\\$UX   :!!UW\\$\\$\\$\\$\\$\\$\\$\\$\\$   4\\$\\$\\$\\$\\$* \n      ^\\$\\$\\$B  \\$\\$\\$\\$\\\\     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$   d\\$\\$R" \n        "*\\$bd\\$\\$\\$\\$      \'*\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$o+#" \n             """"          """"""" \nEOC\n',_.FLAMING_SHEEP="##\n## The flaming sheep, contributed by Geordan Rosario (geordan@csua.berkeley.edu)\n##\n$the_cow = <<EOC;\n  $thoughts            .    .     .   \n   $thoughts      .  . .     `  ,     \n    $thoughts    .; .  : .' :  :  : . \n     $thoughts   i..`: i` i.i.,i  i . \n      $thoughts   `,--.|i |i|ii|ii|i: \n           U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.||' \n           \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)'  \n                (\\@\\@\\@\\@\\@\\@\\@\\@)    \n                `YY~~~~YY'    \n                 ||    ||     \nEOC\n",_.GHOSTBUSTERS='##\n## Ghostbusters!\n##\n$the_cow = <<EOC;\n          $thoughts\n           $thoughts\n            $thoughts          __---__\n                    _-       /--______\n               __--( /     \\\\ )XXXXXXXXXXX\\\\v.\n             .-XXX(   O   O  )XXXXXXXXXXXXXXX-\n            /XXX(       U     )        XXXXXXX\\\\\n          /XXXXX(              )--_  XXXXXXXXXXX\\\\\n         /XXXXX/ (      O     )   XXXXXX   \\\\XXXXX\\\\\n         XXXXX/   /            XXXXXX   \\\\__ \\\\XXXXX\n         XXXXXX__/          XXXXXX         \\\\__----\x3e\n ---___  XXX__/          XXXXXX      \\\\__         /\n   \\\\-  --__/   ___/\\\\  XXXXXX            /  ___--/=\n    \\\\-\\\\    ___/    XXXXXX              \'--- XXXXXX\n       \\\\-\\\\/XXX\\\\ XXXXXX                      /XXXXX\n         \\\\XXXXXXXXX   \\\\                    /XXXXX/\n          \\\\XXXXXX      >                 _/XXXXX/\n            \\\\XXXXX--__/              __-- XXXX/\n             -XXXXXXXX---------------  XXXXXX-\n                \\\\XXXXXXXXXXXXXXXXXXXXXXXXXX/\n                  ""VXXXXXXXXXXXXXXXXXXV""\nEOC\n',_.GOAT='#\n#\tCodeGoat.io: https://github.com/danyshaanan/goatsay\n#\n$the_cow = <<EOC;\n        $thoughts\n         $thoughts\n          )__(\n         \'|$eyes|\'________/\n          |__|         |\n           $tongue||"""""""||\n             ||       ||\n\nEOC\n',_.HEDGEHOG="##\n## A cute little hedgehog\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts ..:::::::::.\n    ::::::::::::::\n   /. `::::::::::::\n  O__,_:::::::::::'\nEOC\n",_.HELLOKITTY="##\n## Hello Kitty\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n      /\\\\_)o<\n     |      \\\\\n     | O . O|\n      \\\\_____/\nEOC\n",_.KISS="##\n## A lovers' empbrace\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n             ,;;;;;;;,\n            ;;;;;;;;;;;,\n           ;;;;;'_____;'\n           ;;;(/))))|((\\\\\n           _;;((((((|))))\n          / |_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n     .--~(  \\\\ ~))))))))))))\n    /     \\\\  `\\\\-(((((((((((\\\\\\\\\n    |    | `\\\\   ) |\\\\       /|)\n     |    |  `. _/  \\\\_____/ |\n      |    , `\\\\~            /\n       |    \\\\  \\\\           /\n      | `.   `\\\\|          /\n      |   ~-   `\\\\        /\n       \\\\____~._/~ -_,   (\\\\\n        |-----|\\\\   \\\\    ';;\n       |      | :;;;'     \\\\\n      |  /    |            |\n      |       |            |\nEOC\n",_.KITTY="##\n## A kitten of sorts, I think\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n       (\"`-'  '-/\") .___..--' ' \"`-._\n         ` *_ *  )    `-.   (      ) .`-.__. `)\n         (_Y_.) ' ._   )   `._` ;  `` -. .-'\n      _.. `--'_..-_/   /--' _ .' ,4\n   ( i l ),-''  ( l i),'  ( ( ! .-'    \nEOC\n",_.KOALA="##\n## From the canonical koala collection\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n       ___  \n     {~._.~}\n      ( Y )\n     ()~*~()   \n     (_)-(_)   \nEOC\n",_.KOSH="##\n## It's a Kosh Cow!\n##\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n      $thoughts\n  ___       _____     ___\n /   \\\\     /    /|   /   \\\\\n|     |   /    / |  |     |\n|     |  /____/  |  |     |     \n|     |  |    |  |  |     |\n|     |  | {} | /   |     |\n|     |  |____|/    |     |\n|     |    |==|     |     |\n|      \\\\___________/      |\n|                         |\n|                         |\nEOC\n",_.LUKE_KOALA="##\n## From the canonical koala collection\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts          .\n       ___   //\n     {~._.~}// \n      ( Y )K/  \n     ()~*~()   \n     (_)-(_)   \n     Luke    \n     Sywalker\n     koala   \nEOC\n",_.MECH_AND_COW="                      $thoughts             ,-----.\n                       $thoughts            |     |\n                        $thoughts        ,--|     |-.\n                         __,----|  |     | |\n                       ,;::     |  `_____' |\n                       `._______|    i^i   |\n                                `----| |---'| .\n                           ,-------._| |== ||//\n                           |       |_|P`.  /'/\n                           `-------' 'Y Y/'/'\n                                     .==\\ /_\\\n   ^__^                             /   /'|  `i\n   ($eyes)\\_______                   /'   /  |   |\n   (__)\\       )\\/\\             /'    /   |   `i\n    $tongue  ||----w |           ___,;`----'.___L_,-'`\\__\n       ||     ||          i_____;----\\.____i\"\"\\____\\\n\n\n\n\n\n",_.MEOW="##\n## A meowing tiger?\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts ,   _ ___.--'''`--''//-,-_--_.\n      \\\\`\"' ` || \\\\\\\\ \\\\ \\\\\\\\/ / // / ,-\\\\\\\\`,_\n     /'`  \\\\ \\\\ || Y  | \\\\|/ / // / - |__ `-,\n    /\\@\"\\\\  ` \\\\ `\\\\ |  | ||/ // | \\\\/  \\\\  `-._`-,_.,\n   /  _.-. `.-\\\\,___/\\\\ _/|_/_\\\\_\\\\/|_/ |     `-._._)\n   `-'``/  /  |  // \\\\__/\\\\__  /  \\\\__/ \\\\\n        `-'  /-\\\\/  | -|   \\\\__ \\\\   |-' |\n          __/\\\\ / _/ \\\\/ __,-'   ) ,' _|'\n         (((__/(((_.' ((___..-'((__,'\nEOC\n",_.MILK="##\n## Milk from Milk and Cheese\n##\n$the_cow = <<EOC;\n $thoughts     ____________ \n  $thoughts    |__________|\n      /           /\\\\\n     /           /  \\\\\n    /___________/___/|\n    |          |     |\n    |  ==\\\\ /== |     |\n    |   O   O  | \\\\ \\\\ |\n    |     <    |  \\\\ \\\\|\n   /|          |   \\\\ \\\\\n  / |  \\\\_____/ |   / /\n / /|          |  / /|\n/||\\\\|          | /||\\\\/\n    -------------|   \n        | |    | | \n       <__/    \\\\__>\nEOC\n",_.MOOFASA="##\n## MOOfasa.\n##\n$the_cow = <<EOC;\n       $thoughts    ____\n        $thoughts  /    \\\\\n          | ^__^ |\n          | ($eyes) |______\n          | (__) |      )\\\\/\\\\\n           \\\\____/|----w |\n                ||     ||\n\n\t         Moofasa\nEOC\n",_.MOOSE="$the_cow = <<EOC;\n  $thoughts\n   $thoughts   \\\\_\\\\_    _/_/\n    $thoughts      \\\\__/\n           ($eyes)\\\\_______\n           (__)\\\\       )\\\\/\\\\\n            $tongue ||----- |\n               ||     ||\nEOC\n",_.MUTILATED="##\n## A mutilated cow, from aspolito@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n       $thoughts   \\\\_______\n v__v   $thoughts  \\\\   O   )\n ($eyes)      ||----w |\n (__)      ||     ||  \\\\/\\\\\n  $tongue\nEOC\n",_.REN="##\n## Ren \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n    ____  \n   /# /_\\\\_\n  |  |/o\\\\o\\\\\n  |  \\\\\\\\_/_/\n / |_   |  \n|  ||\\\\_ ~| \n|  ||| \\\\/  \n|  |||_    \n \\\\//  |    \n  ||  |    \n  ||_  \\\\   \n  \\\\_|  o|  \n  /\\\\___/   \n /  ||||__ \n    (___)_)\nEOC\n",_.SATANIC="##\n## Satanic cow, source unknown.\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts  (__)  \n         (\\\\/)  \n  /-------\\\\/    \n / | 666 ||    \n*  ||----||      \n   ~~    ~~      \nEOC\n",_.SHEEP="##\n## The non-flaming sheep.\n##\n$the_cow = <<EOC\n  $thoughts\n   $thoughts\n       __     \n      U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.\n      \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)\n           (\\@\\@\\@\\@\\@\\@\\@\\@)\n           `YY~~~~YY'\n            ||    ||\nEOC\n",_.SKELETON="##\n## This 'Scowleton' brought to you by one of \n## {appel,kube,rowe}@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n          $thoughts      (__)      \n           $thoughts     /$eyes|  \n            $thoughts   (_\"_)*+++++++++*\n                   //I#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I\\\\\n                   I[I|I|||||I I `\n                   I`I'///'' I I\n                   I I       I I\n                   ~ ~       ~ ~\n                     Scowleton\nEOC\n",_.SMALL='##\n## A small cow, artist unknown\n##\n$eyes = ".." unless ($eyes);\n$the_cow = <<EOC;\n       $thoughts   ,__,\n        $thoughts  ($eyes)____\n           (__)    )\\\\\n            $tongue||--|| *\nEOC\n',_.SQUIRREL="$the_cow = <<EOC;\n  $thoughts\n     $thoughts\n                  _ _\n       | \\__/|  .~    ~.\n       /$eyes `./      .'\n      {o__,   \\    {\n        / .  . )    \\\n        `-` '-' \\    }\n       .(   _(   )_.'\n      '---.~_ _ _|\n                                                     \nEOC\n",_.STEGOSAURUS="##\n## A stegosaur with a top hat?\n##\n$the_cow = <<EOC;\n  $thoughts                           .       .\n   $thoughts                         / `.   .' \"\n    $thoughts                .---.  <    > <    >  .---.\n     $thoughts               |    \\\\  \\\\ - ~ ~ - /  /    |\n         _____          ..-~             ~-..-~\n        |     |   \\\\~~~\\\\.'                    `./~~~/\n       ---------   \\\\__/                        \\\\__/\n      .'  O    \\\\     /               /       \\\\  \"\n     (_____,    `._.'               |         }  \\\\/~~~/\n      `----.          /       }     |        /    \\\\__/\n            `-.      |       /      |       /      `. ,~~|\n                ~-.__|      /_ - ~ ^|      /- _      `..-‘ / \\\\  /\\\\\n                     |     /        |     /     ~-.     `-/ _ \\\\/__\\\\\n                     |_____|        |_____|         ~ - . _ _ _ _ _>\nEOC\n",_.STIMPY="##\n## Stimpy!\n##\n$the_cow = <<EOC;\n  $thoughts     .    _  .    \n   $thoughts    |\\\\_|/__/|    \n       / / \\\\/ \\\\  \\\\  \n      /__|O||O|__ \\\\ \n     |/_ \\\\_/\\\\_/ _\\\\ |  \n     | | (____) | ||  \n     \\\\/\\\\___/\\\\__/  // \n     (_/         ||\n      |          ||\n      |          ||\\\\   \n       \\\\        //_/  \n        \\\\______//\n       __ || __||\n      (____(____)\nEOC\n",_.SUPERMILKER="##\n## A cow being milked, probably from Lars Smith (lars@csua.berkeley.edu)\n##\n$the_cow = <<EOC;\n  $thoughts   ^__^\n   $thoughts  ($eyes)\\\\_______        ________\n      (__)\\\\       )\\\\/\\\\    |Super |\n       $tongue ||----W |       |Milker|\n          ||    UDDDDDDDDD|______|\nEOC\n",_.SURGERY="##\n## A cow operation, artist unknown\n##\n$the_cow = <<EOC;\n          $thoughts           \\\\  / \n           $thoughts           \\\\/  \n               (__)    /\\\\         \n               ($eyes)   O  O        \n               _\\\\/_   //         \n         *    (    ) //       \n          \\\\  (\\\\\\\\    //       \n           \\\\(  \\\\\\\\    )                              \n            (   \\\\\\\\   )   /\\\\                          \n  ___[\\\\______/^^^^^^^\\\\__/) o-)__                     \n |\\\\__[=======______//________)__\\\\                    \n \\\\|_______________//____________|                    \n     |||      || //||     |||\n     |||      || @.||     |||                        \n      ||      \\\\/  .\\\\/      ||                        \n                 . .                                 \n                '.'.`                                \n\n            COW-OPERATION                           \nEOC\n",_.TELEBEARS="##\n## A cow performing an unnatural act, artist unknown.\n##\n$the_cow = <<EOC;\n      $thoughts                _\n       $thoughts              (_)   <-- TeleBEARS\n        $thoughts   ^__^       / \\\\\n         $thoughts  ($eyes)\\\\_____/_\\\\ \\\\\n            (__)\\\\  you  ) /\n             $tongue ||----w ((\n                ||     ||>> \nEOC\n",_.TURKEY="##\n## Turkey!\n##\n$the_cow = <<EOC;\n  $thoughts                                  ,+*^^*+___+++_\n   $thoughts                           ,*^^^^              )\n    $thoughts                       _+*                     ^**+_\n     $thoughts                    +^       _ _++*+_+++_,         )\n              _+^^*+_    (     ,+*^ ^          \\\\+_        )\n             {       )  (    ,(    ,_+--+--,      ^)      ^\\\\\n            { (\\@)    } f   ,(  ,+-^ __*_*_  ^^\\\\_   ^\\\\       )\n           {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /\n          ( /  (    (        ,___    ^*+_+* )   <    <      \\\\\n           U _/     )    *--<  ) ^\\\\-----++__)   )    )       )\n            (      )  _(^)^^))  )  )\\\\^^^^^))^*+/    /       /\n          (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^\n         (     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)\n          *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^\n          \\\\             \\\\_)^)_)) ))^^^^^^^^^^))^^^^)\n           (_             ^\\\\__^^^^^^^^^^^^))^^^^^^^)\n             ^\\\\___            ^\\\\__^^^^^^))^^^^^^^^)\\\\\\\\\n                  ^^^^^\\\\uuu/^^\\\\uuu/^^^^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\\n                     ___) >____) >___   ^\\\\_\\\\_\\\\_\\\\_\\\\_\\\\_\\\\)\n                    ^^^//\\\\\\\\_^^//\\\\\\\\_^       ^(\\\\_\\\\_\\\\_\\\\)\n                      ^^^ ^^ ^^^ ^\nEOC\n",_.TURTLE="##\n## A mysterious turtle...\n##\n$the_cow = <<EOC;\n    $thoughts                                  ___-------___\n     $thoughts                             _-~~             ~~-_\n      $thoughts                         _-~                    /~-_\n             /^\\\\__/^\\\\         /~  \\\\                   /    \\\\\n           /|  O|| O|        /      \\\\_______________/        \\\\\n          | |___||__|      /       /                \\\\          \\\\\n          |          \\\\    /      /                    \\\\          \\\\\n          |   (_______) /______/                        \\\\_________ \\\\\n          |         / /         \\\\                      /            \\\\\n           \\\\         \\\\^\\\\\\\\         \\\\                  /               \\\\     /\n             \\\\         ||           \\\\______________/      _-_       //\\\\__//\n               \\\\       ||------_-~~-_ ------------- \\\\ --/~   ~\\\\    || __/\n                 ~-----||====/~     |==================|       |/~~~~~\n                  (_(__/  ./     /                    \\\\_\\\\      \\\\.\n                         (_(___/                         \\\\_____)_)\nEOC\n",_.TUX="##\n## TuX\n## (c) pborys@p-soft.silesia.linux.org.pl \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n        .--.\n       |o_o |\n       |:_/ |\n      //   \\\\ \\\\\n     (|     | )\n    /'\\\\_   _/`\\\\\n    \\\\___)=(___/\n\nEOC\n",_.VADER_KOALA="##\n## Another canonical koala?\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts        .\n     .---.  //\n    Y|o o|Y// \n   /_(i=i)K/ \n   ~()~*~()~  \n    (_)-(_)   \n\n     Darth \n     Vader    \n     koala        \nEOC\n",_.VADER="##\n## Cowth Vader, from geordan@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n        $thoughts    ,-^-.\n         $thoughts   !oYo!\n          $thoughts /./=\\\\.\\\\______\n               ##        )\\\\/\\\\\n                ||-----w||\n                ||      ||\n\n               Cowth Vader\nEOC\n",_.WHALE='##\n## docker whale\n##\n$the_cow = <<EOC;\n         $thoughts\n          $thoughts\n                    ##        .\n              ## ## ##       ==\n           ## ## ## ##      ===\n       /""""""""""""""""\\___/ ===\n  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n       \\______ o          __/\n         \\    \\        __/\n          \\____\\______/\n\nEOC\n',_.WWW="##\n## A cow wadvertising the World Wide Web, from lim@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n        $thoughts   ^__^\n         $thoughts  ($eyes)\\\\_______\n            (__)\\\\       )\\\\/\\\\\n             $tongue ||--WWW |\n                ||     ||\nEOC\n",Object.defineProperty(_,"__esModule",{value:!0})}(n)}}]);
//# sourceMappingURL=app-f7875afdb4e880f72510.map