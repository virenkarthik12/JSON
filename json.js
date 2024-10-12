var myObj = { name: "Riya", age: 12, grade: 7 };
var myJSON = JSON.stringify(myObj); 
var newObj = JSON.parse(myJSON); 
console.log(newObj.name);
