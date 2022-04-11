// carrito de compras de un negocio
class logIn {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
// AGREGADO NUEVO PARA REENTREGA
let username = prompt("Ingrese su nombre de usuario");
let email = prompt("ingrese su correo electrónico"); 
let password = prompt("ingrese su contraseña");

console.log (username, email, password)

//funcion flecha para sumar articulos disponibles y mostrar precio total
//para futuro proyecto final
const precioTotal = (a, b) => a+b
let remera = 1500;
let gorra = 600;
let mousepad = 2100;

console.log(precioTotal(1500,1600))

precioTotal (remera, gorra);
console.log (precioTotal(remera, gorra))

//funcion para controlar stock y avisarle al user si hay disponibilidad
stockRemera = 2
stockGorra = 3
stockMousepad = 11

let stockDisponible= prompt("Ingrese el artículo del que quiere conocer el stock: 'remera' 'gorra' o 'mousepad' ")

if(stockDisponible == 'remera') {
    alert(stockRemera)
} else if (stockDisponible == 'gorra') {
    alert (stockGorra)
} else if (stockDisponible == 'mousepad') {
    alert (stockMousepad)
} else alert("No tenemos ese articulo")

//ARRAYS
let tiendita = ["remera1", "remera2", "remera3", "remera4", "remera5", "remera6", "remera7"]
console.log(tiendita)

tiendita.unshift("remera0");
console.log(tiendita)

tiendita.push("remera8");
console.log(tiendita)

console.log(tiendita.indexOf("remera4"));
console.log(tiendita.indexOf("gorra"));

let nuevaRemera = prompt("Felicidades! Podes agregar un diseño de remera ¿Como deberiamos llamarla?")
tiendita.push(nuevaRemera)
console.log(tiendita)
