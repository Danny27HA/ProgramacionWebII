/* const pregunta= confirm("Desea agregar una fruta");
const carrito=[];

if(pregunta){
   
    agregar=(prompt("Escriba la fruta"));
    carrito.unshift(agregar);
    

} else{
    console.log(carrito);
    
} */

const frutas=[];
const fruta=prompt("Que fruta desea agregar?");
frutas.push(fruta);
while(confirm("Desea agregar otra fruta?")){
    const fruta=prompt("Que fruta desea agregar?");
    frutas.push(fruta)
}
console.log("Usted compró: ");
for(let fruta of frutas){
    console.log(fruta);
}