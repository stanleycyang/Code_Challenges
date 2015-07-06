multiplicationTable = function(size){
    // Create the table array
    var table = [];

    // Add arrays per size input
    for(var i = 0; i < size; i++){
        table.push([]);

        // Add numbers into arrays
        for(var x = 1; x <= size; x++){
            table[i].push(x * (i + 1));
        }
    }

    return table;
}

console.log(multiplicationTable(4) + "\n");
console.log(multiplicationTable(6) + "\n");
console.log(multiplicationTable(12) + "\n");
console.log(multiplicationTable(2) + "\n");


multiplicationTable = function(size) {

  return Array.apply(null, new Array(size)).map(function(val, i) {
    return Array.apply(null, new Array(size)).map(function(val, j) {
      return (i+1) * (j+1);
    });
  });
}
