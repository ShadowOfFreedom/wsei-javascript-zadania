 //Zadanie 1
 console.log('Zadanie 1');

 let myArray1 = ['one', 'two', 3, { value: 'trzy' }];

 myArray1.forEach((element) => {
     console.log(element);
 })

 //Zadanie 2
 console.log('Zadanie 2');

 let myArray2 = ['one', 'two', 3, { value: 'trzy' }, 4, 5.6, 'seven nation army'];

 function printFirstAndSecondElement(array) {
     console.log('Pierwszy element: ' + array[0]);
     console.log('Drugi element: ' + array[1]);
 }

 function printLastElement(array) {
     console.log('Ostatni element: ' + array[array.length - 1]);
 }

 function printAllElements(array) {
     array.forEach((element) => {
         console.log(element);
     });
 }

 function printEverySecondElement(array) {
     for (let i = 1; i <= array.length - 1; i += 2) {
         console.log(array[i]);
     }
 }

 function printEveryString(array) {
     array.forEach(element => {
         if (typeof element === 'string') {
             console.log(element);
         }
     })
 }

 function printEveryNumber(array) {
     console.log(array.filter(element => {
         if (typeof element === 'number') {
             return element;
         };
     }))
 }

 printFirstAndSecondElement(myArray2);
 console.log('');
 printLastElement(myArray2);
 console.log('');
 printAllElements(myArray2);
 console.log('');
 printEverySecondElement(myArray2);
 console.log('');
 printEveryString(myArray2);
 console.log('');
 printEveryNumber(myArray2);
 console.log('');

 //Zadanie 3
 console.log('Zadanie 3');

 let myNumberArray = [12, 532, 565, 7, 34.8733454, 8, 99999999, 67, 998, 0, 12.5, 654.7, -1324, -1345.654, -765];

 function sumAllElements(array) {
     let result = 0;
     array.forEach(element => {
         result += element;
     })
     return result;
 }

 function subAllElements(array) {
     let a = Object.create(array); //tworzy prawdziwa kopie tablicy (obiektu). zeby w dalszych wywolaniach tablica nie ulegla zmianie
     let result = a.shift();
     a.forEach(element => {
         result -= element;
     })
     return result;
 }

 function averageFromAllElements(array) {
     return sumAllElements(array) / array.length;
 }

 function getEvenElements(array) {
     return array.filter(element => {
         return element % 2 === 0;
     })
 }

 function getOddElements(array) {
     return array.filter(element => {
         return element % 2 === 1 || element % 2 === -1;
     })
 }

 function getLargestElement(array) {
     return Math.max.apply(Math, array);
 }

 function getSmallestElement(array) {
     return Math.min.apply(Math, array);;
 }

 function getReversArray(array) {
     let a = Object.create(array);
     return a.reverse();
 }

 console.log(sumAllElements(myNumberArray));
 console.log('');
 console.log(subAllElements(myNumberArray));
 console.log('');
 console.log(averageFromAllElements(myNumberArray));
 console.log('');
 console.log(getEvenElements(myNumberArray));
 console.log('');
 console.log(getOddElements(myNumberArray));
 console.log('');
 console.log(getLargestElement(myNumberArray))
 console.log('');
 console.log(getSmallestElement(myNumberArray))
 console.log('');
 console.log(getReversArray(myNumberArray))
 console.log('');

 //Zadanie 4
 console.log('Zadanie 4');

 let myNumberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 console.log(sumAllElements(myNumberArray2)); //funkcja taka zostałą zrobiona w zadaniu 3
 console.log('');

 //Zadanie 5
 console.log('Zadanie 5');

 function printAllElementsMultiplyByAverage(array) {
     array.forEach(element => {
         console.log(element * averageFromAllElements(array));
     })
 }

 printAllElementsMultiplyByAverage(myNumberArray2);
 console.log('');

 //Zadanie 6
 console.log('Zadanie 6');

 function averageFromEvenElements(array) {
     return averageFromAllElements(getEvenElements(array)); //wykorzystanie funkcji napisanych w zadaniu 3
 }

 console.log(averageFromEvenElements(myNumberArray2));
 console.log('');

 //Zadanie 7
 console.log('Zadanie 7');

 function sortAscending(array) {
     let a = Object.create(array);
     return a.sort((a, b) => a - b);
 }

 console.log(sortAscending(myNumberArray));
 console.log('');

 //Zadanie 8
 console.log('Zadanie 8');


 function getIndexesFrom(array1, array2) {
     let indexArray = [];
     array1.forEach((e, index) => {
         indexArray.push(index);
     })
     array2.forEach((e, index) => {
         indexArray.push(index);
     })
     return indexArray;
 }

 console.log(getIndexesFrom(myNumberArray, myNumberArray2));
 console.log('');

 //Zadanie 9
 console.log('Zadanie 9');

 function removeElmentsFrom(array, elementsToRemove) {
     if (Array.isArray(elementsToRemove)) {
         return array.filter(element => {
             return !elementsToRemove.includes(element);
         })
     } else {
         return array.filter(element => {
             return element != elementsToRemove;
         })
     }
 }

 let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let a2 = [3, 5, 8, 10];

 console.log(removeElmentsFrom(a1, a2));
 console.log(removeElmentsFrom(a1, 2));
 console.log();

 //Zadanie 10
 console.log('Zadanie 10');

 function reversNumberSign(array) {
     return array.map(element => {
         return element == 0 ? element : -(element); // odwrocenie liczby 0 dało by wartosc -0, co jest specyfkacja jezyka javascript, aby tego uniknac w przyadku 0 zwracamy element bez odwracania znaku
     })
 }
 console.log(reversNumberSign(myNumberArray));
 console.log();