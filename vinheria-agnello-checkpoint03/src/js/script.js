// Array de objetos com os vinhos da vinharia
var vinhos = [
    {
        nome: "Cabernet Sauvignon",
        tipo: "tinto",
        safra: 2020,
        estoque: 10
    },
    {
        nome: "Chardonnay",
        tipo: "branco",
        safra: 2022,
        estoque: 3
    },
    {
        nome: "Rosé Agnello",
        tipo: "rosé",
        safra: 2023,
        estoque: 4
    }
];

// Cria um objeto e adiciona um novo vinho ao array
function adicionarVinho(nome, tipo, safra, estoque) {
    var novoVinho = {
        nome: nome,
        tipo: tipo,
        safra: safra,
        estoque: estoque
    };

    vinhos.push(novoVinho);
}

// Exibe os dados de um vinho no console
function exibirVinho(vinho) {
    console.log(
        "Nome: " + vinho.nome +
        " | Tipo: " + vinho.tipo +
        " | Safra: " + vinho.safra +
        " | Estoque: " + vinho.estoque
    );
}

// forEach para listar todos os vinhos
function listarVinhos() {
    console.log("LISTA COMPLETA DE VINHOS");

    vinhos.forEach(function(vinho) {
        exibirVinho(vinho);
    });
}

// Seleciona com filter os vinhos com menos de 5 garrafas
function mostrarEstoqueBaixo() {
    var vinhosEstoqueBaixo = vinhos.filter(function(vinho) {
        return vinho.estoque < 5;
    });

    console.log("VINHOS COM ESTOQUE ABAIXO DE 5");

    if (vinhosEstoqueBaixo.length == 0) {
        console.log("Nenhum vinho com estoque baixo.");
    } else {
        vinhosEstoqueBaixo.forEach(function(vinho) {
            exibirVinho(vinho);
        });
    }
}

// Soma os estoques com reduce, começando a soma em zero
function calcularEstoqueTotal() {
    var total = vinhos.reduce(function(soma, vinho) {
        return soma + vinho.estoque;
    }, 0);

    return total;
}

// Cria com map um array com os nomes em caixa alta
function exibirNomesMaiusculos() {
    var nomesMaiusculos = vinhos.map(function(vinho) {
        return vinho.nome.toUpperCase();
    });

    console.log("NOMES DOS VINHOS EM CAIXA ALTA");

    nomesMaiusculos.forEach(function(nome) {
        console.log(nome);
    });
}

// Adiciona um vinho por código, sem usar prompt ou formulário
adicionarVinho("Merlot", "tinto", 2021, 5);

// Executa as funções e apresenta os resultados finais
listarVinhos();
mostrarEstoqueBaixo();
console.log("ESTOQUE TOTAL DA VINHERIA: " + calcularEstoqueTotal() + " garrafas");
exibirNomesMaiusculos();
