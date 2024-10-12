function function1(value) {
console.log("code");
console.log(value)
 }
 function Calculator(num1, num2, myCallback) { 
 let sum = num1 * num2;
 myCallback(sum);
 }
 Calculator(5, 5,function1);
 
 function Cal(num1, num2, myCallback) { 
    let sum = num1 / num2;
    myCallback(sum);
    }
    Cal(5, 5,function1);                   