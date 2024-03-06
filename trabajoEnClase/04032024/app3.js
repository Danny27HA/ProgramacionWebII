// function saludar(){
//     console.log("Bienvenid@");
// }
// saludar();

function saludar(nombreUsuario){
    console.log("Bienvenid@ " + nombreUsuario  + "!");
}
saludar("Daniel");

function suma(n1,n2){
    return parseInt(n1)+ parseInt (n2);
}

let numeroUno = prompt("Ingrese el primer numero");
let numeroDos = prompt("Ingrese el segundo numero");

let resultado = suma(numeroUno, numeroDos);
console.log(resultado);