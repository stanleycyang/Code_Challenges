function MyObject(){
    this.test = true;
}

var myObj = {};
// Set the inheritance
myObj.__proto__ = MyObject.prototype;
myObj.constructor = MyObject;

// Initializes myObj
MyObject.call(myObj); // Can also use myObj.constructor() to call it

console.log(myObj);
