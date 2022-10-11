function tocaSom (Id_Audio) {
    const elemento = document.querySelector(Id_Audio);

    if (elemento && elemento.localName === 'audio'){
            elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string 
    const idAudio = `#som_${instrumento}`; 

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    // onkeydown -> quando a tecla estiver abaixada 
    tecla.onkeydown = function (event) {
        
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa'); 
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa'); 
    } 
}
