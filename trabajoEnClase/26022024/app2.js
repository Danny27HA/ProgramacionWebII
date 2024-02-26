let datoUno=1
let datoCero=0

let A= datoUno<datoCero
console.log(A);

let B= datoCero<datoUno
console.log(B);


let r00= A&A;
console.log("El resultado de and en A0B0 es: "+ r00);

let r01= A&B;
console.log("El resultado de and en A0B1 es: "+ r01);

let r10= B&A;
console.log("El resultado de and en A1B0 es: "+ r10);

let r11= B&B;
console.log("El resultado de and en A1B1 es: "+ r11);