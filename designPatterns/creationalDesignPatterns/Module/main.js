
let collection = require('./module');


'use strict';
class Task {
    constructor(data) {
        this.name = data.name;
        this.completed = false;
    }
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    }
    save() {
        // console.log('Savig task: ' + this.name);
        collection.save(this);
    }
}

let task_from_db = collection.get(1);

let task = new Task(task_from_db);
task.complete();
task.save();