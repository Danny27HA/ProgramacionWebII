let numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;
console.log("Numero Random: "+numeroRandom);

let numero = Math.abs(parseInt(prompt('Ingresa un numero del 1 al 10')));
let contador = 0;

let gano = false;
let vidas = 5;
while(contador < 5){
    if (numero === numeroRandom) {
        console.log("correcto ganaste");
        gano = true;
        break; 
    } else {
        console.log("Intenta de nuevo");
        vidas--;
        alert("Numero de vidas:"+vidas)
    }
    contador++;
    numero = Math.abs(parseInt(prompt('Ingresa un numero del 1 al 10')));
    
}
if(!gano)
    console.log("Perdiste "+"el numero era "+numeroRandom);