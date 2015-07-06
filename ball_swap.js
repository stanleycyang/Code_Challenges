var find_the_ball = function(start, swap){
    var position = start;
    for(var i = 0; i < swap.length; i++){
        if(swap[i].indexOf(position) !== -1){
            swap[i].indexOf(position) === 0? 
                position = swap[i][1] :
                    position = swap[i][0]; 
        }
    }
    return position;
}

console.log(find_the_ball(0, [[0,1], [1,2], [1,0]]));
console.log(find_the_ball(5, []));
console.log(find_the_ball(0, [[0, 1], [2, 1], [0, 1]]));

