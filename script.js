const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é jogador de Lol (League of Legends)? e por acaso gosta de jogar?",
        alternativas: [
            {
                texto: "Sim, eu gosto!",
                afirmacao: "Dizia enquanto demonstrava um rosto de orgulhoso."
            },
            {
                texto: "Sim, mas não gosto muito de jogar sozinho, apenas com meus amigos",
                afirmacao: "Tinha uma opinião neutra e não aparentava gostar de jogar sozinho."
            }
        ]
    },
    {
        enunciado: "O que você pensa a respeito do que as pessoas falam sobre o jogo?",
        alternativas: [
            {
                texto: "Acho que deveriam experimentar o jogo, antes de falar mal dele!",
                afirmacao: "Falava enquanto aparentava estar meio ofendido a respeito da pergunta."
            },
            {
                texto: "Não me importo muito, gosto do jogo mas sou neutro a respeito das polêmicas que tem nele.",
                afirmacao: "Sua voz não demonstrava nenhuma surpresa com a pergunta, e não se importa com as polêmicas."
            }
        ]
    },
    {
        enunciado: "Sobre o jogo em si, acha que tem algum lado ruim nele?",
        alternativas: [
            {
                texto: "Não! ele é perfeito e não tem nenhum defeito que seja visivel!",
                afirmacao: "Dizia com firmeza, não demonstrando nenhum Erro no jogo."
            },
            {
                texto: "Sim, a empresa Riot acaba fazendo muitos erros nele, deixando menos divertido de se jogar.",
                afirmacao: "Ele era capaz de falar defeitos sobre a produtora do jogo, demonstrando que não o defendia muito."
            }
        ]
    },
    {
        enunciado: "A respeito dos jogadores, em sua opinião, deveriam melhorar em alguma atitude especifica?",
        alternativas: [
            {
                texto: "Deveriam aprender a jogar melhor, e também a ler as mensagens de conselhos de seus companheiros",
                afirmacao: "Claramente estava se referindo a ele mesmo na parte de conselhos."
            },
            {
                texto: "Sim! muitos acabam sendo tóxicos, felizmente não tem microfone dentro dele, caso contrário seria pior.",
                afirmacao: "Demonstra já ter sofrido com tóxidade durante a jogatina."
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
