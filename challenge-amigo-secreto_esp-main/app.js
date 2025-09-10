// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value
    if (nombreAmigo == ''){
        alert("Por favor, inserte un nombre");}
    else{
            amigos.push(nombreAmigo);}
    console.log(amigos);
    limpiarCaja();
    listaDeAmigos();
}

function limpiarCaja() {
    document.querySelector("#amigo").value = '';
}

function listaDeAmigos(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length == 0){
        print("No hay amigos agregados a la lista, por favor ingresa los nombres para continuar");
        return
    }
    let indiceNumerico = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceNumerico];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`
}
