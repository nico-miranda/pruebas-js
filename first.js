
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
} 


let juegos = ["league of legends" , "valorant" , "teamfight tactics"];
for(let i=0 ; i<juegos.length; i++){ 
    console.log(juegos[i]) 
}
juegos.sort((a, b) => {
    return a.id - b.id;
}) */ 

//prompt
const datos = {
    nombre: "", 
    edad: "",
    telefono:"", 
    email:"",
    ubicacion:"", 
    formaPago: "",
  }
  
  datos.nombre=prompt("Ingrese su nombre y apellido: "); 
  datos.edad=prompt("Ingrese su edad: "); 
  datos.telefono=prompt("Ingrese su telefono: "); 
  datos.email=prompt("Ingrese su mail: "); 
  datos.ubicacion=prompt("Ingrese su ciudad de residencia: "); 
  datos.formaPago=prompt("Ingrese su metodo de pago: ");
  
  alert(`Nombre: ${datos.nombre} 
         Edad: ${datos.edad} 
         Telefono: ${datos.telefono} 
         Email: ${datos.email} 
         Ubicación: ${datos.ubicacion}
         Forma de pago: ${datos.formaPago}
  `)

//arrays
  let datosPersonales = ["Nombre, Edad, telefono, mail, ubicacion, metodo de pago"];
for(let i=0 ; i<datosPersonales.length; i++){ 
    console.log(datosPersonales[i]) 
}
datosPersonales.sort((a, b) => {
    return a.id - b.id;})

    //functions
    function dni() {
        let identificacion = prompt("Ingrese su carnet de identificación");
         if (identificacion != "") {
        alert("Tu documento es: " + identificacion);
          } 
        }
    dni(); 
     