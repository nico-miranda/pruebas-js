
let ingreseNumero = parseInt (prompt ("Ingresar Número"));
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