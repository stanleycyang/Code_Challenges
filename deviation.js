function find_deviation(v, d){
    var results = '';
    for(var i = 0; i < v.length; i++){
        var sliced = v.slice(i, i+d);
        if(sliced.length === d){
            var diff = Math.max.apply(Math, sliced) - Math.min.apply(Math, sliced);
            if(diff > results) results = diff
        }
    }
    console.log(results);
}

find_deviation([6, 9, 4, 7, 4, 1], 3);
