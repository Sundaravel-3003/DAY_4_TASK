// compairing TWO JSON having same properties without order -

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

var obj3 = JSON.stringify(obj1);
var obj4 = JSON.stringify(obj2);

console.log(obj3);
console.log(obj4);

// comparing before stringify - false

console.log(obj1 === obj2); 

// comparing after stringify - false

console.log(obj3 === obj4);