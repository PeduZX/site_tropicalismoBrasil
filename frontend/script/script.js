const botao = document.getElementById("btn-play");
const iReniciar = document.getElementById('botao-reniciar')
const icone = botao.querySelector("i");
const musica = new Audio("/frontend/media/vidssave.com Pra Não Dizer Que Não Falei das Flores 128KBPS.mp3");

botao.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    icone.className = "ri-pause-circle-fill";
  } else {
    musica.pause();
    icone.className = "ri-play-circle-fill";
  }
});

iReniciar.addEventListener('click', () => {
musica.currentTime = 0;
musica.play();
})

const cardVandre = document.getElementById("card-vandre");
cardVandre.addEventListener('click', () => {
  cardVandre.classList.toggle('no-canto');
})