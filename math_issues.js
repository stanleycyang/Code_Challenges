Math.round = function(number){
    return (number % 1 >= .5)? parseInt(number + 1) : parseInt(number);
}

Math.ceil = function(number){
    return (number % 1 !== 0)? parseInt(number + 1) : parseInt(number);
}

Math.floor = function(number){
    return parseInt(number);
}

/*console.log(Math.round(29.5));*/
//console.log(Math.floor(29.9));
/*console.log(Math.ceil(29.4));*/
console.log(Math.ceil(6.1));
console.log(Math.ceil(6.000001));
console.log(Math.ceil(0));
