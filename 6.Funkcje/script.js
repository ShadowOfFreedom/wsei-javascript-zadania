//Zadanie 1
function weDidIt() {
    console.log('Udało się!');
}

weDidIt();

//Zadanie 2
function anyArg(arg) {
    console.log(arg);
}

const stringArg = 'Dowonly argument';
anyArg(stringArg);

//Zadanie 3
function returnArray(array) {
    return array;
}

let myArray = ['one', 'two', 3, { value: 'trzy' }];
console.log(returnArray(myArray));

//Zadanie 4
function printDelayString(sArg) {
    let counter = 5;
    let myTimeout = setInterval(() => {
        counter--;
        console.log(sArg);
        if (counter === 0) {
            console.log("Koniec!");
            clearTimeout(myTimeout);
        }
    }, 3000);
}

let someString = 'Luke, I am your father!';
printDelayString(someString);