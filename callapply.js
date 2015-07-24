var person1 = {
    name: 'Marvin',
    age: 42,
    size: '2xm'
};

var person2 = {
    name: 'Zaphod',
    age: 42000,
    size: '1xS'
};

function sayHello(){
    console.log('Hello, ' + this.name);
};

function sayGoodbye(){
    console.log('Goodbye, ' + this.name);
};

/*sayHello.call(person1);*/
/*sayGoodbye.call(person2);*/

var say = function(something){
    console.log(something + '. ' + this.name);
};

/*say.call(person1, 'Hello');*/
/*say.call(person2, 'Goodbye');*/

var update = function(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
};

update.call(person1, 'Stanley', 200, '1xM');
//console.log(person1);

var dispatch = function(person, method, args){
    method.apply(person, args);
};

dispatch(person1, say, ['Hello']);
dispatch(person2, update, ['Jackie', 500, '5xM']);
console.log(person2);

// Apply takes in the args in the 2nd as an array, as opposed to regular params
