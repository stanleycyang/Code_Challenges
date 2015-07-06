Number.prototype.add = function(number){

    return this + number;
}

Number.prototype.multiply = function(number){
    return this * number;
}

Number.prototype.divide = function(number){
    return this / number;
}

Number.prototype.subtract = function(number){
    return this - number;
}

Number.prototype.square = function(){
    return this * this;
}

console.log((3).add(1).multiply(2).square());
