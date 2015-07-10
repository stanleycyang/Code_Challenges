 // Expected: Ellohay everyoneway. Elcomeway otay ethay odecay atakay., 

 // Ellohay everyoneay. Elcomeway otay ethay odecay atakay.



function translate(sentence){
  var vowel = /(a|e|i|o|u)/i;  

  return sentence.split(' ').map(function(element, index){
  	// The first letter is a vowel
	// if(element.search(vowel) === 0) return element + 'way';

    var firstChar = element.charAt(0);
    var symbolRexexp = /[^\w\s]/g;
    var symbol = '';
    if(symbolRexexp.test(element)){
    	symbol = element.match(symbolRexexp).join('');    	
    }
    
    var cleansedString = element.replace(symbol, '');

    var word = '';
    if(cleansedString.search(vowel) === 0){
    	word = cleansedString + 'way' + symbol;
    }else{
    	word = cleansedString.substr(cleansedString.search(vowel)).replace(symbolRexexp, '') + cleansedString.substr(0, cleansedString.search(vowel)).toLowerCase() + 'ay' + symbol;
    }
    
    return (/[A-Z]/.test(firstChar))? word.charAt(0).toUpperCase() + word.slice(1) : word;
  }).join(' ');


}

console.log(translate('hello'));
console.log(translate('creating'));
console.log(translate('Hello World'));
console.log(translate('algorithm'));
console.log(translate('Pizza? Yes please!'));
console.log(translate('Hello everyone. Welcome to the code kata.,'));
