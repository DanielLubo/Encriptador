let arrayTexto = [];


//Funciones para la Encriptacion
function encriptar() {
    let texto = document.getElementById("inputTexto").value.trim();    
    
    if(texto === ""){
        alert('Por favor, ingrese un texto antes de desencriptar.');
        restaurarVistaOriginal();
        return;
    }

    let arrayTexto = texto.split(" ");

    document.getElementById("inputTexto").value = '';
    console.log("Array original:", arrayTexto);

    for (let i = 0; i < arrayTexto.length; i++) {
        arrayTexto[i] = encriptarPalabra(arrayTexto[i]);
    }

    let resultado = arrayTexto.join(" ");
    document.getElementById('resultadodos').innerHTML = resultado;
    console.log("Array encriptado:", arrayTexto);

    mostrarResultado(resultado);

}

function encriptarPalabra(palabra) {
    const reglas = {
        "e" : "enter",
        "i" : "imes", 
        "a" : "ai", 
        "o" : "ober", 
        "u" : "ufat",
    };

    let palabraEncriptada = '';
    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        if (reglas[letra]) {
        palabraEncriptada += reglas[letra];
        } else {
        palabraEncriptada += letra;
        }
    }

    return palabraEncriptada;
}



//Funciones para la Desencriptacion
function desencriptar(){
    let nuevoTexto = document.getElementById("inputTexto").value.trim();

    if (nuevoTexto === "") {
        alert("Por favor, ingrese un texto antes de desencriptar.");
        restaurarVistaOriginal();
        return; 
    }

    let arrayTexto = nuevoTexto.split(" ");

    document.getElementById("inputTexto").value = '';
    console.log("Array original de texto encriptado:", arrayTexto);

    for(let i = 0; i < arrayTexto.length; i++){
        arrayTexto[i] = desencriptarPalabra(arrayTexto[i]);
    }

    let resultado = arrayTexto.join(" ");
    document.getElementById('resultadodos').innerHTML = resultado;
    console.log("Array Desencriptado:", arrayTexto);

    mostrarResultado(resultado);
}

function desencriptarPalabra(nuevaPalabra){
    const nuevaReglas = {
        "enter" : "e",
        "imes" : "i", 
        "ai" : "a", 
        "ober" : "o", 
        "ufat" : "u",
    };

    let palabraDesencriptada = "";

    let i = 0;
    while(i < nuevaPalabra.length){
        let caracter = nuevaPalabra[i];

        let desencriptadoEncontrado = false;
        for(let regla in nuevaReglas){
            if(nuevaPalabra.substring(i, i + regla.length) === regla){
                palabraDesencriptada += nuevaReglas[regla];
                i += regla.length - 1;
                desencriptadoEncontrado  = true;
                break;
            } 
        }

        if(!desencriptadoEncontrado){
            palabraDesencriptada += caracter;
        }

        i++;
    }
    return palabraDesencriptada;
}


//Funciones para Mostrar el resultado tanto de Encriptacion como de Desencriptacion
function mostrarResultado(resultado){
    const resultadoElement = document.getElementById('resultadodos');
    const imagenMuneco = document.getElementById('imagenMuneco');
    const titulo = document.getElementById('tituloAd');
    const parrafo = document.getElementById('parrafoAd');
    const boton = document.getElementById('botonCopiar');

    resultadoElement.textContent = resultado;

    imagenMuneco.style.display = 'none';
    titulo.style.display = 'none';
    parrafo.style.display = 'none';

    boton.style.display = 'block';    
}

function restaurarVistaOriginal() {
    const resultadoElement = document.getElementById('resultadodos');
    const imagenMuneco = document.getElementById('imagenMuneco');
    const titulo = document.getElementById('tituloAd');
    const parrafo = document.getElementById('parrafoAd');
    const boton = document.getElementById('botonCopiar');

    imagenMuneco.style.display = 'block';
    titulo.style.display = 'block';
    parrafo.style.display = 'block';

    boton.style.display = 'none';    
    resultadoElement.innerHTML = '';
}


function copiar(){
    const resultadoTexto = document.getElementById('resultadodos');
    navigator.clipboard.writeText(resultadoTexto.textContent)
        .then(()=>{
            alert('Texto copiado al porta papeles');
        })
        .catch(err =>{
            console.error('Error al copiar el texto; ', err);
        });
}