var maxSequence = function(arr){
    function lessThanZero(element, index){
        return element < 0;    
    }
    if(typeof arr === 'undefined' || arr.length === 0 || arr.every(lessThanZero)) return 0;
    if(!arr.every(lessThanZero)){
        return arr.reduce(function(previous, current){
            return previous + current;
        });
    }
}

var arr1 = [1, 1, 2, 4, 5, 1, 6, 10];
var arr2 = [-5, 6, 15, -4, -2, 22, 25];
var arr3 = [200, 42, -200, -50, 32, 11];
var arr4 = [];
var arr5 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSequence(arr1));
console.log(maxSequence(arr2));
console.log(maxSequence(arr3));
console.log(maxSequence(arr4));
console.log(maxSequence(arr5));
console.log(maxSequence());
