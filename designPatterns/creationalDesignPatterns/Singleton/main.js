// Used to ristrict an object to one instance of that object accross the platform.
let taskHandler = require('./taskHandler');
let repo = require('./repo');
// let myrepo = repo(); // this creats a new object every time where where this is called hence not singleton 
// commonJs caches it 

repo.save('fromMain');
repo.save('fromMain');
repo.save('fromMain');
repo.save('fromMain');
repo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();



