// 1
function calcularImc(altura, peso) {
    return peso/altura;
}
// 2
function calcularFactorial(number) {
    let result = number;
    for (let i = number - 1; i > 0; i--) {
        result = result * i;
    }
    return result;
}
// 3
function calcularDolarAReal(valor) {
    return (valor * 0.00026) * 4,80;
}
// 4
function calcularAreaPerimetroRectangulo(altura, anchura) {
    alert(`El area de la sala rectangular es ${altura * anchura}`);
    alert(`El perímetro de la sala rectangular es ${(2 * altura) + (2 * anchura)}`);
}
// 5
function calcularAreaPerimetroCirculo(radio) {
    alert(`El area de la sala circular es ${3.14 * (radio * radio)}`);
    alert(`El perímetro de la sala circular es ${(2 * 3.14) * radio}`);
}
// 6
function mostrarTablaDeMultiplicar(numero) {
    for(let i=0; i<= 10;i++) {
        console.log(`El número ${numero} por ${i} es: ${numero * i}`);
    }
}
// Ejemplos
// 1
console.log(`El IMC es ${calcularImc(1.73, 55)}`);
// 2
console.log(`El factorial de 5 es ${calcularFactorial(5)}`);
// 3
console.log(`El valor en reales de 1000 COP es ${calcularDolarAReal(1000)}`)
// 4
calcularAreaPerimetroRectangulo(10, 20);
// 5
calcularAreaPerimetroCirculo(5);
// 6
mostrarTablaDeMultiplicar(9);