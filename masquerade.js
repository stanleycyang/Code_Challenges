/*function friendFind(line){*/
    //var results = [];
    //function getAllIndex(arr, val){
        //var indexes = [], i = -1;
        //while((i = arr.indexOf(val, i+1)) != -1){
            //indexes.push(i);
        //}
        //return indexes;
    //}

    //var redPosition = getAllIndex(line, 'red');
    //redPosition.forEach(function(element, index){

        //if(line[element-1] === 'blue' && line[element-2] === 'blue' || line[element+2] === 'blue' && line[element+1] === 'blue' || line[element-1] === 'blue' && line[element+1] === 'blue'){
            //results.push(element);
        //}
    //});

    //return results.length;
    
/*}*/

function friendFind(line){
    return line.filter(function(element, index){
        return element === 'red' && (
            line[index-2] === 'blue' && line[index-1] === 'blue' ||
                line[index-1] === 'blue' && line[index+1] === 'blue' ||
                line[index+1] === 'blue' && line[index+2] === 'blue'
        )
    }).length;
}

var line = ['blue','blue','red','red','blue','green'];
var line1 = ['blue', 'red', 'blue', 'red','blue','green'];
console.log(friendFind(line));
console.log(friendFind(line1));
