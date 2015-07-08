// 6 characters long
// contains lower case
// contains uppercase
// contains a number
function validate(password){
    if(/[^a-zA-Z\d:]/.test(password)) return false;
    return /^(?=.*[a-z])+(?=.*[A-Z])+(?=.*\d)+.{6,}$/.test(password);
}

/*console.log(validate('djI38D55')); // true*/
//console.log(validate('JHD5FJ53')); // false
//console.log(validate('!fdjn345')); // false
//console.log(validate('jfkdfj3j')); // false
//console.log(validate('abc')); // false
//console.log(validate('123')); // false
//console.log(validate('Password123')); //true
//console.log(validate('Pa123'));
//console.log(validate('a123'));
/*console.log(validate('aWa123'));*/
console.log(validate('aW 123'));
function validate(password) {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}
