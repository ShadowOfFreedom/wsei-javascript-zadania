//Zadanie 1
// let counter = 0;

// let myTimeout = setInterval(() => {
//     counter++;
//     console.log('Cześć po raz ' + counter);
//     if (counter === 15) {
//         clearTimeout(myTimeout);
//     }
// }, 3000);

//Zadanie 2
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let wholeArrayTimeout =
    setTimeout(() => {
        console.log(myArray);
        setTimeout(() => {
            myArray.forEach((element, index) => {
                setTimeout(() => {
                    console.log(element);
                }, index * 3000)
            });
        }, 3000);
    }, 2000);