// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let nombre_amigo = document.getElementById("amigo").value
    if (nombre_amigo == ''){
        alert("Por favor, inserte un nombre");}
    else{
            amigos.push(nombre_amigo);}
    console.log(amigos);
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector("#amigo").value = '';
}
