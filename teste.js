$(window).scroll(function () {
  if ($(document).scrollTop() > 510) {
    //ponto de mudança - 210 pixeis
    $(".oi").css({
      position: "fixed", //fixo a partir deste ponto
      top: "100px",
      left: "28px",
    });
  } else {
    $(".oi").css({ position: "static" }); //se voltou a cima põe estatico
  }
});
