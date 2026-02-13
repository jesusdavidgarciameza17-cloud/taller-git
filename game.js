console.log("gambling")
console.log("no entendi")


const min = 1;
const max = 456;
const correct = Math.floor(Math.random() * (max - min + 1) + min);  //

const soClose = 3;      
const close = 10;        
const far = 50;        

function tryGuess() {
    const value = parseInt(document.getElementById("intento").value);
    const difference = Math.abs(value - correct);
    const hint = document.getElementById("pista");

    if (isNaN(value)) {
        hint.textContent = "coloca un numero we un numero";
        return;
    }

    if (value === correct) {
        hint.textContent = "Ganaste, pero eso no cambiara nada";
        return;
    }

    // hints
    if (difference <= soClose) {
        hint.textContent = "en llamas como un volcan (muy cerca)";
    } else if (difference <= close) {
        hint.textContent = "stufa (cerca)";
    } else if (difference <= far) {
        hint.textContent = "frezzer (frio)";
    } else {
        hint.textContent = "congelado (muy frio)";
    }
}
