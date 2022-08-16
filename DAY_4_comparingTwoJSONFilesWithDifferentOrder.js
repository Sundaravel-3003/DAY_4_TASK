var obj1 = {
    name : "person 1",
    age : 5
}

var obj2 = {
    age : 5,
    name : "person 1"
}


console.log(obj1);
console.log(obj2);

// output -
// {
//     "name": "person 1",
//     "age": 5
// }
// {
//     "age": 5,
//     "name": "person 1"
// }
// here the output is in object format

console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));

// output -
// {"name":"person 1","age":5}
// {"age":5,"name":"person 1"}
// here the output is in string format bcoz it is changed into json file
//  both the json files have different orders so it will be executed in the same order as in object
//  JSON has the following syntax. 
//  Objects are enclosed in braces ( {} ),
//  their name-value pairs are separated
//  by a comma ( , ), and the name and 
//  value in a pair are separated by a 
//  colon ( : ). Names in an object are
//  strings, whereas values may be of
//  any of the seven value types, 
//  including another object or an array.