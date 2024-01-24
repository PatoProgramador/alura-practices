// variables
let listaGenerica = [];
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
let listaNumber = [1, 2, 3, 4];
let listaNumber2 = [4, 3, 2, 1];
// 3
lenguagesDeProgramacion.push('Java', 'Ruby', 'Golang');
// 4
function showArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// 5
function showReversedArr(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
// 6
function calculateArrAverage(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
// 7
function maxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [max, min];
}
// 8
function plusArr(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
// 9
function findElement(item, arr) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            index = i;
        }
    }
    return index;
}
// 10
// se parte del supuesto de que ambos arrays tienen la misma longitud
function colapseArr(arr, arr2) {
    let newArr = [];
    for (let i=0; i< arr.length; i++) {
        newArr.push(arr[i] + arr2[i]);
    }
    return newArr;
}
// 11
function doubleArr(arr) {
    let newArr = [];
    for (let i=0; i< arr.length; i++) {
        newArr.push(arr[i] * arr[i])
    }
    return newArr;
}

// Ejemplos
// 4
showArr(lenguagesDeProgramacion);
// 5
console.log('------------------')
showReversedArr(lenguagesDeProgramacion);
// 6
console.log(calculateArrAverage(listaNumber));
// 7
let maxminArr = maxAndMin(listaNumber);
console.log(`El número mayor es ${maxminArr[0]} y el número minimo es ${maxminArr[1]}`);
// 8
console.log(plusArr(listaNumber));
// 9
let ind = findElement(4, listaNumber);
console.log(`${ind !== -1 ? `El item 4 está en la posición ${ind}` : 'No se encuentra el item en la lista'}`);
// 10
console.log(colapseArr(listaNumber, listaNumber2));
// 11
console.log(doubleArr(listaNumber));