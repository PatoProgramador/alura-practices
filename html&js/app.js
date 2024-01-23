// 1
let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora del Desafío';

// 2
function clicker() {
    console.log('El botón fue clicado');
}

// 3
function prompter() {
    let ciudad = prompt('Digita una ciudad de tu preferencia :) ');
    alert(`Estuve en ${ciudad}, la ciudad de la furia >:3`);
}

// 4
function alerter() {
    alert('Yo amo JS (no leas esto Python)');
}

// 5
function sumar() {
    let num1 = parseInt(prompt('Digita el primer número por fa :) '));
    let num2 = parseInt(prompt('Digita el segundo número por fa :D '));

    alert(`La suma de los dos números dados es ${num1 + num2} :DD`);
}