function LetterChange(str){
  return str.replace(/[a-zA-Z]/g, function(char){
    var c = String.fromCharCode(char.charCodeAt(0)+1);
    return (/[aeiou]/g.test(c))? c.toUpperCase() : c;
  });
}
