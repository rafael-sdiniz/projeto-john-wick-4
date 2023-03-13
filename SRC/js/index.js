/*
Objetivo 1 - abrir a modal com o vídeo do treailer quando o usuário clicar no botão de veja o trailer
    - passo 1:pegar o elemento que representa o botão na tela usando o js
    - passo 2: identificar quando o usuário clicar no botão
    - passo 3: pegar o elemento da modal no js
    - passo 4: abrir a modal na tela

Objetivo 2 - fechar o modal quando o usuário clicar no X
    - passo 1:pegar o elemento de fechar a modal usando o js
    - passo 2: identificar quando o usuário clicar no X
    - passo 4: fechar a modal
*/

const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById("video");
const modal = document.querySelector('.modal');
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector('.fechar-modal');

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
})
