/*var person = {*/
    //name: 'Stanley',
    //age: 25
//};


//function sayHi(a, b){
   //console.log('Hi, my name is ' + this.name);
   //console.log(a);
   //console.log(b);
//}

//var newFunc = sayHi.bind(person, ['boo', 'run'], 'b');
//newFunc();

/*function LateBloomer(){*/
    //this.petalCount = Math.ceil(Math.random() * 12) + 1;
//}

//LateBloomer.prototype.bloom = function(){
    //global.setTimeout(this.declare.bind(this), 1000);
//}

//LateBloomer.prototype.declare = function(){
    //console.log('I am a beautiful flower with ' + this.petalCount + ' petal!');
//};

//var flower = new LateBloomer();
/*flower.bloom();*/

function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function(){
    return this.x + ',' + this.y;
}

var p = new Point(1, 2);
console.log(p.toString());

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0);
var YAxisPoint = Point.bind(null, 0);
