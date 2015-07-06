function solution(number){
    var multiples = [];
    for(var i = 1; i < number; i++){
        if(i%3===0 || i%5===0){
            multiples.push(i);
        }
    }

    return multiples.reduce(function(previous, current, index, array){
        return previous + current;
    });


}

console.log(solution(10));
