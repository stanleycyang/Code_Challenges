function unique_array(a){
  var seen = {};
  return a.filter(function(item){
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}


console.log(unique_array([1,1,1,1,1,1,1,2,3,4,3,3]));
