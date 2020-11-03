//Zadanie 1
let buttonTestEvent = document.querySelector('#test-event');
let inputTest = document.querySelector('#input-test');
let onClickEvent;
let onMousemoveEvent;
let onMouseoverEvent;
let onKeydownEvent = 'Aby wywołać ten event należy wcisnąć dowolny przycisk klawiatury';
let onScrollEvent = 'Aby wywołać ten event należy dowolnie przescrollować stronę';
let onInputEvent = 'Aby wywołać ten event należy wprowadzić dowolny tekst/znak w pierwszym inpucie strony';

buttonTestEvent.addEventListener('click', event => {
    onClickEvent = event;
    printEvents();
});
buttonTestEvent.parentNode.addEventListener('mousemove', event => {
    onMousemoveEvent = event;
});
buttonTestEvent.addEventListener('mouseover', event => {
    onMouseoverEvent = event;
});
window.addEventListener('keydown', event => {
    onKeydownEvent = event;
});
window.addEventListener('scroll', event => {
    onScrollEvent = event;
})
inputTest.addEventListener('input', event => {
    onInputEvent = event;
})

function printEvents() {
    console.clear();
    console.log('onclick event: ', onClickEvent);
    console.log('onmousemove event: ', onMousemoveEvent);
    console.log('onmouseover event: ', onMouseoverEvent);
    console.log('onkeydown event: ', onKeydownEvent);
    console.log('onscroll event: ', onScrollEvent);
    console.log('oninput event: ', onInputEvent);
}

//Zadanie 2
document.querySelector('#ex2').addEventListener('click', () => {
    buttonEx2.nextElementSibling.innerText = buttonEx2.dataset.text;
});

//Zadanie 3
let redRectangle = document.querySelector('#ex3');
redRectangle.addEventListener('mouseover', () => {
    redRectangle.style.backgroundColor = 'blue';
});
redRectangle.addEventListener('mouseout', () => {
    redRectangle.style.backgroundColor = 'red';
})

//Zadanie 4
let errorSpan = document.querySelector('#ex3-err');
errorSpan.style.color = 'red';

inputTest.addEventListener('input', event => {
    console.log(inputTest.value);
    if (hasNumber(inputTest.value)) {
        errorSpan.innerText = 'Wprowadzono nieprawidzłowy znak, liczby są niedozwolone!';
    } else {
        errorSpan.innerText = '';
    }
});

function hasNumber(s) {
    return /\d+/.test(s);
}

//Zadanie 5
let buttonEx5 = document.querySelector('#ex5-button');
let spanEx5 = document.querySelector('#ex5 span');
let counter = 0;

let buttonBehavior = function() {
    if (counter < 10) {
        counter++;
        spanEx5.innerText = counter;
    } else {
        buttonEx5.removeEventListener('click', buttonBehavior);
    }
}
buttonEx5.addEventListener('click', buttonBehavior);

//Zadanie 6
window.addEventListener('scroll', () => {
    let body = document.querySelector('body');
    if (window.scrollY >= 200) {
        body.style.backgroundColor = 'red';
    } else {
        body.style.backgroundColor = 'white';
    }
});

//Zadanie 7
let calculatorInput = document.querySelector('#calculator input');
let calculatorNumbersButtons = document.querySelectorAll('#calculator div button');

function addNumber(event) {
    if (event.target.innerText === '=') {
        calculatorInput.value = eval(calculatorInput.value); //Zadję sobię sprawę iż funkcji eval() nie powino sie używać ze wględu na bezpieczeńśtwo strony, lecz w tym przypadku jest to najwygodniejszy sposób no obliczenie danego równania
    } else {
        calculatorInput.value += event.target.innerText;
    }
}

for (let i = 0; i < calculatorNumbersButtons.length; i++) {
    calculatorNumbersButtons[i].addEventListener('click', addNumber);
}