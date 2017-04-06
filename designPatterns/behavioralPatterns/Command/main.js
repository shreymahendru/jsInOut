// Fully decouple implimentation from execution 
// calling functions not by objects themselves

let repo = {
    task: {},
    commands: [], 
    get: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    }, 
    save: function (task) {
        repo.task[task.id] = task;
        console.log('Saving ' + task.name + ' to db');
    }
}


repo.execute = function (name) {
    let args = Array.prototype.slice.call(arguments, 1);
    repo.commands.push({
        name: name, 
        obj : args[0]
    })
    switch (name){
        case 'get':
            return repo['get'].apply(repo, args);
        case 'save':
            return repo['save'].apply(repo, args);     
    }
}

repo.execute('save', {
    id : 1,
    name : 'hello'
})
repo.execute('save', {
    id: 2,
    name: 'hello2'
})
repo.execute('save', {
    id: 3,
    name: 'hello3'
})
repo.execute('save', {
    id: 4,
    name: 'hello4'
})

console.log(repo.commands);
console.log(repo.task);
