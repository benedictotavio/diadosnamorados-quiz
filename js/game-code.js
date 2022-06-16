let perguntasFeitas = [];

const perguntas = [

    // Pergunta 1
    {
        pergunta: "Qual desses empregos eu nunca trabalhei?",
        respostas: ["Transportador", "Garçom", "Programador", "Barman"],
        correta: "resp3",
        imagem: "./_imgs/1-Barman.png"
    },
    // Pergunta 2
    {
        pergunta: "O que comemos no nosso primeiro encontro?",
        respostas: ["Pizza", "Massas", "Hamburger", "Japonês"],
        correta: "resp2",
        imagem: "./_imgs/2-Hamburguer.png"
    },
    // Pergunta 3
    {
        pergunta: "Que dia e mês demos o nosso primeiro beijo?",
        respostas: ["04 de Fevereiro", "03 de Janeiro", "04 de Janeiro", "03 de Fevereiro"],
        correta: "resp1",
        imagem: "./_imgs/3-Beijo.png"
    },
    // Pergunta 4
    {
        pergunta: "Qual o primeiro presente que te dei?",
        respostas: ["Saia de Brilho", "Jantar", "Chocolate", "Tenis"],
        correta: "resp2",
        imagem: "./_imgs/4-Chocolate.png"
    },
    // Pergunta 5
    {
        pergunta: "Qual o meu filme favorito?",
        respostas: ["Tropa de Elite", "O Lutador", "Jobs", "A Rede Social"],
        correta: "resp3",
        imagem: "./_imgs/5-Rede-Social.png"
    },
    // Pergunta 6
    {
        pergunta: "Qual foi o meu primeiro carro?",
        respostas: ["Celta", "Duster", "Strada", "Corsa"],
        correta: "resp0",
        imagem: "./_imgs/6-Celta.png"
    },
    // Pergunta 7
    {
        pergunta: "Qual meu maior medo?",
        respostas: ["Aranha", "Escuro", "Altura", "Gato"],
        correta: "resp2",
        imagem: "./_imgs/7-Altura.png"
    },
    // Pergunta 8
    {
        pergunta: "Qual o meu maior idolo?",
        respostas: ["Mark Zuckenberg", "Michael Jackson", "Neymar Jr", "Steve Jobs"],
        correta: "resp3",
        imagem: "./_imgs/8-Jobs.png"
    },
    // Pergunta 9
    {
        pergunta: "Que dia e mês nós nos conhecemos?",
        respostas: ["18 de Dezembro", "20 de Dezembro", "19 de Dezembro", "17 de Dezembro"],
        correta: "resp0",
        imagem: "./_imgs/9-Arena.png"
    },
    // Pergunta 10
    {
        pergunta: "Qual meu jogo de PC favorito?",
        respostas: ["League of Legends", "CS:GO", "Tibia", "Dota"],
        correta: "resp2",
        imagem: "./_imgs/10-Tibia.png"
    },
    // Pergunta 11
    {
        pergunta: "",
        respostas: ["League of Legends", "CS:GO", "Tibia", "Dota"],
        correta: "resp2",
        imagem: "./_imgs/10-Tibia.png"
    }
]

var qtdPergunta = perguntas.length - 1;

gerarPergunta = function (maxPerguntas) {
    // Numero Aleatório
    let numAleatorio = Number(Math.random() * maxPerguntas).toFixed()

    if (!perguntasFeitas.includes(numAleatorio)) {

        //Colocar como pergunta feita
        perguntasFeitas.push(numAleatorio)

        //preencher html com os dados da questão    
        var p_sele = perguntas[numAleatorio].pergunta

        //alimentar pergunta vinda do sorteio
        $('#pergunta').html(p_sele);
        $('#pergunta').attr('data-index', numAleatorio);


        for (let i = 0; i < perguntas[numAleatorio].respostas.length; i++) {
            $('#resp' + i).html(perguntas[numAleatorio].respostas[i]);
        }

        $('#pergunta').html(p_sele);

        //Embaralhar Respostas
        let container = $('#respostas');
        var options = container.children();

        for (let i = 0; i < options.length; i++) {
            container.append(options.eq(Math.floor(Math.random() * options.length)));
        }

    } else { //Se a perguntab ja foi feita!!!
        console.log('pergunta ja foi feita!!')
        if (perguntasFeitas.length < qtdPergunta + 1) {
            return gerarPergunta(maxPerguntas);
        } else {
            $('#status').removeClass('hidden');
            $('#game-over').html('Parabéns! Você venceu!');
            $('#quiz').addClass('hidden');
        }
    }
}

$(".resp").click(function () {
    if ($('#quiz').attr('data-status') !== 'travado') {
        //Percorrer Respostas e Desmarcar a Classe
        $(".resp").each(function () {
            if ($(this).hasClass('selecionada')) {
                $(this).removeClass('selecionada');
            }
        });

        // Adicionar Classe Selecionada
        $(this).addClass('selecionada');
    }

});

$('#confirmar').click(function (e) {
    e.preventDefault();

    //Pegar indice da pergunta
    let indX = $('#pergunta').attr('data-index');

    //Qual a resposta certa
    let respCorreta = perguntas[indX].correta;

    //Qual a resposta que o usuario selecionou
    $('.resp').each(function () {
        if ($(this).hasClass('selecionada')) {
            let respEscolhida = $(this).attr('id');

            //Resultado da seleção

            // Correta
            if (respCorreta == respEscolhida) {
                console.log('Certa Resposta!!!')
                $('#' + respEscolhida).addClass('correta')
                $('body').css('background-image', 'green');
                resetaBotoes();

                // Errada    
            } else {
                console.log('Errrrrrrooouuuu')
                $('#quiz').attr('data-status', 'travado');
                $('#' + respCorreta).addClass('correta');
                $('#' + respEscolhida).removeClass('selecionada');
                $('#' + respEscolhida).addClass('errada');
                $('#confirmar').addClass('hidden');
                setTimeout(function () {
                    gameOver()
                }, 3500)
            }
        }
    });
});

function newGame() {
    $('#quiz').attr('data-status', 'ok')
    perguntasFeitas = [];
    resetaBotoes();
    gerarPergunta(qtdPergunta);
    $('#quiz').removeClass('hidden');
    $('#status').addClass('hidden');
    $('#confirmar').removeClass('hidden')
}

function resetaBotoes() {
    $(".resp").each(function () {
        if ($(this).hasClass('selecionada')) {
            $(this).removeClass('selecionada');
        }
        if ($(this).hasClass('correta')) {
            $(this).removeClass('correta');
        }
        if ($(this).hasClass('errada')) {
            $(this).removeClass('errada');
        }
    });
    gerarPergunta(qtdPergunta);
}

function gameOver() {
    console.log('funciona');
    $('#status').removeClass('hidden');
    $('#quiz').addClass('hidden')
}

$('#confirm-new-game').click(function (e) {

    newGame();
});

gerarPergunta(qtdPergunta)