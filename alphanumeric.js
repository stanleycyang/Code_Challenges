function alphanumeric(string){
  if(string === '' || string.length === 0) return false;
  return !/[^a-zA-Z0-9]/.test(string);
}

console.log(alphanumeric('')); // false
console.log(alphanumeric('dasd asdas')); // false
console.log(alphanumeric('ASD032a')); // true
console.log(alphanumeric('qwe wEWE 032'));
