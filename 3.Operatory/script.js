//Zadanie 1
let a = true;
let b = false;

console.log(a == b);

//Zadanie 2
let x = 123;
let y = 321;
let moduloResult = 0;

moduloResult = x % y;
console.log(moduloResult);

//Zadanie 3
let stringOne = "jeden";
let stringTwo = "dwa";
let stringsResult = "";

stringsResult = stringOne + stringTwo;
console.log(stringsResult);

//Zadanie 4
let someNumber = 425;
let someString = "425";

console.log(someNumber == someString); //true, porownuje wartosci ignorujac typ
console.log(someNumber === someString); //false, porownuje wartosci i typ

//Zadanie 5
let counter = 30;
console.log(counter++);
console.log(counter--);

//Zadanie 6
let num1 = 10;
let num2 = 12;
let result = null;
result = num1 > num2;
console.log(result);