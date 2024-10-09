let pantalla = document.getElementById("pantalla");
let operacionActual = "";
let valorAnterior = "";
let operacionSeleccionada = "";

function agregar(num) {
    pantalla.value += num;
}

function operacion(oper) {
    valorAnterior = pantalla.value;
    operacionSeleccionada = oper;
    pantalla.value = "";
}

function calcular() {
    let valorActual = pantalla.value;
    let resultado;
    switch (operacionSeleccionada) {
        case "+":
            resultado = parseFloat(valorAnterior) + parseFloat(valorActual);
            break;
        case "-":
            resultado = parseFloat(valorAnterior) - parseFloat(valorActual);
            break;
        case "*":
            resultado = parseFloat(valorAnterior) * parseFloat(valorActual);
            break;
        case "/":
            resultado = parseFloat(valorAnterior) / parseFloat(valorActual);
            break;
    }
    pantalla.value = resultado;
}

function limpiar() {
    pantalla.value = "";
    operacionActual = "";
    valorAnterior = "";
    operacionSeleccionada = "";
}
