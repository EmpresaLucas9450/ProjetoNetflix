// criando um array de objeto com as imagens e informações do banner
const bannerItens =[
    {
        imagem:"./src/assets/Game1.jpg",
        titulo:"Caçador de bruxas",
        descricao:"Caça bruxas com varinhas",
    },
    {
        imagem:"./src/assets/Game2.jpg",
        titulo:"Comedor de códigos",
        descricao:"Lancha funções com café da tarde",
    },
    {
        imagem:"./src/assets/Game3.jpg",
        titulo:"Coach City - treino para vida",
        descricao:"Com grandes códigos vem projetos.",
    }
];
// declarando as variáveis e elementos com dom(document object model)

const tempo= 5000; //tempo em milissegundos
const elementoBanner= document.querySelector(".banner");
const elementoTitulo= document.querySelector(".banner-titulo");
const elementoDescricao= document.querySelector(".banner-descricao");
let i = 0; //início da contagem das imagens

//criando a função slideshow
//  Criando a função slideShow
function slideShow(){

    // ALTERA A IMAGEM DO FUNDO DO BANNER
    elementoBanner.style.backgroundImage =`url(${bannerItens[i].imagem})`;
    elementoTitulo.textContent =bannerItens[i].titulo;
    elementoDescricao.textContent = bannerItens[i].descricao;

    i++;
    if( i >= bannerItens.length){
        i=0;
    }
    setTimeout(slideShow, tempo);
}

slideShow();
