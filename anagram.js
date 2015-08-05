function check_anagrams(a, b) {
    for(var i = 0; i < a.length; i++){
        var y = a[i].split('').sort().join(''),
            z = b[i].split('').sort().join('');
        console.log(z === y 
                    ? 1 : 0
                   );
    }
}
console.log(check_anagrams('cinema', 'iceman'));  
console.log(check_anagrams('host', 'shot'));
console.log(check_anagrams('bab', 'aba'));
console.log(check_anagrams('train', 'rain'));
