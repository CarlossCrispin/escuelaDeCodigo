function borrar() {
    document.getElementById('cont1').innerHTML = '';
}
// funcion para sumar
function Suma() {
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    // comparando llas dos variables con el operador or |
    if (n1 === "" | n2 === "") {
        alert("valor incorrecto ingresa un valor numerico");
    }
    else {
        // realizando la operacion con variables que estan parseadas a enteros
        var suma = parseInt(n1) + parseInt(n2);
        // disparando unalerta con una concatenacion de un texto y el valor de la operacion
        // alert("La Suma  de  "+ n1 + "  + "  + n2 +" es : " + suma);
        document.getElementById('cont1').innerHTML = 'el resultado es  ' + suma;
        document.getElementById('txtN1').value = ''; document.getElementById('txtN2').value = '';
        // return false;
    }

}
// funcion para restar
function Resta() {
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    // realizando la operacion con variables que estan parseadas a enteros
    var resta = parseInt(n1) - parseInt(n2);
    // disparando unalerta con una concatenacion de un texto y el valor de la operacion
    alert("La Resta de  " + n1 + "  - " + n2 + " es : " + resta);
    document.getElementById('txtN1').value = ''; document.getElementById('txtN2').value = '';
    // return false;
}
// funcion para multiplicar
function Multi() {
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    // realizando la operacion con variables que estan parseadas a enteros
    var multiplicacion = parseInt(n1) * parseInt(n2);
    // disparando unalerta con una concatenacion de un texto y el valor de la operacion
    alert("La multiplicación de  " + n1 + "  X " + n2 + " es : " + multiplicacion);
}


// funcion para Dividir
function Divi() {
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    // realizando la operacion con variables que estan parseadas a enteros
    var division = parseInt(n1) / parseInt(n2);
    // disparando unalerta con una concatenacion de un texto y el valor de la operacion
    alert("La multiplicación de  " + n1 + "  / " + n2 + " es : " + division);
}