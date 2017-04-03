
"use strict";

/*OBJECTS*/

//object constructor
function Cat (){
    this.name = "cat"; // this is reffering to the new context defined by the new keyword 
    this.color  = "White"
}

var cat = new Cat(); // if we dont hacve new then this is reffering to the globle scope
console.log("Creates the object cause of new keyword: " + cat);
// "New" creates a new empty object and set the context to that.

//without new keyword
// var cat = Cat();
console.log("this is undifined : " + cat)


//ES6 OBJECTS

class CatES6 {
    constructor(name, color) {
        this.name = name; 
        this.color = color;
    }
    speak() {
        console.log("Meeooooww");
    }
}

var cat = new CatES6('a', 'bliu');
console.log(cat);
cat.speak();


// Object Properties!
console.log("Properties are =");
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
Object.defineProperty(cat, 'name', { writable: false });
// Object.freeze(cat.name);
// cat.name = "Shrey"; //THIS THROWS AN ERROR!


Object.defineProperty(cat, 'name', { enumerable: false });
console.log(Object.keys(cat)); //don't see name here 


//Protoypal inheritance
// A function prototype is the object instance that will become teh prototype for all objects created using thsi function as a constructor Object.prototype
// An object prototype is the object instance from which the is object instantiated  __proto__ 

function Dog(name, color) {
    this.name = name;
    this.color = color;
}
// An Object Dog is created that is empty in memory.
Dog.prototype.age = 3;
// the object that was created above now have a Property age in memory 
// Dog {
//    age: 3
// }
var fluffy = new Dog('Fluffy', 'White');
// A Fluffy object is created and the __proto__ of that object points to the object dog shown above.
// fluffy = {
// name: 'Fluffy',
    // color: 'White'
    // __proto__ : Dog{
        // age : 3
    // }    
// }
console.log(fluffy.age);
// This  logs 3 cause JS looks up for a Property age in fluffy if it's not found it looks it up in the prototype parent.
fluffy.age = 4;
console.log(fluffy.age);
// this will create an age Property in fluffy
console.log(fluffy.__proto__.age);
//  object looks like this 
// fluffy = {
// name: 'Fluffy',
    // color: 'White'
    // age : 4
    // __proto__ : Dog{
        // age : 3
    // }    
// }
Dog.prototype = { 'age': 10 }; // this makes a new object Dog with this prototype
console.log(fluffy.__proto__.age); // old objects intantiated won't be chamged
var paddy = new Dog('Paddy', 'brown');
console.log(paddy.age);
console.log(paddy.__proto__.age);
// this would point to the new object created with prototype that has the property of age 10


// Creating own Protoypal inheritance chains
function Animal() { }
Animal.prototype.speak = () => {
    console.log('Grunt');
}
// Now create a dog with animal type
Dog.prototype = Object.create(Animal.prototype); // now when we create a Dog it would inherit animals prototype
console.log(Dog.__proto__); //  Animale prototype
console.log(Dog.__proto__.__proto__); // object prototype, lowest level
var paddy = new Dog('Paddy', 'brown');
paddy.speak();

var voice = "Bark";

exports.voice = voice;

// Animal prototype can also do initialization // think initializing super class
function Animal(voice) {
    this.voice = voice;
    // speak : (voice) => {  // this is just the added to a s a function not called tho on init.
    //     console.log(voice);
    // }
}
Animal.prototype.speak = function() {
    console.log(this.voice);
}
function Dog(name, color) {
    Animal.call(this, 'Bark');
    this.name = name;
    this.color = color;
}
Dog.prototype = Object.create(Animal.prototype);
var paddy = new Dog('Paddy', 'brown');
let s = paddy.speak;
//s = s.bind(paddy);
s();  

// What I was doing there was creating classes typ inhertance 
// more syntactic sugar

class AnimalClass {
    constructor(voice) {
        this.voice = voice;
    }
    speak() {
        console.log(this.voice);
    }
}

class DogClass extends AnimalClass{
    constructor(name, color) {
        super('Bark');
        this.name = name;
        this.color = color;
    }
}

let dog = new DogClass('dog', 'black');
dog.speak();
console.log(dog)




