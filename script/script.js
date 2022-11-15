window.onload = voltar, verificaPosicao;
window.onscroll = verificaPosicao;

const botao = document.getElementById("back-to-top");
const contato = document.getElementById("contato");
const btnMobile = document.getElementById('btnMobile');


function voltar(){
    botao.onclick = apertou;
    contato.onclick = apertou2;
    btnMobile.onclick = toggleMenu;
}
    
function apertou(){
    window.scrollTo(0, 0);
}

function apertou2(){
    window.scrollTo(0, document.body.scrollHeight);
}

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
   
}

function verificaPosicao(){
    if(window.pageYOffset == 0){
        botao.classList.add("hide");
    }

    else{
        botao.classList.remove("hide");
    }   
}
