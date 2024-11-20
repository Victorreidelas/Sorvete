const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Seja bem vindo. Qual atendente você escolhe ?",
        alternativas: [
            {
                texto: "João",
                afirmacao: "Foi feito pelo atendente João, "
            },
            {
                texto: "Julia",
                afirmacao: "Foi feito pela atendente Julia,"
            }
        ]
    },
    {
        enunciado: "No seu primeiro sabor, qual sabor você vai escolher?. Morango ou Chocolate",
        alternativas: [
            {
                texto: "Morango",
                afirmacao: "com os sabores de morango"
            },
            {
                texto: "Chocolate",
                afirmacao: "com os sabores de chocolate"
            }
        ]
    },
    {
        enunciado: "No seu segundo sabor, qual sabor você vai escolher? Flocos ou Menta?",
        alternativas: [
            {
                texto: "Flocos",
                afirmacao: "e flocos,"
            },
            {
                texto: "Menta",
                afirmacao: "e menta,"
            }
        ]
    },
    {
        enunciado: "Qual calda você vai querer. Caramelo ou Leite condensado ?",
        alternativas: [
            {
                texto: "Caramelo",
                afirmacao: "com uma calda de caramelo"
            },
            {
                texto: "Leite condensado",
                afirmacao: "com uma calda de leite condensado"
            }
        ]
    },
{
        enunciado: "Vai querer granulado de chocolate ou colorido ?",
        alternativas: [
            {
                texto: "Chocolate",
                afirmacao: ""
            },
            {
                texto: "Colorido",
                afirmacao: "e com granulado colorido."
            }
        ]
    },  
    {
        enunciado: "Você gostou do atendimento? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Que bom que você gostou do nosso atendimento, volte sempre. Obrigado pela sua preferência."
            },
            {
                texto: "Não",
                afirmacao: "Que pena que não gostou do nosso atendimento, espero que na próxima você goste. Obrigado pela sua preferência. "
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
    caixaPerguntas.textContent = "O seu sorvete...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
