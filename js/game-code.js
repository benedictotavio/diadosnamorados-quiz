let perguntasFeitas = [];

const perguntas = [

    // Pergunta 1
    {
        pergunta: "Qual desses empregos eu nunca trabalhei?",
        respostas: ["Transportador", "Garçom", "Programador", "Barman"],
        correta: "resp3",
        imagem: "./_imgs/1-Barman.png",
        texto:"Barman é o profissional do ramo da coquetelaria, que trabalha em estabelecimentos comerciais servindo coquetéis (misturados com bebidas alcoólicas ou não) aos clientes, mais frequentemente em bares."
    },
    // Pergunta 2
    {
        pergunta: "O que comemos no nosso primeiro encontro?",
        respostas: ["Pizza", "Massas", "Hamburger", "Japonês"],
        correta: "resp2",
        imagem: "./_imgs/2-Hamburguer.png",
        texto:"Um hambúrguer é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída, geralmente carne bovina - colocados dentro de um pão fatiado ou pão"
    },
    // Pergunta 3
    {
        pergunta: "Que dia e mês demos o nosso primeiro beijo?",
        respostas: ["04 de Fevereiro", "03 de Janeiro", "04 de Janeiro", "03 de Fevereiro"],
        correta: "resp1",
        imagem: "./_imgs/3-Beijo.png",
        texto:"ato ou efeito de tocar, pressionando, os lábios sobre pessoa, animal ou objeto querido ou com valor simbólico, ger. para demonstrar carinho, afeto etc."
    },
    // Pergunta 4
    {
        pergunta: "Qual o primeiro presente que te dei?",
        respostas: ["Saia de Brilho", "Jantar", "Chocolate", "Tenis"],
        correta: "resp2",
        imagem: "./_imgs/4-Chocolate.png",
        texto:"O chocolate é um alimento feito com base na amêndoa fermentada e torrada do cacau. Sua origem remonta às civilizações pré-colombianas da América Central. A partir dos Descobrimentos, foi levado para a Europa, onde se popularizou, especialmente a partir dos séculos XVII e XVIII."
    },
    // Pergunta 5
    {
        pergunta: "Qual o meu filme favorito?",
        respostas: ["Tropa de Elite", "O Lutador", "Jobs", "A Rede Social"],
        correta: "resp3",
        imagem: "./_imgs/5-Rede-Social.png",
        texto:"Em uma noite de outono em 2003, o estudante de Harvard e gênio da computação Mark Zuckerberg se senta em seu computador e começa a trabalhar em um novo conceito que acaba se transformando em uma rede social global."
    },
    // Pergunta 6
    {
        pergunta: "Qual foi o meu primeiro carro?",
        respostas: ["Celta", "Duster", "Strada", "Corsa"],
        correta: "resp0",
        imagem: "./_imgs/6-Celta.png",
        texto:"O Celta Chegou ao fim sua produção em abril de 2015, somando aproximadamente 1,5 milhão de unidades vendidas."
    },
    // Pergunta 7
    {
        pergunta: "Qual meu maior medo?",
        respostas: ["Aranha", "Escuro", "Altura", "Gato"],
        correta: "resp2",
        imagem: "./_imgs/7-Altura.png",
        texto:"A fobia de altura pode não ter só fundo emocional: um novo estudo sugere que as pessoas com esse medo, chamado acrofobia, também têm alterações no equilíbrio postural."
    },
    // Pergunta 8
    {
        pergunta: "Qual o meu maior idolo?",
        respostas: ["Mark Zuckenberg", "Michael Jackson", "Neymar Jr", "Steve Jobs"],
        correta: "resp3",
        imagem: "./_imgs/8-Jobs.png",
        texto:"Steven Paul Jobs foi um inventor, empresário e magnata americano no setor da informática. Notabilizou-se como co-fundador, presidente e diretor executivo da Apple Inc. e por revolucionar seis indústrias: computadores pessoais, filmes de animação, música, telefones, tablets e publicações digitais."
    },
    // Pergunta 9
    {
        pergunta: "Que dia e mês nós nos conhecemos?",
        respostas: ["18 de Dezembro", "20 de Dezembro", "19 de Dezembro", "17 de Dezembro"],
        correta: "resp0",
        imagem: "./_imgs/9-Arena.png",
        texto:"A ARENA está de volta, e agora, pra comemorar o grande RETORNO das festas, e claro, DA MELHOR ARENA DO BRASIL! "
    },
    // Pergunta 10
    {
        pergunta: "Qual meu jogo de PC favorito?",
        respostas: ["League of Legends", "CS:GO", "Tibia", "Dota"],
        correta: "resp2",
        imagem: "./_imgs/10-Tibia.png",
        texto:"Tibia é um jogo eletrônico de RPG multijogador gratuito, desenvolvido pela CipSoft. Criado em 1997, é um dos jogos mais antigos do gênero."
    },
    // Pergunta 11
    {
        pergunta: "",
        respostas: ["League of Legends", "CS:GO", "Tibia", "Dota"],
        correta: "resp2",
        imagem: "./_imgs/10-Tibia.png",
        texto:"hidxqs sshdc iuhwschhisiwsdhgciuh idgciwdhg digwugdcwuh ivefjipjveufi"
    }
]

var qtdPergunta = perguntas.length - 1;

function gerarPergunta(maxPerguntas) {
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
            return gerarPergunta(maxPerguntas)
        } else {
            $('main').addClass('hidden');
            $('#status h2#game-over').remove();
            $('#status').removeClass('hidden');
            $('#game-over').html('Parabéns! Você venceu!');
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
    let imgCerta = `<img src="${perguntas[indX].imagem}" alt="Imagem Barman resposta 1">`
    let textoCerto = perguntas[indX].texto

    //Qual a resposta que o usuario selecionou
    $('.resp').each(function () {
        if ($(this).hasClass('selecionada')) {
            let respEscolhida = $(this).attr('id');

            //Resultado da seleção

            // Correta
            if (respCorreta == respEscolhida) {
                console.log('Certa Resposta!!!')
                $('#' + respEscolhida).addClass('correta');
                $('div#imgCorreta').prepend(imgCerta)
                $('div#imgCorreta').removeClass('hidden')
                $('div#textoCorreta').removeClass('hidden')
                $('div#textoCorreta').prepend(`<p>${textoCerto}<p>`)
                $('#quizContainer').addClass('hidden')
                $('#proxPergunta').removeClass('hidden');
                resetaBotoes()

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
    $('main').removeClass('hidden');
    $('div#status').addClass('hidden');
    $('div#confirmar').removeClass('hidden')
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
    nextQuestion(qtdPergunta)
}
function nextQuestion(numPerguntas) {
    $('#confirm-next-question').click(function (e) {
        e.preventDefault();
        console.log(perguntasFeitas.length, qtdPergunta + 1)
        gerarPergunta(numPerguntas)
        $('#quizContainer').removeClass('hidden')
        $('#imgCorreta').addClass('hidden')
        $("#imgCorreta img:last-child").remove()
        $("#textoCorreta p").remove()
        $('#textoCorreta').addClass('hidden');
        $('#proxPergunta').addClass('hidden')
    });
}
function gameOver() {
    $('#status').removeClass('hidden');
    $('main').addClass('hidden');
    $('button#confirmar').removeClass('hidden');
}
$('#confirm-new-game').click(function () {
    newGame();
});

$(document).ready(function () {
    gerarPergunta(qtdPergunta)
});

