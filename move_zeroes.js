var moveZeros = function(arr){
    /*var zeroes = arr.join('.').match(/\b0{1}\b/g).join('.');*/
    //Object.prototype.toString = function(){
        //return '{}';
    //}

    //return (arr.map(String).join('.').replace(/\.0/g, '') + '.' + zeroes).split('.').map(function(element){
        //var i = parseInt(element, 10);
        //return (i.toString() === 'NaN') ? element.toString() : i;
    /*});*/

    return arr.filter(function(element){return element !== 0;}).concat(arr.filter(function(element){return element === 0}));

}

console.log(moveZeros(['a', 0, 'b', 0, 'h', 0]));
console.log(moveZeros(['a', 0, 'b', 0, 'h', 10, 100]));
console.log(moveZeros([9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]));
console.log(moveZeros( ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]));
//console.log(moveZeros([1, 0, 2, 0, 2, 0]));



