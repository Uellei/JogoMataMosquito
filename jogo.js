//Achando dimensões do browser
var altura = 0
var largura = 0 
var vidas = 1
var tempo = 40

var CriaMosquitoTempo = 700

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'Normal') {

    CriaMosquitoTempo = 1500
} else if(nivel === 'Dificil') {

    CriaMosquitoTempo = 1000
} else if(nivel === 'Nem a pau') {

    CriaMosquitoTempo = 750
}

function ajustarTamanhoTelaJogo () {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustarTamanhoTelaJogo()

var cronometro = setInterval(function(){

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(CriaMosquito)
        window.location.href = 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }
    tempo -= 1
}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'

        } else {document.getElementById('v' + vidas).src= 'imagens/coracao_vazio.png'

        vidas++
    }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Criar o elemento HTML 
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = TamanhoAleatorio() + ' ' + LadoAleatorio( )
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }


    document.body.appendChild(mosquito)
}


function TamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) 

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
       
    }
}

function LadoAleatorio() {
    var classe = Math.floor(Math.random() * 2) 

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
       
    }
}

var CriaMosquito = setInterval(function(){
    posicaoRandomica()
}, CriaMosquitoTempo)
