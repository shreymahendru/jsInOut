let Task = require('./task');
// let collectionFactory = require('./collectionFactory');

// let task1 = new Task(collectionFactory.getCollection('task').get(1)); 
// let task2 = new Task(collectionFactory.getCollection('task').get(1));

// let user = collectionFactory.getCollection('user').get(1);
// let project = collectionFactory.getCollection('project').get(1);

//^Messy Way to do it
let collectionFactory = require('./collectionFactory');
let task1 = new Task(collectionFactory.task.get(1));
let user = collectionFactory.user.get(2);
let project = collectionFactory.project.get(2);
task1.user = user;
task1.project = project;

task1.save();