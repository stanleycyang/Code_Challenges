// Deep comparison of objects

var a = {name: 'Joe', age: 24};
var b = {name: 'Joe'};

/*function deepCompare(o1, o2){*/
    //var result = [];
    //for(var propO1 in o1){
        //if(typeof o1[propO1] === 'object' || typeof o1[propO1] === 'array'){
            //(deepCompare(o1[propO1], o2[prop02]))? result.push(true) : result.push(false);
        //}
        //(o2.hasOwnProperty(propO1) && (o1[propO1] === o2[propO1]))? result.push(true) : result.push(false);
    //}
    //return result.indexOf(false) === -1;
/*}*/

function deepCompare(o1, o2){
    if(o1 === o2) return true;
    if(typeof o1 !== 'object' || typeof o2 !== 'object') return false;
    if(Object.keys(o1).length !== Object.keys(o2).length) return false;
    var keys = Object.keys(o1);
    return keys.every(function(key){
        return deepCompare(o1[key], o2[key]);
    });
}


console.log(deepCompare(a, b));
console.log(deepCompare({age: 24}, {age: 24}));
