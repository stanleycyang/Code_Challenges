function findMissingNumber(sequence){
    var length = sequence.split(" ").length;
    if(sequence === "" || length === 0) return 0;
    sequence = " " + sequence + " ";
    for(var i = 1; i <= length; i++){
        var regexp = new RegExp('\\s' + i + '\\s', 'g');
        if(regexp.test(sequence)!== true) return i; 
    }
    return 0;
}

console.log(findMissingNumber("1 2 3 5"));
console.log(findMissingNumber("1 2 3 4"));
console.log(findMissingNumber("5 1 3 4"));
