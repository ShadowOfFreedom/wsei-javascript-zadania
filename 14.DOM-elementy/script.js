//Zadanie 1
function getTagsFromElements(elements) {
    let tags = [];
    elements.forEach(element => {
        tags.push(element.tagName);
    });
    return tags;
}

let divs = document.querySelectorAll('.more-divs');
console.log(getTagsFromElements(divs));

//Zadanie 2
function printSomeValuesFromElement(element) {
    console.log('1. Wewnętrzny kod HTML: ' + element.innerHTML);
    console.log('2. Zewnętrzny kod HTML: ' + element.outerHTML);
    console.log('3. Lista klass jako string: ' + element.className);
    console.log('4. Lista klass jako tablica: ');
    console.log(element.classList);
    console.log('5. Obiekt dataset: ' + element.dataset);
}

printSomeValuesFromElement(document.querySelector('.short-list'));

//Zadanie 3
function printNumbersSumFromDataset(element) {
    let dataset = element.dataset;
    console.log(dataset);
    console.log(Number(dataset.numberone) + Number(dataset.numbertwo) + Number(dataset.numberThree));
}

printNumbersSumFromDataset(document.querySelector('#datasetCheck'));

//Zadanie 4
document.getElementById('spanText').innerText = 'Dowolny tekst';

//Zadanie 5
document.getElementById('spanText').classList = 'dowolna-classa';

//Zadanie 6
function printClasses(element) {
    let classList = element.classList;
    let classString = '';
    classList.forEach(e => {
        console.log(e);
        classString += e + ' + ';
    });
    console.log(classString.substring(0, classString.length - 2));

    element.removeAttribute("class");
    console.log('Usunięto wszystkie klasy');
}

printClasses(document.querySelector('#classes'));

//Zadanie 7
function addDatasetToLiIn(liElements) {
    liElements.forEach(e => {
        if (e.dataset.text == undefined) {
            e.dataset.text = 'text';
        }
    });
}

addDatasetToLiIn(document.querySelectorAll('#longList li'));

//Zadanie 8
function stringToObject(string) {
    return { newClass: typeof string === 'string' ? string : '' };
}

function addClassToElementFromObject(element, object) {
    let className = object.newClass;
    element.className = className;
}

let myDiv = document.querySelector('#myDiv');
addClassToElementFromObject(myDiv, stringToObject('jakas-tam-classa'));

//Zadanie 9
function addRandomClass(element) {
    element.className = (Math.floor(Math.random() * 11)) % 2 === 0 ? 'even' : 'odd';
}

addRandomClass(document.querySelector('#numbers'));

//Zadanie 10
function getArrayFromList(listElement) {
    let result = [];
    for (let i = 0; i < listElement.children.length; i++) {
        result.push(listElement.children[i].innerText);
    }
    return result;
}

console.log(getArrayFromList(document.querySelector('#longList')));

//Zadanie 11
function setRandomValueInListItems(listItems) {
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.oldValue = listItems[i].innerText;
        listItems[i].innerText = Math.floor(Math.random() * 11);
    }
}

setRandomValueInListItems(document.querySelector('#longList').children);