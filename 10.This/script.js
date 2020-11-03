//Zadanie 1
class Person {
    constructor(name, lastName, age, country, city) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    }

    addAge() {
        this.age++;
    }

    printPerson() {
        console.log(`name: ${this.name}, lastName: ${this.lastName}, age: ${this.age}, country: ${this.country}, city: ${this.city}`);
        this.addAge();
    }
}

let person1 = new Person('Phil', 'Collins', 69, 'UK', 'London', 'EN');
let person2 = new Person('Jimmy', 'Page', 76, 'UK', 'Heston', 'EN');

person1.printPerson();
person2.printPerson();

person2.addAge();
person1.addAge();
person1.addAge();
person1.addAge();
person1.addAge();

person1.printPerson();
person2.printPerson();
console.log();

//Zadanie2
person1.favDishes = [];
person1.addFavDishe = function(dish) {
    this.favDishes.push(dish);
}
person1.printFavDishes = function() {
    console.log(`Ulubione posiłki ${this.name}:`);
    this.favDishes.forEach(element => {
        console.log(element);
    });
    console.log();
}

person2.favDishes = [];
person2.addFavDishe = function(dish) {
    this.favDishes.push(dish);
}
person2.printFavDishes = function() {
    console.log(`Ulubione posiłki ${this.name}:`);
    this.favDishes.forEach(element => {
        console.log(element);
    });
    console.log();
}

person1.addFavDishe('Burrito');
person1.addFavDishe('Duble becon chees burger');
person1.addFavDishe('T-bone steak with garlic butter');
person2.addFavDishe('Fish and chips');
person2.addFavDishe('Guinness');
person2.addFavDishe('Buffalo wings');

person1.printFavDishes();
person2.printFavDishes();

//Zadanie 3
class Calculator {
    constructor() {}

    setNumber1(number) {
        this.a = number;
    }

    setNumber2(number) {
        this.b = number;
    }

    addNumbers() {
        return this.a + this.b;
    }

    subtractNumbers() {
        return this.a - this.b;
    }

    multiplyNumbers() {
        return this.a * this.b;
    }

    divideNumbers() {
        if (this.b === 0) {
            return 'Dzielenie przez zero, operacja nie dozwolona!';
        } else {
            return this.a / this.b;
        }
    }
}

let cal = new Calculator();
cal.setNumber1(16);
cal.setNumber2(23);

console.log(cal.addNumbers());
console.log(cal.subtractNumbers());
console.log(cal.multiplyNumbers());
console.log(cal.divideNumbers());

cal.setNumber2(0);
console.log(cal.divideNumbers());

console.log();

//Zadanie 4
function Ladder() {
    this.numberOfSteps = 0;
    this.actualStep = 0;

    this.setLadder = function(numberOfSteps) {
        if (this.actualStep !== 0) {
            console.log('Jesteś na drabinie!!!, Najpierw musisz zejść!')
        } else {
            this.numberOfSteps = numberOfSteps;
        }
    }

    this.goUp = function() {
        if (this.actualStep < this.numberOfSteps) {
            this.actualStep++;
        } else {
            console.log('Koniec drabiny!');
        }
    }

    this.goDown = function() {
        if (this.actualStep > 0) {
            this.actualStep--;
        } else {
            console.log('Koniec drabiny, jesteś na dole.');
        }
    }
}

let l = new Ladder();
l.setLadder(10);

for (let i = 0; i < l.numberOfSteps; i++) {
    l.goUp();
    console.log(`Aktualny stopień: ${l.actualStep}`);
}
l.setLadder(100);
l.goUp();

for (let i = l.numberOfSteps; i > 0; i--) {
    l.goDown();
    console.log(`Aktualny stopień: ${l.actualStep}`);
}
l.goDown();