let repo = function () {
    let called = 0;
    
    let save = function (task) {
        called++;
        console.log('Saving ' + task + ' Called ' + called + ' times');
    }
    
    console.log('newing up the repo');
    return {
        save : save
    }
}

// module.exports = repo; // this is not sigleton
module.exports = repo(); // this creates an singleton 



/**
 * Outoput when  module.exports = repo;
 *
 *    newing up the repo
 *    newing up the repo
 *    Saving fromMain Called 1 times
 *    Saving fromMain Called 2 times
 *    Saving fromMain Called 3 times
 *    Saving fromMain Called 4 times
 *    Saving fromMain Called 5 times
 *    Saving FromTaskHandler Called 1 times
 *    Saving FromTaskHandler Called 2 times
 *    Saving FromTaskHandler Called 3 times
 *  Saving FromTaskHandler Called 4 times
 *   Saving FromTaskHandler Called 5 times
 *
 *
 */

/*
Outoput when module.exports = repo();

newing up the repo
Saving fromMain Called 1 times
Saving fromMain Called 2 times
Saving fromMain Called 3 times
Saving fromMain Called 4 times
Saving fromMain Called 5 times
Saving FromTaskHandler Called 6 times
Saving FromTaskHandler Called 7 times
Saving FromTaskHandler Called 8 times
Saving FromTaskHandler Called 9 times
Saving FromTaskHandler Called 10 times*/