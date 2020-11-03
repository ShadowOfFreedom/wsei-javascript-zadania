// //Zadanie 1
// let a = 1;
// let b = 2;

// if (a > b) {
//     console.log('Liczba1 jest większa');
// } else {
//     console.log('Liczba2 jest większa');
// }

// //Zadanie 2
// let a1 = 1;
// let b1 = 2;
// let c1 = 3;

// if (a1 > b1 && a1 > c1) {
//     console.log('Liczba 1 jest większa');
// } else if (b1 > a1 && b1 > c1) {
//     console.log('Liczba 2 jest większa');
// } else {
//     console.log('Liczba 3 jest większa');
// }

// //Zadanie 3
// for (let i = 0; i < 10; i++) {
//     console.log("Lubię JavaScript");
// }

// //Zadanie 4
// let result = 0;

// for (let j = 0; j <= 10; j++) {
//     result += j;
// }

// console.log(result);

// //Zadanie 5
// let n = 5;

// for (let k = 0; k <= n; k++) {
//     if (k % 2 == 0) {
//         console.log(k + " - parzysta");
//     } else {
//         console.log(k + " - nieparzysta")
//     }
// }

// //Zadanie 6
// for (let ii = 0; ii < 10; ii++) {
//     for (let jj = 0; jj < 10; jj++) {
//         console.log("ii= " + ii + ", jj= " + jj);
//     }
// }

// //Zadanie 7
// console.log(0);
// for (let kk = 0; kk <= 100; kk++) {
//     if (kk % 15 == 0) {
//         console.log("FizzBuzz");
//     } else if (kk % 5 == 0) {
//         console.log("Buzz");
//     } else if (kk % 3 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(kk);
//     }
// }

// //Zadanie 8
// //a)
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// //b)
// let star = ' *';
// let space = ' ';
// let dimension = 5;
// for (let s = 0; s < dimension; s++) {
//     let result = '';
//     for (let q = 1; q < dimension - s; q++) {
//         result += space;
//     }
//     for (let p = 0; p < s + 1; p++) {
//         result += star;
//     }
//     console.log(result);
// }

// //c)
// let star = '*';
// let space = ' ';
// let dimension = 5;
// for (let s = 0; s < dimension; s++) {
//     let result = '';
//     for (let q = 1; q < dimension - s; q++) {
//         result += space;
//     }
//     for (let p = 0; p < s + 1; p++) {
//         result += star;        
//     }
//     for (let r = 1; r < s+1 ; r++){
//           result += star;
//         }
//     console.log(result);
// }

//d)
// let star = '*';
// let dimension = 5;

// for (let s = 0; s < dimension; s++) {
//   let result = '';
//   for (var q = 0; q < s + 1; q++) {
//     result += star;        
//   }
//   for (let p = q; p <= dimension - 1; p++) {
//     result += p;
//   }
//   console.log(result);
// }

// let breakLine = '';
// for (let b = 0; b < dimension; b++){
//   breakLine += '-';
// }
// console.log(breakLine);

// for (let ss = dimension; ss > 0; ss--) {
//   let result = '';
//   for (var qq = 0; qq < ss; qq++) {
//     result += star;        
//   }
//   for (let pp = qq; pp <= dimension -1; pp++) {
//     result += pp;
//   }
//   console.log(result);
// }

//e)
let star = ' *';
let space = ' ';
let dimension = 5;
for (let s = 0; s < dimension; s++) {
    let result = '';
    for (let q = 1; q < dimension - s; q++) {
        result += space;
    }
    for (let p = 0; p < s + 1; p++) {
        result += star;
    }
    console.log(result);
}

let lineLenght = 0.6;
for (let ss = 0; ss < dimension * lineLenght; ss++) {
    let result2 = '';
    for (let qq = 1; qq < dimension; qq++) {
        result2 += space;
    }
    console.log(result2 += star);
}