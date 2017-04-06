// new Keyword
// creats a new object
// Links to an object prototype
// Binds 'this' to the new object scope
// returns 'this' (implicitly)

let task = function (name) {
    this.name = name;
    this.complete = false;
    
    this.save = function () {
        console.log('Savig task: ' + this.name); // this is re created for every object of this function task 
    }
}

task.prototype.completed = function () {
    this.complete = true
}; // like this 

var task1 = new task('task1');
task1.save();
console.log(task1.complete);

// we can add functions to prototype


//ES6 when transpiling the below code will kinda look like as shown above.
'use strict';
class Task{
    constructor(name) {
        this.name = name;
        this.completed = false;    
    }
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    }
    save() {
        console.log('Savig task: ' + this.name); 
    }
}

let task2 = new Task('task2');
console.log(task2.completed);
task2.complete();
console.log(task2.completed);