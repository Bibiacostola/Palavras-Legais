let palavra

function setup () {
  createCanvas(400, 400);
  
  palavra  = palavraAleatoria () 
}

function palavraAleatoria () {
  let palavras = ["fitoplancton", "zooplancton", "ramela", "pitanga", "baissexchuol", "olivia", "purpurina", "urina"]
  return palavra = random(palavras);
} 

function inicio () {
  background ("blue")
  fill("white")
  textSize (70);
  textAlign(CENTER, CENTER);
}

function palavraParcial (minimo, maximo){
  
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  return parcial;
}

function draw() {
  inicio ()
  
  let parcial = palavraParcial (0, width)
  
  
  }