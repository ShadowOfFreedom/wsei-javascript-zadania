//Zadanie 1
const allLists = document.querySelectorAll('.list');
console.log(allLists);

//Zadanie 2
function getTagsIn(elementName) {
    let elements = document.querySelectorAll(elementName + ' *');
    let tags = []
    elements.forEach(element => {
        tags.push(element.tagName);
    });
    return tags;
}

console.log(getTagsIn('body'));
console.log(getTagsIn('.span-list'));

//Zadanie 3
let listIdElement = document.querySelector('#list');
console.log(listIdElement);

//Zadanie 4
function printElement(elementName) {
    console.log(elementName + ':');
    console.log(document.querySelectorAll(elementName));
}

printElement('li');
printElement('ul');
printElement('span');
printElement('div.list span');
printElement('div#spans span');