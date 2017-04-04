
// MESSY WAY TO DO IT
// let collectionFactory = function () {
//     this.getCollection = function (type) {
//         if (type === 'task') {
//             return require('./taskCollection')();
//         }
//         if (type === 'user') {
//             return require('./userCollection')();
//         }
//         if (type === 'project') {
//             return require('./projectCollection')();
//         }
//     }
// }

// module.exports = new collectionFactory;


let collectionFactory = function () {
    let collections = this; //capturing the scope of the object being called on 
    let collectionList = [
        { name: 'task', source: './Collections/taskCollection.js' },
        { name: 'user', source: './Collections/userCollection.js' },
        { name: 'project', source: './Collections/projectCollection.js' }]
    collectionList.forEach((collection) => {
        collections[collection.name] = require(collection.source)(); 
    });
}

module.exports = new collectionFactory;