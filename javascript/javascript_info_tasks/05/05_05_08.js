// Map to objects

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({ fullName: user.name + ' ' + user.surname, id: user.id }));
// let userMapped = users.map(user => ({ fullName: `${user.name} ${user.surname}`, id: user.id }));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);