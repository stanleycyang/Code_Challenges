
Function.prototype.wrap = function(callback){
    return callback.bind(this, this);
}
