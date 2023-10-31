//Iniciar el conteo como 0
//Escuchar clicks con el incremento
//Incrementar el conteo de la variable una vez se hace click en el botón
//Cambiar el count-el en el HTML para reflejar el nuevo conteo

let countEl = document.getElementById("contador");

let conteo = 0
let guardadoEL = document.getElementById("guardado")

function increment(){
    conteo += 1
    countEl.textContent = conteo
    console.log(conteo)
};

function guardar() {
    let salvado = " " + conteo + " -"
    guardadoEL.textContent += salvado
    countEl.textContent = 0
    conteo = 0
}
