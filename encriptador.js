const inputtexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const btnCopiar = document.getElementById("copiar1")


function btnencriptar(){
    const textoencriptado = encriptar(inputtexto.value);
    mensaje.value = textoencriptado;
    mensaje.style.backgroundImage = "none"
    inputtexto.value = "" 
    const puño = new Audio("audios\\street-fighter-big-punch.mp3")
    puño.play()
    puño.volume = 0.01
}

function encriptar(stringencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringencriptada = stringencriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringencriptada.includes(matrizCodigo[i][0])) {
            stringencriptada = stringencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringencriptada;
}

function btnDesencriptar() {
    const textoaDesencriptar = desencriptar(inputtexto.value);
    mensaje.value = textoaDesencriptar;
    inputtexto.value = ""
    mensaje.style.backgroundImage = "none"
    const puño = new Audio("audios\\street-fighter-big-punch.mp3")
    puño.play()
    puño.volume = 0.01
}

function desencriptar(stringencriptada){
    let matrizCodig = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]
    stringencriptada = stringencriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodig.length; i++) {
        if(stringencriptada.includes(matrizCodig[i][0])) {
            stringencriptada = stringencriptada.replaceAll(matrizCodig[i][0], matrizCodig[i][1])
        }
    }
    return stringencriptada;
}



btnCopiar.addEventListener("click", function(e) {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    mensaje.style.backgroundImage = ""
    const audioCopiado = new Audio("audios\\street-fighter-coin.mp3")
    audioCopiado.play()
    audioCopiado.volume = 0.01
    alert("se copio")
})
// proximamente hacer que cuando le de click a la imagen del header reprodusca musica y antes de eso avisar con un alert al usuario si quiere hacer eso