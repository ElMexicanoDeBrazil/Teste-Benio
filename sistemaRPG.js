const miticos = [
    { nome: "Gigante", vida: 1000, ataque: 100, defesa: 100, velocidade: 5, raridade: "Mítico"},
]

const lendarios = [
    { nome: "XLR8", vida: 50, ataque: 10, defesa: 10, velocidade: 100, raridade: "Lendário"},
    { nome: "Bala de Canhão", vida: 275, ataque: 30, defesa: 30, velocidade: 50, raridade: "Lendário"},
    { nome: "Diamante", vida: 500, ataque: 25, defesa: 75, velocidade: 5, raridade: "Lendário"},
    { nome: "Feedback", vida: 150, ataque: 25, defesa: 25, velocidade: 25, raridade: "Lendário"}
]

const epicos = [
    { nome: "Frankenstrike", vida: 260, ataque: 25, defesa: 25, velocidade: 5, raridade: "Épico"},
    { nome: "Mega Olhos", vida: 130, ataque: 20, defesa: 15, velocidade: 15, raridade: "Épico"},
    { nome: "Fantasmático", vida: 175, ataque: 20, defesa: 15, velocidade: 20, raridade: "Épico"},
    { nome: "Ultra T", vida: 110, ataque: 15, defesa: 10, velocidade: 20, raridade: "Épico"}
]

const raros = [
    { nome: "Idem", vida: 75, ataque: 10, defesa: 10, velocidade: 20, raridade: "Raro"},
    { nome: "Glutão", vida: 100, ataque: 20, defesa: 10, velocidade: 15, raridade: "Raro"},
    { nome: "Blitzwolfer", vida: 190, ataque: 25, defesa: 25, velocidade: 25, raridade: "Raro"},
    { nome: "Iguana Ártica", vida: 110, ataque: 20, defesa: 20, velocidade: 15, raridade: "Raro"},
    { nome: "Chama", vida: 120, ataque: 25, defesa: 20, velocidade: 15, raridade: "Raro"},
    { nome: "Cipó Selvagem", vida: 150, ataque: 20, defesa: 15, velocidade: 20, raridade: "Raro"},
    { nome: "Quatro Braços", vida: 250, ataque: 50, defesa: 20, velocidade: 10, raridade: "Raro"}
]

const comuns = [
    { nome: "Besta", vida: 110, ataque: 20, defesa: 20, velocidade: 20, raridade: "Comum"},
    { nome: "Buzzshock", vida: 90, ataque: 20, defesa: 10, velocidade: 30, raridade: "Comum"},
    { nome: "Múmia", vida: 90, ataque: 20, defesa: 10, velocidade: 15, raridade: "Comum"},
    { nome: "Massa Cinzenta", vida: 10, ataque: 5, defesa: 5, velocidade: 25, raridade: "Comum"},
    { nome: "Insectoide", vida: 75, ataque: 10, defesa: 10, velocidade: 25, raridade: "Comum"},
    { nome: "Aquático", vida: 120, ataque: 15, defesa: 15, velocidade: 10, raridade: "Comum"},
    { nome: "Cuspidor", vida: 75, ataque: 15, defesa: 10, velocidade: 10, raridade: "Comum"}
]

let aliensDesbloqueados = [];

for (let i = 0; i < 5; i++) {
    let a = Math.floor(Math.random() * 200);
    let index;

    if (a >= 0 && a <= 99 && comuns.length > 0) {
        index = Math.floor(Math.random() * comuns.length);
        aliensDesbloqueados.push(comuns[index]);
        comuns.splice(index, 1);
    } 
    else if (a >= 100 && a <= 159 && raros.length > 0) {
        index = Math.floor(Math.random() * raros.length);
        aliensDesbloqueados.push(raros[index]);
        raros.splice(index, 1);
    } 
    else if (a >= 160 && a <= 184 && epicos.length > 0) {
        index = Math.floor(Math.random() * epicos.length);
        aliensDesbloqueados.push(epicos[index]);
        epicos.splice(index, 1);
    } 
    else if (a >= 185 && a <= 194 && lendarios.length > 0) {
        index = Math.floor(Math.random() * lendarios.length);
        aliensDesbloqueados.push(lendarios[index]);
        lendarios.splice(index, 1);
    } 
    else if (a >= 195 && a <= 199 && miticos.length > 0) {
        index = Math.floor(Math.random() * miticos.length);
        aliensDesbloqueados.push(miticos[index]);
        miticos.splice(index, 1);
    } 
    else {
        i--;
    }
}

let s;

function iniciaBatalha() {
    s = parseInt(document.getElementById("s").value);
    let alien = aliensDesbloqueados[s];

    document.getElementById("nome").textContent = alien.nome;
    if (alien.vida > 0){
    document.getElementById("vida").textContent = alien.vida;
    } else {
        document.getElementById("vida").textContent = "morto";
    }
    document.getElementById("ataque").textContent = alien.ataque;
    document.getElementById("defesa").textContent = alien.defesa;
    document.getElementById("velocidade").textContent = alien.velocidade;
    document.getElementById("raridade").textContent = alien.raridade;
}

function dano() {
    let alien = aliensDesbloqueados[s];
    let dano = 20;
    alien.vida -= dano;
    if (alien.vida <= 0) {
        document.getElementById("vida").textContent = "morreu";
    } else {
        document.getElementById("vida").textContent = alien.vida;
    }
}

function exibirAliensRecebidos() {
    const lista = document.getElementById("aliensRecebidos");
    lista.innerHTML = "";

    aliensDesbloqueados.forEach((alien, index) => {
        const item = document.createElement("li");
        item.textContent = `${alien.nome} - Vida: ${alien.vida} - Ataque: ${alien.ataque} - Defesa: ${alien.defesa} - Velocidade: ${alien.velocidade} Raridade: ${alien.raridade}`;
        lista.appendChild(item);
    });
}
exibirAliensRecebidos();
