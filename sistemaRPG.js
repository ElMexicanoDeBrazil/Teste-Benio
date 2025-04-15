const OSmiticos = [
    { nome: "Gigante", vida: 1000, ataque: 100, defesa: 100, velocidade: 5, raridade: "Mítico"},
]

const OSlendarios = [
    { nome: "XLR8", vida: 50, ataque: 10, defesa: 10, velocidade: 100, raridade: "Lendário"},
    { nome: "Bala de Canhão", vida: 275, ataque: 30, defesa: 30, velocidade: 50, raridade: "Lendário"},
    { nome: "Diamante", vida: 500, ataque: 25, defesa: 75, velocidade: 5, raridade: "Lendário"},
    { nome: "Feedback", vida: 150, ataque: 25, defesa: 25, velocidade: 25, raridade: "Lendário"}
]

const OSepicos = [
    { nome: "Frankenstrike", vida: 260, ataque: 25, defesa: 25, velocidade: 5, raridade: "Épico"},
    { nome: "Mega Olhos", vida: 130, ataque: 20, defesa: 15, velocidade: 15, raridade: "Épico"},
    { nome: "Fantasmático", vida: 175, ataque: 20, defesa: 15, velocidade: 20, raridade: "Épico"},
    { nome: "Ultra T", vida: 110, ataque: 15, defesa: 10, velocidade: 20, raridade: "Épico"}
]

const OSraros = [
    { nome: "Idem", vida: 75, ataque: 10, defesa: 10, velocidade: 20, raridade: "Raro"},
    { nome: "Glutão", vida: 100, ataque: 20, defesa: 10, velocidade: 15, raridade: "Raro"},
    { nome: "Blitzwolfer", vida: 190, ataque: 25, defesa: 25, velocidade: 25, raridade: "Raro"},
    { nome: "Iguana Ártica", vida: 110, ataque: 20, defesa: 20, velocidade: 15, raridade: "Raro"},
    { nome: "Chama", vida: 120, ataque: 25, defesa: 20, velocidade: 15, raridade: "Raro"},
    { nome: "Cipó Selvagem", vida: 150, ataque: 20, defesa: 15, velocidade: 20, raridade: "Raro"},
    { nome: "Quatro Braços", vida: 250, ataque: 50, defesa: 20, velocidade: 10, raridade: "Raro"}
]

const OScomuns = [
    { nome: "Besta", vida: 110, ataque: 20, defesa: 20, velocidade: 20, raridade: "Comum"},
    { nome: "Buzzshock", vida: 90, ataque: 20, defesa: 10, velocidade: 30, raridade: "Comum"},
    { nome: "Múmia", vida: 90, ataque: 20, defesa: 10, velocidade: 15, raridade: "Comum"},
    { nome: "Massa Cinzenta", vida: 10, ataque: 5, defesa: 5, velocidade: 25, raridade: "Comum"},
    { nome: "Insectoide", vida: 75, ataque: 10, defesa: 10, velocidade: 25, raridade: "Comum"},
    { nome: "Aquático", vida: 120, ataque: 15, defesa: 15, velocidade: 10, raridade: "Comum"},
    { nome: "Cuspidor", vida: 75, ataque: 15, defesa: 10, velocidade: 10, raridade: "Comum"}
]

const AFmiticos = [
    { nome: "Alien X", vida: 5000, ataque: 5000, defesa: 5000, velocidade: 5000, raridade: "Mítico"}
]

const AFlendarios = [
    { nome: "Fogo Fátuo", vida: 100, ataque: 30, defesa: 50, velocidade: 10, raridade: "Lendário"},
    { nome: "Eco Eco", vida: 80, ataque: 50, defesa: 10, velocidade: 15, raridade: "Lendário"},
    { nome: "Cromático", vida: 125, ataque: 15, defesa: 50, velocidade: 10, raridade: "Lendário"},
    { nome: "Rath", vida: 150, ataque: 25, defesa: 25, velocidade: 25, raridade: "Lendário"}
]

const AFepicos = [
    { nome: "Friagem", vida: 100, ataque: 25, defesa: 15, velocidade: 30, raridade: "Épico"},
    { nome: "Enormossauro", vida: 350, ataque: 75, defesa: 25, velocidade: 5, raridade: "Épico"},
    { nome: "Arraia a Jato", vida: 50, ataque: 10, defesa: 5, velocidade: 130, raridade: "Épico"}
]

const AFraros = [
    { nome: "Artrópode", vida: 75, ataque: 25, defesa: 40, velocidade: 15, raridade: "Raro"},
    { nome: "Nanomech", vida: 5, ataque: 5, defesa: 5, velocidade: 75, raridade: "Raro"},
    { nome: "Gosma", vida: 10, ataque: 10, defesa: 200, velocidade: 50, raridade: "Raro"}
]

const AFcomuns = [
    { nome: "Macaco Aranha", vida: 75, ataque: 15, defesa: 10, velocidade: 25, raridade: "Comum"},
    { nome: "Estrela Polar", vida: 50, ataque: 25, defesa: 10, velocidade: 10, raridade: "Comum"}
]

let aliensDesbloqueados = [];

for (let i = 0; i < 5; i++) {
    let a = Math.floor(Math.random() * 1000);
    let index;

    if (a >= 0 && a <= 599 && OScomuns.length > 0) {
        index = Math.floor(Math.random() * OScomuns.length);
        aliensDesbloqueados.push(OScomuns[index]);
        OScomuns.splice(index, 1);
    } 
    else if (a >= 600 && a <= 799 && OSraros.length > 0) {
        index = Math.floor(Math.random() * OSraros.length);
        aliensDesbloqueados.push(OSraros[index]);
        OSraros.splice(index, 1);
    } 
    else if (a >= 800 && a <= 899 && OSepicos.length > 0) {
        index = Math.floor(Math.random() * OSepicos.length);
        aliensDesbloqueados.push(OSepicos[index]);
        OSepicos.splice(index, 1);
    } 
    else if (a >= 900 && a <= 989 && OSlendarios.length > 0) {
        index = Math.floor(Math.random() * OSlendarios.length);
        aliensDesbloqueados.push(OSlendarios[index]);
        OSlendarios.splice(index, 1);
    } 
    else if (a >= 990 && a <= 999 && OSmiticos.length > 0) {
        index = Math.floor(Math.random() * OSmiticos.length);
        aliensDesbloqueados.push(OSmiticos[index]);
        OSmiticos.splice(index, 1);
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
