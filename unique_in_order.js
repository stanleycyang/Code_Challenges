function uniqueInOrder(iterable){

    // takes an argument a sequence
    // Returns a list of items without any elements without the same value next and preserve the original order of elements

    /*if(typeof iterable === 'string'){*/
        //iterable = iterable.split("");
    //}

    //return iterable.filter(function(x, i){
        //return iterable.indexOf(x) === i;
    /*});*/

    var arr = [];
    for(var i = 0; i < iterable.length; i++){
        if(iterable[i] !== iterable[i-1]){
           arr.push(iterable[i]); 
        }
    }
    return arr;
}

console.log(uniqueInOrder('AAABBBCCDAABBB'));
/*console.log(uniqueInOrder('ABBCcAD'));*/
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// AAAABBBCCDAABBB == ['A', 'B', 'C', 'D', 'A', 'B']
// ABBCcAD = ['A', 'B', 'C','c', 'A', 'D']
// 1,2, 2,3,3 = [1,2,3]
