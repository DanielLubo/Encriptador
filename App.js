const e = "enter"; //e
const i = "imes"; //i
const a = "ai"; //a
const o = "ober"; //o
const u = "ufat"; //u

function encriptar(){
    let texto = document.getElementById("inputTexto").value;
    let textEncriptado = "";

    for(let i =  0; i < texto.length; i++){

        let caracter  = texto[i];
        if(caracter === "e"){
            textEncriptado += e
        } else if(caracter === "i"){
            textEncriptado += i
        } else if (caracter ===  "a"){
            textEncriptado += a
        } else if(caracter === "o"){
            textEncriptado += o
        } else if(caracter === "u"){
            textEncriptado += u
        } else{
            textEncriptado += caracter;
        }        
    }

    document.getElementById("resultado").value = textEncriptado;
    console.log(texto);
    console.log(textEncriptado);
}

function desencriptar() {
    let textoNuevo = document.getElementById("inputTexto").value;
    let textoDesencriptado = "";
    const letraUno = "e";
    const letraDos = "i";
    const letraTres = "a";
    const letraCuatro = "o";
    const letraCinco = "u";

    for (let i = 0; i < textoNuevo.length; i++) {
        let losCaractares = textoNuevo[i];
        if (losCaractares === "e" && textoNuevo.substring(i, i + 5) === "enter") {
            textoDesencriptado += letraUno;
            i += 4; 
        } else if (losCaractares === "i" && textoNuevo.substring(i, i + 4) === "imes") {
            textoDesencriptado += letraDos;
            i += 3;
        } else if (losCaractares === "a" && textoNuevo.substring(i, i + 2) === "ai") {
            textoDesencriptado += letraTres;
            i += 1;
        } else if (losCaractares === "o" && textoNuevo.substring(i, i + 4) === "ober") {
            textoDesencriptado += letraCuatro;
            i += 3;
        } else if (losCaractares === "u" && textoNuevo.substring(i, i + 4 === "ufat")) {
            textoDesencriptado += letraCinco;
            i += 3; 
        } else {
            textoDesencriptado += losCaractares;
        }
    }

    document.getElementById("resultado").value = textoDesencriptado;
    console.log("QUE SO", textoNuevo);
    console.log("DISTINTO", textoDesencriptado);
}