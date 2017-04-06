let collection = require('./Collections/taskCollection')();


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

module.exports = Task;