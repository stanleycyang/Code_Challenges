function check_braces(s){
    var r = /\{\}|\[\]|\(\)/;
    for(var i = 0; i < s.length; i++){
        while(r.test(s[i]))
            s[i] = s[i].replace(r, '');
        console.log(!s[i].length? 1 : 0);
    }
}

check_braces([")(){}", "[]({})", "([])", "{()[]}", "([)]" ]);
