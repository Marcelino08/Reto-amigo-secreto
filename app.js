let amigos = []; // Lista de amigos 

function actualizarListaAmigos() {
    let listaAmigosHTML = document.getElementById("listaAmigos");
    listaAmigosHTML.innerHTML = ""; // Borrar la lista

    // Añadir amigos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos[i].nombre; // Mostrar nombre
        listaAmigosHTML.appendChild(itemLista); // Ponerlo en la lista
    }
}

function agregarAmigo() {
    let campoEntrada = document.getElementById("amigo");
    let nombreAmigo = campoEntrada.value.trim(); // Obtenemos el nombre

    if (nombreAmigo === "") { // Si no hay nombre
        alert("Por favor, inserte un nombre.");
        return; // No hacer nada
    }
    
    amigos.push({ nombre: nombreAmigo, sorteado: false }); // Agregar amigo

    campoEntrada.value = ""; // Limpiar campo

    actualizarListaAmigos(); // Actualizamos la lista

    document.getElementById("resultado").innerHTML = ""; // Limpiar el mensaje anterior
}

function sortearAmigo() {
    if (amigos.length === 0) { // Verificamos si hay amigos
        alert("No hay amigos para sortear. Agrega al menos un amigo.");
        return; // Si no hay amigos, no hacer nada
    }

    let aleatorio = Math.floor(Math.random() * amigos.length); // Elegir un número al azar

    let amigoSorteado = amigos[aleatorio].nombre; // Obtener el amigo seleccionado

    // Ocultar la lista
    document.getElementById("listaAmigos").style.display = "none";

    // Mostrar el amigo sorteado
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "<p>El amigo secreto es: <strong>" + amigoSorteado + "</strong></p>"; // Mostrar mensaje
}

