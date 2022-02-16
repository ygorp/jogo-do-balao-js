// 1 Criar o balao
// 2 Estourar o balao
// 3 Carregar o jogo

function criarBalao() {

  var balao = document.createElement("div");
  var balao2 = document.createElement("div");
  balao.setAttribute("class", "balao");
  balao2.setAttribute("class", "balao2");

  var x = Math.floor(Math.random() * 600); //gera numero aleatórios
  var y = Math.floor(Math.random() * 400);

  balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
  balao2.setAttribute("style", "left:"+y+"px;top:"+x+"px;");
  //<div class="balao" style="lef:30px; top:60px"></div>

  balao.setAttribute("onclick", "estourar(this)");
  balao2.setAttribute("onclick", "estourar(this)");


  document.body.appendChild(balao);
  document.body.appendChild(balao2);

}

function estourar(objeto) {
  document.body.removeChild(objeto);
}

function carregarJogo() {
  setInterval(criarBalao, 1200);
}