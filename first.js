
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
} 
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
} */
/*class riotGames{
    constructor(nombres, calificacion) {
        this.nombres = nombres.toUpperCase();
        this.calificacion = parseFloat(calificacion);
    }
}
const juegos = [];
    juegos.push(new juego("League of legends", 10));
    juegos.push(new juego("Valorant", 8));
    juegos.push(new juego("Tft", 6));
    juegos.puh(new juego("League of runaterra", 3));
console.log(juegos);

for (const juego of juegos) {
    juego.sumaIva();
    console.log("Nombre del juego: " + juego.nombre)
} */


let juegos = ["league of legends" , "valorant" , "teamfight tactics"];
for(let i=0 ; i<juegos.length; i++){ 
    console.log(juegos[i]) 
}
juegos.sort((a, b) => {
    return a.id - b.id;
})

