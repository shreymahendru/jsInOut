let repo = require('./repo');
// let myrepo = repo(); // different from myrepo in main when module.exports = fun;


let taskHandler = function () {
    return {
        save: function () {
            repo.save('FromTaskHandler');
        }
    }
}

module.exports = taskHandler();