import React from 'react';

var test = "this is a string"

console.log('test= $test')

// test = 1   Typescript marca error

console.log('test= $test')

/*     Typescript marca error
test = function (a, b) {
    return a + b
}

*/

console.log('test= $test')


var describe = function (description, specDefinitions) {
    return jasmine.getEnv().describe(description, specDefinitions)
}