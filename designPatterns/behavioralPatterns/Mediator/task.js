'use strict';
class Task {
    constructor(data) {
        this.name = data.name;
        this.priority = data.priority
        this.completed = data.completed;
        this.user = data.user;
        this.project = data.project;
    }
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    }
    save() {
        console.log('Savig task: ' + this.name);
    }
}

module.exports = Task;