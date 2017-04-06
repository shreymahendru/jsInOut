let Task = require('./task');


//observers 
let notificationService = function () {
    let message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

let loggingService = function () {
    let message = 'Logging ';
    let count = 0; // not always increases 
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name + count);
        count++;
    }
}

let auditingService = function () {
    let message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}



class observerList {
    constructor() {
        this.observerlist = []
    }
    add(obj) {
        return this.observerlist.push(obj);
    }
    get(index) {
        if (index > -1 && index < this.observerlist.length) {
            return this.observerlist[index];
        }
    }
    length() {
        return this.observerlist.length;
    }
    removeAt(index) {
        this.observerlist.splice(index, 1);
    }
    indexOf(obj) {
        for (let i = 0; i < this.observerlist.length; i++){
            if (this.observerlist[i] === obj) {
                return i;
            }
        }
        return -1;
    }
}

class observableTask extends Task {
    constructor(data) {
        // Task.call(this, data);
        super(data);
        this.observers = new observerList();
    }
    addObserver(observer) {
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.removeAt(this.observers.indexOf(observer));
    }
    
    notify(context) {
        let observerCount = this.observers.length();
        for (let i = 0; i < observerCount; i++){
            this.observers.get(i)(context);//excute the services by this context 
        }
    }
    //overwrite the save in task
    save() {
        this.notify(this);
        super.save(this);
    }
}

let task1 = new observableTask({ name: 'create a demo for constructor', user: 'John' });

let ns = new notificationService();
let ls = new loggingService();
let as = new auditingService();

//should exec observers
task1.addObserver(ns.update);
task1.addObserver(ls.update);
task1.addObserver(as.update);


task1.save();

task1.removeObserver(as.update);
task1.save();