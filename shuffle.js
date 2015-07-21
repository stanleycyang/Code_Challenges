function permutations(string) {
  var currentIndex = string.length, 
      results = [string],
      temp, 
      randomIndex ;


  // Split the string
  string = string.split('');
  while(currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temp = string[currentIndex];
    string[currentIndex] = string[randomIndex];
    string[randomIndex] = temp;
  }

  string = string.join('');

  if(results.indexOf(string)===-1){
    results.push(string);
  }

  return results;
}

console.log(permutations('abcd'));
console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('abc'));
