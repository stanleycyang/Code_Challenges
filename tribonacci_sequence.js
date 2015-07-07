function tribonacci(signature, n){
    // Store the entire sequence here
    var tribonacci_sequence = [];
    // Add the current sequence into the array
    if(n <= 3){
        for(var i = 0; i < n; i++){
            tribonacci_sequence.push(signature[i]);
        }
    }else{
        tribonacci_sequence = tribonacci_sequence.concat(signature);
    }


    for(var i = signature.length; i < n; i++){
        var next_number = signature.reduce(function(previous, current){
            return previous + current;
        });

        // Take out the first item from signature
        signature.shift();
        // Push the answer into the signature 
        signature.push(next_number);

        // Add to the current tribonacci_sequence
        tribonacci_sequence.push(next_number);
    }

    return tribonacci_sequence;
}

console.log(tribonacci([1,1,1], 10));
console.log(tribonacci([0,0,1], 10));
console.log(tribonacci([0,1,1], 10));
console.log(tribonacci([0,1,1], 2));
console.log(tribonacci([0,1,1], 1));
