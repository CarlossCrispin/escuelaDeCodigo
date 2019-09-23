// prompt("Dime tu nombre", "ejemplo de nombre");
function nombre(){
    var nombre = prompt("Dime tu nombre");
    document.write( nombre );
}

function Calcular(){
    var n1 = prompt("Dime un numero");
    var n2 = prompt("Dime otro numero");
    var opc = prompt("1) suma \n 2)resta \n 3)multiplicación \n 4)División", "ingresa una opcion");
    // var resultado = (opc === 1) ? "La Suma es" + parseFloat(n1) + parseFloat(n2) :(opc === 2) ? "La Resta es" + parseFloat(n1) - parseFloat(n2);
    document.write(resultado);
    
}

// var n1 = prompt("Dime un numero");
// var n2 = prompt("Dime otro numero");
// document.write("La suma de " + n1 + " y " + n2 + " es: ");
// document.write(parseInt(n1) + parseInt(n2));


function Restar() {
    var n1 = document.getElementById('txtN3').value;
    var n2 = document.getElementById('txtN4').value;
    var resta = parseInt(n1) - parseInt(n2);
    alert("La resta es: " + resta)
}



function alerta() 
{
var mensaje;
var opcion = prompt("Introduzca su nombre:", "Aner Barrena");
 
if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
        } else {
            mensaje = "Hola " + opcion;
            }
            document.getElementById("ejemplo").innerHTML = mensaje;
}


function Multiplicar(){
    var n1 = document.getElementById('txtN5').value;
    var n2 = document.getElementById('txtN6').value;
    var multiplicacion = parseInt(n1) * parseInt(n2);
    alert("La multiplicación de  "+ n1 + "  X "  + n2 +" es : " + multiplicacion);
}