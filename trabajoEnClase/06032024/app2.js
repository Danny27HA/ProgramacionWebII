document.getElementById('calculator-Form').addEventListener('submit', function(event){
event.preventDefault();

let num1 = parseFloat(document.getElementById('num1').value);
let num2 = parseFloat(document.getElementById('num2').value);

let operador= document.getElementById('operador').value;
let resultado;

switch (operador){
    case 'suma':
     resultado=num1+num2;
     break;
     case 'resta':
     resultado=num1-num2;
     break;
     case 'multiplicacion':
     resultado=num1*num2;
     break;
     case 'division':
        if(num2!==0){
            resultado=num1/num2;
        } else
        resultado="Error no se puede dividir entre 0, Ingrese otro numero"
     break;
     default: 
     resultado="Operador ivalido"
     break;
}

console.log(resultado);
document.getElementById('result').innerHTML=`El resultado es: ${resultado}`;
});