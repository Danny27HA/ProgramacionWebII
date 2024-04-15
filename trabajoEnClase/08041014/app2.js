// let h1 = document.querySelector("#tituloweb");
// console.log(h1.className);
// console.log(h1.id);
// console.log(h1.style);
// console.log(h1.textContent);

// h1.textContent="Bandera1";
// h1.style.backgroundColor="red";
// h1.style.color="white";

let boton = document.querySelector("#boton");
let parrafo= document.querySelector("#parrafo");

boton.addEventListener("click", ()=>{
    parrafo.textContent="Nuevo texto";
});