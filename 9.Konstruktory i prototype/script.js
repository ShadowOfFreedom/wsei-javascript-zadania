//Zadanie 1
function Person(name, lastName, age, country, city, language) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
}
Person.prototype.changeCity = function(newCity) {
    this.city = newCity;
}
Person.prototype.changeAge = function(newAge) {
    this.age = newAge;
}

let person1 = new Person('Hubert', 'Dobaczewski', 46, 'Poland', 'Płock', 'PL');
let person2 = new Person('Jan', 'Kowalski', 66, 'Poland', 'Warszawa', 'PL');
let person3 = new Person('John', 'Smith', 99, 'USA', 'Chicago', 'EN');
let person4 = new Person('Phil', 'Collins', 69, 'UK', 'London', 'EN');
let person5 = new Person('Jimmy', 'Page', 76, 'UK', 'Heston', 'EN');

person1.changeCity('Białystok');
person1.changeAge(123);

person2.changeCity('Missisipi');
person2.changeAge(321);

person3.changeCity('New York');
person3.changeAge(666);

console.log(person1);
console.log(person2);
console.log(person3);
console.log();

//Zadanie 2
function CalculatorMemory(operand, number1, number2, result) {
    this.operand = operand;
    this.number1 = number1;
    this.number2 = number2;
    this.result = result;
}
CalculatorMemory.prototype.toString = function() {
    return `${this.number1} ${this.operand} ${this.number2} = ${this.result}`;
}

function Calculator() {
    this.memory = [];
}
Calculator.prototype.add = function(number1, number2) { //Dodawanie
    let result = number1 + number2;
    this.memory.push(new CalculatorMemory('+', number1, number2, result));
    return result;
}
Calculator.prototype.subtract = function(number1, number2) { //Odejmowanie
    let result = number1 - number2;
    this.memory.push(new CalculatorMemory('-', number1, number2, result));
    return result;
}
Calculator.prototype.multiply = function(number1, number2) { //Mnożenie
    let result = number1 * number2;
    this.memory.push(new CalculatorMemory('*', number1, number2, result));
    return result;
}
Calculator.prototype.divide = function(number1, number2) { //Dzielenie
    if (number2 === 0) {
        console.log("Dzielenie przez zero, operacja nie dozwolona!");
    } else {
        let result = number1 / number2;
        this.memory.push(new CalculatorMemory('/', number1, number2, result));
        return result;
    }
}
Calculator.prototype.printMemory = function() {
    console.log('Memory:');
    this.memory.forEach((element, index) => {
        console.log(`${index+1}: ${element}`);
    });
}
Calculator.prototype.clearMemory = function() {
    this.memory = [];
}

let calculator1 = new Calculator();
let calculator2 = new Calculator();

calculator1.add(1, 2);
calculator1.divide(10, 3);

calculator2.multiply(23, 4);
calculator2.divide(15, 2);

calculator1.printMemory();
calculator2.printMemory();
calculator2.clearMemory();
calculator2.printMemory();

console.log();

//Zadanie 3
function Game() {}
Game.prototype.number = 0;
Game.prototype.radomNumber = function() {
    this.__proto__.timeout = setInterval(() => {
        this.__proto__.number = Math.floor(Math.random() * (10 - 2)) + 1;
    }, 1000);
}
Game.prototype.checkNumber = function() {
    this.checkTimeout = setInterval(() => {
        if (this.number >= 5) {
            clearTimeout(this.timeout);
            clearTimeout(this.checkTimeout);
            console.log('Liczba większa od 5');
        }
    }, 500);
}

let game1 = new Game();
let game2 = new Game();

game1.radomNumber();
game2.checkNumber();