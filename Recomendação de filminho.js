let campoIdade;
let campoFantasia;
let campoAção;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de Ação?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);

}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAção) {
  if (idade >= 10) {
    if (idade >= 16) {
      return "Deadpool";
    } else {
      if (idade >= 14) {
        if(gostaDeFantasia || gostaDeAção) {
          return "Scott Pilgrim";          
        } else{
         return "o menino e a garça";
        }
      } else {
        if (gostaDeFantasia) {
          return "o menino e a garça";
        } else {
          return "velozes e furiosos 3";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "bob esponja o filme";
    }
  }
}
