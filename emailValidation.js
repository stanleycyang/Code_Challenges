function validate(input){
    return /^[a-zA-Z]+\w*@[^\s#]+\.\w+$/.test(input);
}

console.log(validate('abc@example.com'));
console.log(validate('_bc@example.com'));
console.log(validate('abc123@example-123.co.uk'));
console.log(validate('abc_123@a-1_23.co.uk'));
console.log(validate('abc@abc'));
console.log(validate('abc@.com'));
console.log(validate('abc.com'));
console.log(validate('@example.com'));
console.log(validate('abc#@example.com'));
console.log(validate('abc@example#.com'));
console.log(validate('abc@example.com#'));
