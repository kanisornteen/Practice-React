const userName = "kanisorn"
const age = 21
const address = "th"

// การประกาศ Object
const object = {
    userName: "kanisorn",
    age: 21,
    address: "th"
}

const object2 = {
    userName: userName,
    age: age,
    address: address
}

const object3 = {
    userName,
    age,
    address
}

console.log(object);
console.log(object2);
console.log(object3);