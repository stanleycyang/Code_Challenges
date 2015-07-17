function total(arr){
  var result = [];
  if(arr.length === 2){
    var final = arr[0] + arr[1];
    return final;
  }
  for(var i = 0; i < arr.length; i++){
    var sum = arr[i] + arr[i+1];
    if(!isNaN(sum)){
      result.push(sum);
    }
  }
  return total(result);
}


console.log(total([1,2,3,4,5]));
console.log(total([1,2,3]));
