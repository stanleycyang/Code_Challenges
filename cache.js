function cache(func){
  var obj = {};
  var slice = Array.prototype.slice;


  return function(){
    var args = slice.call(arguments);

    if(args in obj){
      return obj[args];
    }else{
      return (obj[args] = func.apply(this, args));
    }
  };
}

function complexAlg(a, b){
  return a + b;
}

var cachedFunction = cache(complexAlg);
cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');
cachedFunction({hey: 'hi'},{yes: 'there'} );
cachedFunction({hey: 'there'},{yes: 'there'} );

function cache(func) {
  var result = {};
  return function() {
    var args = JSON.stringify(arguments);
    if (!result.hasOwnProperty(args)) result[args] = func.apply(null, arguments);
    return result[args];
  };
}
