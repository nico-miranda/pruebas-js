
/*let ingreseNumero = parseInt (prompt ("Ingresar Número"));
for (let i = 4; i <= 11; i++){
    let resultado = ingreseNumero / i ;
    alert(ingreseNumero +"x" + i + "="+resultado);
}
let nombre = prompt("Como te llamas?");
while(nombre != "ESC"){
    alert(" Su nombre es: "+ nombre);
    apellido = prompt(" Cual es tu apellido?");
    alert(" Su apellido es: "+ apellido);
    edad = prompt("Cuantos años tienes?");
    alert(" Tienes: "+ edad + " años ");
    break
}

function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    console.log("El nombre ingresado es " + nombreIngresado)
} */
let cuenta = parseFloat(prompt("La cuenta es:"));
let plato = "";
let gastos = 0;

while (plato.toUpperCase() != "ESC") {
    plato = prompt("Ingrese el nombre del plato:");

    if (plato.toUpperCase() == "ESC") {
        break;
    }

    console.log("Nombre: " + plato);
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    console.log("Precio: " + precio);
    gastos += precio;

    if (gastos > cuenta){
        alert("Fondos Insuficientes");
        alert("El saldo es: $" + gastos + " pesos ");
        break;
    }
}