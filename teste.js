// $(window).scroll(function () {
//   if ($(document).scrollTop() > 510) {
//     //ponto de mudança - 210 pixeis
//     $(".oi").css({
//       position: "fixed", //fixo a partir deste ponto
//       top: "100px",
//       left: "28px",
//     });
//   } else {
//     $(".oi").css({ position: "static" }); //se voltou a cima põe estatico
//   }
// });

const imagem = document.getElementById("imagem_produto");
imagem.src = "img/quina.png";
const video = "Teste";
switch (video) {
  case "Serum":
    imagem.src = "img/quina.png";
    break;
  case "Outro":
    imagem.src = "img/poster.png";
    break;
  case "Teste":
    imagem.src = "img/RE3.png";
    break;
  case "Nada":
    imagem.src = "img/simbolo.png";
    break;
  default:
    imagem.src = "img/slider.png";
}
