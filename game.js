
console.log("gambling")
console.log("no entendi")


const min = 1;
const max = 456;
const correcto = Math.floor(Math.random() * (max - min + 1) + min);  //


const muyCerca = 3;      
const cerca = 10;        
const lejos = 35;        

function probar() {
    const valor = parseInt(document.getElementById("intento").value);
    const diferencia = Math.abs(valor - correcto);
    const pista = document.getElementById("pista");

    if (isNaN(valor)) {
        pista.textContent = "coloca un numero we un numero";
        return;
    }

    if (valor === correcto) {
        pista.textContent = "Ganaste, pero eso no cambiara nada";
        return;
    }

    // pistas
    if (diferencia <= muyCerca) {
        pista.textContent = "en llamas como un volcan (muy cerca)";
    } else if (diferencia <= cerca) {
        pista.textContent = "stufa (cerca)";
    } else if (diferencia <= lejos) {
        pista.textContent = "frezzer (frio)";
    } else {
        pista.textContent = "congelado (muy frio)";
    }
}