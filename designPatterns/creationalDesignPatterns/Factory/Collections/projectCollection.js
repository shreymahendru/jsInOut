
// Used to expose a set of functions 
let collection = function () {
    //can have a a db variable/ init / connection 
    // and all db works happenes from here

    let save = function (task) {
        console.log('Saving ' + task.name + 'to the db');
    };

    let get = function (id) {
        console.log('Getting Project Id: ' + id);
        return {
            name: 'new Project from db'
        };
    };

    return {
        get: get,
        save: save
    }
}
//CommonJs
module.exports = collection;