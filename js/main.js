//alert("Bem Vindo Vamos Jogar?");

var jogadorEscolha = 0;
var jogadorPontos = 0;
var computadorEscolha = 0;
var computadorPontos = 0;
var resultado = -1;
var escolhasAnteriores = [];

function jogar(escolha) {

    //Escolha do jogador
    jogadorEscolha = escolha;

    // Lógica do computador
    if (escolhasAnteriores.length > 0) {

        var escolhaAnterior = escolhasAnteriores[escolhasAnteriores.length - 1];

        if (escolhaAnterior == 1) {
            computadorEscolha = 2;
        } else if (escolhaAnterior == 2) {
            computadorEscolha = 3;
        } else if (escolhaAnterior == 3) {
            computadorEscolha = 1;
        }

    } else {
        computadorEscolha = Math.floor((Math.random() * 3) + 1);
    }

    escolhasAnteriores.push(jogadorEscolha);

    //Verifica Quem Ganhou
    if ((jogadorEscolha == 1) && (computadorEscolha == 1)) {
        resultado = 0;

    } else if ((jogadorEscolha == 1) && (computadorEscolha == 2)) {
        resultado = 2;

    } else if ((jogadorEscolha == 1) && (computadorEscolha == 3)) {
        resultado = 1;

    } else if ((jogadorEscolha == 2) && (computadorEscolha == 1)) {
        resultado = 1;

    } else if ((jogadorEscolha == 2) && (computadorEscolha == 2)) {
        resultado = 0;

    } else if ((jogadorEscolha == 2) && (computadorEscolha == 3)) {
        resultado = 2;

    } else if ((jogadorEscolha == 3) && (computadorEscolha == 1)) {
        resultado = 2;

    } else if ((jogadorEscolha == 3) && (computadorEscolha == 2)) {
        resultado = 1;

    } else if ((jogadorEscolha == 3) && (computadorEscolha == 3)) {
        resultado = 0;
    }

    // Limpa a seleção de todas as opções do jogador
    document.querySelectorAll('#jogador-escolha a').forEach(function(opcao) {
        opcao.classList.remove('selecionado');
    });

    // Limpa a seleção de todas as opções do computador
    document.querySelectorAll('#computador-escolha a').forEach(function(opcao) {
        opcao.classList.remove('selecionado');
    });

    // Mantém a classe 'selecionado' apenas para a escolha do jogador e do computador
    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');

    // Informa quem Ganhou
    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.innerHTML = ''; // Limpa o conteúdo anterior
    mensagemElement.classList.remove('text-white', 'text-primary', 'text-danger'); // Remove todas as classes de cor

    if (resultado == 0) {
        mensagemElement.innerHTML = 'Empatou!';
        mensagemElement.classList.add('text-white');

    } else if (resultado == 1) {
        mensagemElement.innerHTML = 'Você Ganhou!';
        mensagemElement.classList.add('text-primary');
        jogadorPontos++;
    } else if (resultado == 2) {
        mensagemElement.innerHTML = 'Computador Ganhou!';
        mensagemElement.classList.add('text-danger');
        computadorPontos++;
    }


    //Adiciona os Pontos ao Placar
    document.getElementById("jogador-pontos").innerHTML = jogadorPontos;
    document.getElementById("computador-pontos").innerHTML = computadorPontos;

}

// Obtenha o elemento do ano
var elementoAno = document.getElementById("ano");

// Obtenha o ano atual
var anoAtual = new Date().getFullYear();

// Atualize o conteúdo do elemento com o ano atual
elementoAno.innerHTML = "Desenvolvido por Matews Gomes &copy; " + anoAtual;
