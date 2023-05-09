let controle = document.querySelectorAll('[data-controle]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach(el => {
    el.addEventListener('click', ev => {
       manipularDados(ev.target.dataset.controle, ev.target.parentNode); 
    });
});

function manipularDados(operacao, controle){
    let peca = controle.querySelector('[data-contador]');
    if(operacao === 'subtrair'){
        peca.value = parseInt(peca.value) - 1; 
    }else if(operacao === 'somar'){
        peca.value = parseInt(peca.value) + 1; 
    }
}