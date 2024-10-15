// Função para rolar os dados base e dados de estresse
function rolarDados(atributoId, habilidadeId) {
    let atributo = parseInt(document.getElementById(atributoId).value) || 0;
    let habilidade = parseInt(document.getElementById(habilidadeId).value) || 0;
    let estresse = parseInt(document.getElementById('estresse').value) || 0;
    let totalDados = atributo + habilidade;
    let resultadoBase = [];
    let resultadoEstresse = [];

    for (let i = 0; i < totalDados; i++) {
        resultadoBase.push(Math.floor(Math.random() * 6) + 1);
    }

    for (let i = 0; i < estresse; i++) {
        resultadoEstresse.push(Math.floor(Math.random() * 6) + 1);
    }

    mostrarResultado(resultadoBase, resultadoEstresse);
}

// Função para rolar os dados do atributo
function rolarAtributo(atributoId) {
    let atributo = parseInt(document.getElementById(atributoId).value) || 0;
    let estresse = parseInt(document.getElementById('estresse').value) || 0;
    let resultadoBase = [];
    let resultadoEstresse = [];

    for (let i = 0; i < atributo; i++) {
        resultadoBase.push(Math.floor(Math.random() * 6) + 1);
    }

    for (let i = 0; i < estresse; i++) {
        resultadoEstresse.push(Math.floor(Math.random() * 6) + 1);
    }

    mostrarResultado(resultadoBase, resultadoEstresse);
}

// Função para rolar os dados da armadura
function rolarArmadura() {
    let armadura = parseInt(document.getElementById('armadura').value) || 0;
    let resultadoBase = [];

    for (let i = 0; i < armadura; i++) {
        resultadoBase.push(Math.floor(Math.random() * 6) + 1);
    }

    mostrarResultado(resultadoBase, []);
}

//Função para trocar de background ao clicar
document.querySelectorAll('.bg-option').forEach(option => {
    option.addEventListener('click', () => {
        document.body.style.backgroundImage = `url(${option.getAttribute('data-bg')})`;
    });
});


// Função para exibir os resultados em um modal
function mostrarResultado(resultadoBase, resultadoEstresse) {
    let baseContainer = document.getElementById('resultadoBase');
    let estresseContainer = document.getElementById('resultadoEstresse');

    baseContainer.innerHTML = '';
    estresseContainer.innerHTML = '';

    resultadoBase.forEach(dado => {
        let div = document.createElement('div');
        div.classList.add('resultado-base');
        if (dado === 6) {
            div.classList.add('critico');
        }
        div.innerText = dado;
        baseContainer.appendChild(div);
    });

    resultadoEstresse.forEach(dado => {
        let div = document.createElement('div');
        if (dado === 1) {
            div.classList.add('critico');
            div.classList.add('estresse-critico');
        } else if (dado === 6) {
            div.classList.add('critico');
        } else {
            div.classList.add('resultado-estresse');
        }
        div.innerText = dado;
        estresseContainer.appendChild(div);
    });

    let modal = document.getElementById("resultadoModal");
    modal.style.display = "block";
}


// Função para fechar o modal
function fecharModal() {
    let modal = document.getElementById("resultadoModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("resultadoModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Função para salvar os dados no local storage
function salvarDados() {
    let dados = {
        nome: document.getElementById('nome').value,
        carreira: document.getElementById('carreira').value,
        camarada: document.getElementById('camarada').value,
        rival: document.getElementById('rival').value,
        estresse: document.getElementById('estresse').value,
        vitalidade: document.getElementById('vitalidade').value,
        forca: document.getElementById('forca').value,
        combate: document.getElementById('combate').value,
        operar_maquinas: document.getElementById('operar_maquinas').value,
        resistencia: document.getElementById('resistencia').value,
        agilidade: document.getElementById('agilidade').value,
        pontaria: document.getElementById('pontaria').value,
        mobilidade: document.getElementById('mobilidade').value,
        pilotagem: document.getElementById('pilotagem').value,
        perspicacia: document.getElementById('perspicacia').value,
        observacao: document.getElementById('observacao').value,
        sobrevivencia: document.getElementById('sobrevivencia').value,
        tecnologia: document.getElementById('tecnologia').value,
        empatia: document.getElementById('empatia').value,
        comando: document.getElementById('comando').value,
        ajuda_medica: document.getElementById('ajuda_medica').value,
        manipulacao: document.getElementById('manipulacao').value,
        armadura: document.getElementById('armadura').value
    };
    localStorage.setItem('fichaRPG', JSON.stringify(dados));
}

// Função para carregar os dados do local storage
function carregarDados() {
    let dados = JSON.parse(localStorage.getItem('fichaRPG'));
    if (dados) {
        document.getElementById('nome').value = dados.nome;
        document.getElementById('carreira').value = dados.carreira;
        document.getElementById('camarada').value = dados.camarada;
        document.getElementById('rival').value = dados.rival;
        document.getElementById('estresse').value = dados.estresse;
        document.getElementById('vitalidade').value = dados.vitalidade;
        document.getElementById('forca').value = dados.forca;
        document.getElementById('combate').value = dados.combate;
        document.getElementById('operar_maquinas').value = dados.operar_maquinas;
        document.getElementById('resistencia').value = dados.resistencia;
        document.getElementById('agilidade').value = dados.agilidade;
        document.getElementById('pontaria').value = dados.pontaria;
        document.getElementById('mobilidade').value = dados.mobilidade;
        document.getElementById('pilotagem').value = dados.pilotagem;
        document.getElementById('perspicacia').value = dados.perspicacia;
        document.getElementById('observacao').value = dados.observacao;
        document.getElementById('sobrevivencia').value = dados.sobrevivencia;
        document.getElementById('tecnologia').value = dados.tecnologia;
        document.getElementById('empatia').value = dados.empatia;
        document.getElementById('comando').value = dados.comando;
        document.getElementById('ajuda_medica').value = dados.ajuda_medica;
        document.getElementById('manipulacao').value = dados.manipulacao;
        document.getElementById('armadura').value = dados.armadura;
    }
}

// Adiciona eventos de clique para rolar dados ao clicar nos nomes
document.addEventListener('DOMContentLoaded', (event) => {
    carregarDados();

    document.getElementById('forca').previousElementSibling.addEventListener('click', () => rolarAtributo('forca'));
    document.getElementById('combate').previousElementSibling.addEventListener('click', () => rolarDados('forca', 'combate'));
    document.getElementById('operar_maquinas').previousElementSibling.addEventListener('click', () => rolarDados('forca', 'operar_maquinas'));
    document.getElementById('resistencia').previousElementSibling.addEventListener('click', () => rolarDados('forca', 'resistencia'));

    document.getElementById('agilidade').previousElementSibling.addEventListener('click', () => rolarAtributo('agilidade'));
    document.getElementById('pontaria').previousElementSibling.addEventListener('click', () => rolarDados('agilidade', 'pontaria'));
    document.getElementById('mobilidade').previousElementSibling.addEventListener('click', () => rolarDados('agilidade', 'mobilidade'));
    document.getElementById('pilotagem').previousElementSibling.addEventListener('click', () => rolarDados('agilidade', 'pilotagem'));

    document.getElementById('perspicacia').previousElementSibling.addEventListener('click', () => rolarAtributo('perspicacia'));
    document.getElementById('observacao').previousElementSibling.addEventListener('click', () => rolarDados('perspicacia', 'observacao'));
    document.getElementById('sobrevivencia').previousElementSibling.addEventListener('click', () => rolarDados('perspicacia', 'sobrevivencia'));
    document.getElementById('tecnologia').previousElementSibling.addEventListener('click', () => rolarDados('perspicacia', 'tecnologia'));

    document.getElementById('empatia').previousElementSibling.addEventListener('click', () => rolarAtributo('empatia'));
    document.getElementById('comando').previousElementSibling.addEventListener('click', () => rolarDados('empatia', 'comando'));
    document.getElementById('ajuda_medica').previousElementSibling.addEventListener('click', () => rolarDados('empatia', 'ajuda_medica'));
    document.getElementById('manipulacao').previousElementSibling.addEventListener('click', () => rolarDados('empatia', 'manipulacao'));

    document.getElementById('armadura').previousElementSibling.addEventListener('click', () => rolarArmadura());

    // Salvar dados ao mudar valores dos inputs
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', salvarDados);
    });
});


//Alterar Background