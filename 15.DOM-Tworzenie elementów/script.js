//Zadanie 1
let root = document.querySelector('#root');
let newDiv = document.createElement('div');
newDiv.innerText = 'To jest nowy element';
root.appendChild(newDiv);

//Zadanie 2
let fruitList = document.createElement('ul');

function addFrutisToList(list) {
    let favoriteFruits = ['mango', 'ananas', 'marakuja', 'pomarańcza', 'kiwi', 'banan'];
    for (let i = 0; i < favoriteFruits.length; i++) {
        let item = document.createElement('li');
        item.innerText = favoriteFruits[i];
        list.appendChild(item);
    }
}
addFrutisToList(fruitList);

root.appendChild(fruitList);

//Zadanie 3
function deleteEverySecondElement(listNode) {
    const listItems = Array.from(listNode.children);
    const listLenght = listNode.children.length;

    for (let i = 0; i < listLenght; i += 2) {
        let itemToDelete = listItems[i];
        listNode.removeChild(itemToDelete);
    }
}

deleteEverySecondElement(fruitList);

//Zadanie 4
let button = document.createElement('button');
button.innerText = 'Naciśnij żebym znikł';
button.addEventListener('click', function() {
    root.removeChild(this);
})

root.appendChild(button);

//Zadanie 5
function creatRandomNumberOfDives(randomNumber) {
    for (let i = 0; i < randomNumber; i++) {
        let item = document.createElement('div');
        item.innerText = `To jest div numer ${i}`;
        root.appendChild(item);
    }
}

creatRandomNumberOfDives(Math.floor(Math.random() * 21));

//Zadanie 6
let objectToCreate = {
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
};

function createHtmlFromObject(objectArg, root) {
    for (let key in objectArg) {
        let element = document.createElement(key.slice(0, key.length - 1));
        if (typeof objectArg[key] === 'object') {
            createHtmlFromObject(objectArg[key], element);
        } else {
            element.innerText = objectArg[key];
        }
        element.dataset.name = key;

        root.appendChild(element);
    }
}

createHtmlFromObject(objectToCreate, root);

//Zadanie 7
let list1 = document.createElement('ul');
let list1class = 'list-one';
list1.className = list1class;
addFrutisToList(list1);
let divList1 = document.createElement('div');
divList1.innerText = 'Lista pierwsza';

let list2 = document.createElement('ul');
let list2class = 'list-two';
list2.className = list2class;
let divList2 = document.createElement('div');
divList2.innerText = 'Lista druga';

let listsButton = document.createElement('button');
listsButton.innerText = 'Zmień elementy';

function changeItemsBetwenLists() {
    if (list1.children.length === 1) {
        listsButton.disabled = true;
    }
    let temp = list1.lastChild;
    list1.removeChild(temp);
    list2.appendChild(temp);
}

listsButton.addEventListener('click', changeItemsBetwenLists);

root.appendChild(divList1);
root.appendChild(list1);
root.appendChild(divList2);
root.appendChild(list2);
root.appendChild(listsButton);

//Zadanie 8
function createForm(elementId) {
    let rootElement = document.querySelector(`${elementId}`);
    rootElement.innerHTML = `
    <input id="form-element" type="text"></input><label>Tag</label><br>
    <input id="form-text" type="text"></input><label>Tekst</label><br>
    <input id="form-color" type="text"></input><label>Kolor</label><br>
    <input id="form-count" type="number"></input><label>Ilość</label><br>
    <button id="form-button">Stwórz</button>
    <div id="form-container"></div> <br><br>`;
}

let formDiv = document.createElement('div');
formDiv.id = 'form';
root.appendChild(formDiv);

createForm("#form");
let formButton = document.querySelector('#form-button');
formButton.addEventListener('click', () => {
    let tag = document.querySelector('#form-element').value;
    let tagText = document.querySelector('#form-text').value;
    let tagColor = document.querySelector('#form-color').value;
    let tagCount = document.querySelector('#form-count').value;
    let container = document.querySelector('#form-container');


    for (let i = 0; i < tagCount; i++) {
        let item = document.createElement(`${tag}`);
        item.innerText = tagText;
        item.style.backgroundColor = tagColor;

        container.appendChild(item);
        container.appendChild(document.createElement('br'));
    }
});

//Zadanie 9
let counter = 0;

function createPersonForm(elementId, counter) {
    let rootElement = document.querySelector(`${elementId}`);
    rootElement.innerHTML +=
        `<input id="name${counter}" type="text"></input><label>Imię</label><br>
    <input id="last-name${counter}" type="text"></input><label>Nazwisko</label><br>
    <input id="age${counter}" type="text"></input><label>Wiek</label><br>
    <input id="childrens-count${counter}" type="number"></input><label>Ilość dzieci</label><br><br>`;

    addListenerWhichChangeFisrtLetterToApper(); //Wykorzystanie funkcji z zadania 10
}

function createPersonTable() {
    let container = document.querySelector('#person-container');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let theadRow = document.createElement('tr');

    let nameHeader = document.createElement('th');
    nameHeader.innerText = "Imię";
    theadRow.appendChild(nameHeader);

    let lastNameHeader = document.createElement('th');
    lastNameHeader.innerText = "Nazwisko";
    theadRow.appendChild(lastNameHeader);

    let ageHeader = document.createElement('th');
    ageHeader.innerText = "Wiek";
    theadRow.appendChild(ageHeader);

    let childrensHeader = document.createElement('th');
    childrensHeader.innerText = "Ilość Dzieci";
    theadRow.appendChild(childrensHeader);

    thead.appendChild(theadRow)
    table.appendChild(thead);

    for (let i = 0; i < counter; i++) {
        let name = document.querySelector(`#name${i}`).value;
        let lastName = document.querySelector(`#last-name${i}`).value;
        let age = document.querySelector(`#age${i}`).value;
        let childrens = document.querySelector(`#childrens-count${i}`).value;

        tbody.innerHTML +=
            `<tr>
            <td>${name}</td>
            <td>${lastName}</td>
            <td>${age}</td>
            <td>${childrens}</td>
        </tr>`;
    }

    table.appendChild(tbody);

    console.log(table);
    container.appendChild(table);
}

let personFormDiv = document.createElement('div');
personFormDiv.id = 'person-form';

let buttonsDiv = document.createElement('div');
buttonsDiv.id = 'form-buttons';
buttonsDiv.innerHTML =
    `<button id="person-add">Więcej</button>
<button id="person-create">Stwórz</button>
<div id="person-container"></div>`;

root.appendChild(personFormDiv);
root.appendChild(buttonsDiv);

let buttonPersonAdd = document.querySelector('#person-add');
buttonPersonAdd.addEventListener('click', () => {
    createPersonForm("#person-form", counter++);
})

let buttonCreatPersonList = document.querySelector('#person-create');
buttonCreatPersonList.addEventListener('click', createPersonTable);

createPersonForm("#person-form", counter++);

//Zadanie 10
function addListenerWhichChangeFisrtLetterToApper() {
    let personInputs = document.querySelectorAll('#person-form input');

    personInputs.forEach(input => {
        input.addEventListener('input', firstLetterToUpper);
    })

    function firstLetterToUpper(e) {
        e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    }
}

//Zadanie 11
function getNumbersiInString(stringArg) {
    let numbers = stringArg.replace(/[^0-9]/g, '');
    let numbersCounter = numbers.length;

    let numbersSum = 0;
    let numbersProduct = 1;
    for (let i = 0; i < numbersCounter; i++) {
        numbersSum += parseInt(numbers[i]);
        numbersProduct *= numbers[i];
    }

    console.log(numbersSum);

    for (let i = 0; i < numbersProduct; i++) {
        let div = document.createElement('div');
        div.innerText = stringArg;
        root.appendChild(div);
    }
}

getNumbersiInString('as1d2fdgsa3e');

//Zadanie 12
function anyString(stringArg) {
    let object = {
        arg: stringArg,
        checkAla: function() {
            if (!this.arg.includes('Ala')) {
                let div = document.createElement('div');
                div.innerText = 'Słowo Ala nie występuje w tekście.';
                root.appendChild(div);
            } else {
                this.arg.replace('Ala', 'Ola');
            }
        }
    }

    return object;
}

let withAla = anyString('Ala ma kota');
withAla.checkAla();

let withoutAla = anyString('Tu nie ma słowa na A');
withoutAla.checkAla();
console.log(withAla.arg);

//Zadanie 13
function getNumberOfLetters(stringArray) {
    let resultArray = [];

    stringArray.forEach((element, index) => {
        resultArray[index] = element.replaceAll(' ', '').length;
    });

    return resultArray;
}

function getSumFromNumbersIn(stringArray) {
    let sum = 0;
    stringArray.forEach(element => {
        let numbers = element.replace(/[^0-9]/g, '');
        if (numbers !== undefined) {
            for (let i = 0; i < numbers.length; i++) {
                sum += parseInt(numbers[i]);
            }
        }
    })
    return sum;
}

function getAvrageFromNumberIn(stringArray) {
    let sum = 0;
    let counter = 0;
    stringArray.forEach(element => {
        let numbers = element.replace(/[^0-9]/g, '');
        if (numbers !== undefined) {
            for (let i = 0; i < numbers.length; i++) {
                sum += parseInt(numbers[i]);
                counter++;
            }
        }
    })

    return sum / counter;
}

let array = ['Ala ma kota', 'Ala ma 10 kotów', 'Ola ma 142356 psów'];

console.log(getNumberOfLetters(array));
console.log(getSumFromNumbersIn(array));
console.log(getAvrageFromNumberIn(array));

//Zadanie 14
let personObject = {
    name: '',
    surname: '',
    age: ''
}

function addValuesToPerson(name, surname, age) {
    personObject.name = name;
    personObject.nameLenght = name.length;
    personObject.surname = surname;
    personObject.surnameLength = surname.length;
    personObject.age = age;
    personObject.ageLength = age.length;

    console.log(personObject);

    if (personObject.nameLenght > 5 ||
        personObject.surnameLength > 5 ||
        personObject.ageLength > 5) {
        let clearButton = document.createElement('button');
        clearButton.innerText = 'Wyczyść obiekt';
        clearButton.addEventListener('click', () => {
            personObject = {
                name: '',
                surname: '',
                age: ''
            }
            console.log(personObject);
        });

        root.appendChild(clearButton);
    }
}

// addValuesToPerson('Wojtek', 'Wojtkielewicz', '27');
addValuesToPerson('Wojt', 'Wojtk', '27');