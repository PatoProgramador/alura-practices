// 1
function greeting() {
    console.log('Hola mundo');
}
// 2
function greetingWName(name) {
    console.log(`¡Hola, ${name}!`);
}
// 3
function doubleNumber(number) {
    return parseInt(number*2);
}
// 4
function calculateAverage(number1, number2, number3) {
    return (number1 + number2 + number3)/ 3;
}
// 5
function maxNumber(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}
// 6
function multiplyNumber(number) {
    return number * number;
}
// ejemplos
// 1
greeting();
// 2
greetingWName('Pato');
// 3
console.log(`El doble de 2 es ${doubleNumber(2)}`);
// 4
console.log(`El promedio entre 3, 4 y 5 es ${calculateAverage(3,4,5)}`);
// 5
console.log(`El maximo entre 20 y 36 es ${maxNumber(20,36)}`);
// 6
console.log(`5 por si mismo es ${multiplyNumber(5)}`);