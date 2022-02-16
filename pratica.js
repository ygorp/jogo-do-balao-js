// 1 Criar o balao
// 2 Estourar o balao
// 3 Carregar o jogo

function criarBalao() {

  var balao = document.createElement("div");
  balao.setAttribute("class", "balao");

  var x = Math.floor(Math.random() * 600); //gera numero aleatórios
  var y = Math.floor(Math.random() * 400);

  balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
  //<div class="balao" style="lef:30px; top:60px"></div>

  balao.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(balao);

}