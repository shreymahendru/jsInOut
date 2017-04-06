let Task = require('./task');
// Instead exteding the class that uses observers we can make a mediator class that controls the communication between the task and the functions/services that supposed to depend on the task 

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

class mediator{
    constructor() {
     this.channels = {}   
    } 
    subscribe(channel, func) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }
        this.channels[channel].push({
            context: this,
            func : func
        });
    }
    
    publish(channel) {
        if (!this.channels[channel]) {
            return false;
        }
        
        //get all the args by slicing it 
        let args = Array.prototype.slice.call(arguments, 1); // this means call the slice method of the array omn arguments cause arguments object is not an array  
        
        for (let i = 0; i < this.channels[channel].length; i++){
            let sub = this.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
        
        return this;
        
    }
    
}

let task1 = new Task({ name: 'create a demo for constructor', user: 'John' });

let ns = new notificationService();
let ls = new loggingService();
let as = new auditingService();

let med = new mediator();


// med.installTo(task1);

med.subscribe('complete', ns.update);
med.subscribe('complete',ls.update);
med.subscribe('complete',as.update);
// task1.publish('complete');


//MONKEY PATCHING smh........
task1.complete = function () {
    med.publish('complete', this);
    Task.prototype.complete.call(this);
}
task1.complete();
