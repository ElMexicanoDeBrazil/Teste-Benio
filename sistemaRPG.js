const aliensBloqueados = [
    { nome: "Chama", vida: 120, ataque: 25, defesa: 20, velocidade: 15},
    { nome: "Besta", vida: 110, ataque: 20, defesa: 20, velocidade: 20},
    { nome: "Diamante", vida: 500, ataque: 25, defesa: 75, velocidade: 5},
    { nome: "XLR8", vida: 50, ataque: 10, defesa: 10, velocidade: 100},
    { nome: "Massa Cinzenta", vida: 10, ataque: 5, defesa: 5, velocidade: 25},
    { nome: "Quatro Braços", vida: 250, ataque: 50, defesa: 20, velocidade: 10},
    { nome: "Insectoide", vida: 75, ataque: 10, defesa: 10, velocidade: 25},
    { nome: "Aquático", vida: 120, ataque: 15, defesa: 15, velocidade: 10},
    { nome: "Ultra T", vida: 110, ataque: 15, defesa: 10, velocidade: 20},
    { nome: "Fantasmático", vida: 175, ataque: 20, defesa: 15, velocidade: 20},
    { nome: "Bala de Canhão", vida: 275, ataque: 30, defesa: 30, velocidade: 50},
    { nome: "Cipó Selvagem", vida: 150, ataque: 20, defesa: 15, velocidade: 20},
    { nome: "Blitzwolfer", vida: 190, ataque: 25, defesa: 25, velocidade: 25},
    { nome: "Múmia", vida: 90, ataque: 18, defesa: 10, velocidade: 15},
    { nome: "Frankenstrike", vida: 260, ataque: 25, defesa: 25, velocidade: 5},
    { nome: "Glutão", vida: 100, ataque: 20, defesa: 10, velocidade: 15},
    { nome: "Idem", vida: 75, ataque: 10, defesa: 10, velocidade: 20},
    { nome: "Mega Olhos", vida: 130, ataque: 20, defesa: 15, velocidade: 15},
    { nome: "Gigante", vida: 1000, ataque: 100, defesa: 100, velocidade: 5},
    { nome: "Iguana Ártica", vida: 140, ataque: 20, defesa: 25, velocidade: 15},
    { nome: "Buzzshock", vida: 90, ataque: 20, defesa: 10, velocidade: 30},
    { nome: "Cuspidor", vida: 75, ataque: 15, defesa: 10, velocidade: 10},
    { nome: "Feedback", vida: 150, ataque: 25, defesa: 25, velocidade: 25}
]

let aliensDesbloqueados = [];

for (i = 0; i < 5; i++){
    let a = Math.round(Math.random() * aliensBloqueados.length);
    aliensDesbloqueados.push(aliensBloqueados[a]);
    aliensBloqueados.splice(a, 1);
}

for (let i = 0; i < 5; i++){
    console.log(aliensDesbloqueados[i]);
}

let s;

function iniciaBatalha() {
    s = parseInt(document.getElementById("s").value);
    let alien = aliensDesbloqueados[s];

    document.getElementById("nome").textContent = alien.nome;
    document.getElementById("vida").textContent = alien.vida;
    document.getElementById("ataque").textContent = alien.ataque;
    document.getElementById("defesa").textContent = alien.defesa;
    document.getElementById("velocidade").textContent = alien.velocidade;
}

function dano() {
    let vidaAtual = parseInt(document.getElementById("vida").textContent);
    let dano = 20;
    if (vidaAtual > 0) {
        let novaVida = vidaAtual - dano;
        document.getElementById("vida").innerText = novaVida;
    } else {
        document.getElementById("vida").textContent = "morreu";
    }
}