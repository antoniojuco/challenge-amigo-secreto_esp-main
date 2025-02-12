// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    if (inputAmigo.value == ""){
        alert("Debes ingresar un nombre")
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + `<li>${inputAmigo.value}</li>`;

    inputAmigo.value ="";
    inputAmigo.focus();
}

    function sortearAmigo(){
    if (listaAmigos == ""){
        alert("No se han agregado amigos para sortear");
        return;
    }   

    
    const amigoAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[amigoAleatorio];
    ulResultado.innerHTML = `<li>Tú amigo secreto es: ${amigoSecreto}</li>`;    

}

