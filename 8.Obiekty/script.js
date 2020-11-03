//Zadanie 1
let car = {
    name: "Fiat",
    model: "Stilo",
    age: 17
}

console.log(`Marka samochodu: ${car.name},
Model samochodu: ${car.model},
Wiek samochodu: ${car.age}`);
console.log();

//Zadanie 2
car.changeName = function(newName) {
    this.name = newName;
}

console.log(`Stara nazwa: ${car.name}`);
car.changeName('Abarth');
console.log(`Nowa nazwa: ${car.name}`);
console.log();

//Zadanie 3
let arrayObject = {
    sum: 0,
    sumAllElements: function(array) {
        array.forEach(element => {
            this.sum += element
        });
    }
}

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayObject.sumAllElements(a);
console.log(`Suma elementów tablicy [${a}] to: ${arrayObject.sum}`);
console.log();

//Zadanie 4
for (let key in car) { //Wykorzystanie obiektu z pierwszego zadania
    console.log(key + ': ' + car[key]);
}

console.log();

//Zadanie 5
car.dreamCar = {
    name: 'Tesla',
    model: 'Model Y',
    description: 'Zajebisty!'
}

for (let key in car.dreamCar) {
    console.log(key + ': ' + car.dreamCar[key]);
}

console.log();

//Zadanie 6
car.newProperty = 'Coś tam';
car.newMethod = () => {
    console.log('Hello!');
}

car.newMethod();