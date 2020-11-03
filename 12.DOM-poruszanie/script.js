//Zadanie 1
console.log(document.querySelector('#buz').parentNode);
console.log(document.querySelector('#baz').previousElementSibling);
console.log(document.querySelector('#foo').children);
console.log(document.querySelector('#foo').parentNode);
console.log(document.querySelector('#foo').firstElementChild);
console.log(document.querySelector('#foo')
    .children[
        Math.round((document.querySelector('#foo').childElementCount - 1) / 2)
    ]);

//Zadanie 2

function addClickBehaviorToShowInnerText(elementId) {
    let element = document.querySelector(elementId);
    let elementChildrens = element.firstElementChild;

    element.addEventListener('click', () => {
        console.log(elementChildrens.innerText);
    });
}

addClickBehaviorToShowInnerText('#ex2');

//Zadanie 3

function addClickBehaviorToShowOrHideSpan(elementId) {
    let buttons = document.querySelectorAll(`${elementId} div button`);
    buttons.forEach(element => {
        element.addEventListener('click', showOrHideSpan);
    });
}

function showOrHideSpan(event) {
    let span = event.target.nextElementSibling;
    if (span.getAttribute('style') === 'display:none') {
        span.setAttribute('style', 'display:true');
    } else {
        span.setAttribute('style', 'display:none');
    }
}

addClickBehaviorToShowOrHideSpan('#ex3');

//Zadanie 4

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeParentColorWhenButtonClick(elementId) {
    let buttons = document.querySelectorAll(`${elementId} div button`);
    buttons.forEach(element => {
        element.addEventListener('click', changeParentColor);
    });
}

function changeParentColor(event) {
    event.target.parentNode.setAttribute('style', `background-color: ${getRandomColor()}`);
}

changeParentColorWhenButtonClick('#ex3');

//Zadanie 5

function changeColorOnHover(elementId) {
    let rectangles = document.querySelectorAll(`${elementId} div`);
    let list = document.querySelector(`${elementId} ul`);
    let listItems = Array.from(list.children);
    let counter = 1;

    rectangles.forEach(element => {
        let elementColor = element.style.backgroundColor;
        element.addEventListener('mouseover', () => {
            switch (counter) {
                case 1:
                    console.log('counter: ' + counter + ' - Tylko pierwszy element listy');
                    listItems[0].style.backgroundColor = elementColor;
                    counter++;
                    break;

                case 2:
                    console.log('counter: ' + counter + ' - Tylko ostatni element listy');
                    listItems[listItems.length - 1].style.backgroundColor = elementColor;
                    counter++;
                    break;

                case 3:
                    console.log('counter: ' + counter + ' - Parzyste elementy listy');
                    listItems.forEach(element => {
                        if (element.innerText % 2 === 0) {
                            element.style.backgroundColor = elementColor;
                        }
                    });
                    counter++;
                    break;

                case 4:
                    console.log('counter: ' + counter + ' - Wszystkie elementy listy');
                    listItems.forEach(element => {
                        element.style.backgroundColor = elementColor;
                    });
                    counter++;
                    break;

                case 5:
                    console.log('counter: ' + counter + ' - Żaden z elementów - tylko cała lista');
                    list.style.backgroundColor = elementColor;
                    counter = 1;
                    break;
            }
        });

        element.addEventListener('mouseout', () => {
            list.style.backgroundColor = '';
            listItems.forEach(element => {
                element.style.backgroundColor = '';
            });
        });
    });
}

changeColorOnHover('#ex5');

//Zadanie 6.1
let divEX6 = document.querySelector('#ex6');

let divEX6Child = divEX6.firstElementChild;
let divEX6ChildChild = divEX6Child.firstElementChild;
let divEX6ChildChildChild = divEX6ChildChild.firstElementChild;

console.log('Zadanie 6.1:', divEX6Child, divEX6ChildChild, divEX6ChildChildChild);

//Zadanie 6.2
let divEX6Child_2 = divEX6.firstElementChild;
let divEX6ChildParent_2 = divEX6Child_2.parentNode;
let divEX6ChildParentChild_2 = divEX6ChildParent_2.firstElementChild;
let divEX6ChildParentChildChild_2 = divEX6ChildParentChild_2.firstElementChild;
let divEX6ChildParentChildChildSibling_2 = divEX6ChildParentChildChild_2.nextElementSibling;
let divEX6ChildParentChildChildSiblingParent_2 = divEX6ChildParentChildChildSibling_2.parentNode;

console.log('Zadanie 6.2:',
    divEX6Child_2,
    divEX6ChildParent_2,
    divEX6ChildParentChild_2,
    divEX6ChildParentChildChild_2,
    divEX6ChildParentChildChildSibling_2,
    divEX6ChildParentChildChildSiblingParent_2);

//Zadanie 6.3
let divEX6Parent_3 = divEX6.parentNode;
let divEX6ParentChild_3 = divEX6Parent_3.firstElementChild;
let divEX6ParentChildParent_3 = divEX6ParentChild_3.parentNode;
let divEX6ParentChildParentSecondChild_3 = divEX6ParentChildParent_3.children[1];
let divEX6ParentChildParentSecondChildChild_3 = divEX6ParentChildParentSecondChild_3.firstElementChild;
let divEX6ParentChildParentSecondChildChildChild_3 = divEX6ParentChildParentSecondChildChild_3.firstElementChild;
let divEX6ParentChildParentSecondChildChildChildChild_3 = divEX6ParentChildParentSecondChildChildChild_3.firstElementChild;

console.log('Zadanie 6.3:',
    divEX6Parent_3,
    divEX6ParentChild_3,
    divEX6ParentChildParent_3,
    divEX6ParentChildParentSecondChild_3,
    divEX6ParentChildParentSecondChildChild_3,
    divEX6ParentChildParentSecondChildChildChild_3,
    divEX6ParentChildParentSecondChildChildChildChild_3);