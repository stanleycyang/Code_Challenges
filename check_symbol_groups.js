/*In English and programming, groups can be made using symbols such as "()" and "{}" that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.*/

    /*Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly*/

function groupCheck(s){
    var r = /\{\}|\[\]|\(\)/;
    while(r.test(s))
        s = s.replace(r, '');
    return !s.length;
}

console.log(groupCheck('{}'));
