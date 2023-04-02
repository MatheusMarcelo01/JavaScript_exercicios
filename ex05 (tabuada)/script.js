function run() {
  var tab = document.getElementById('tab');
  var num = Number(document.getElementById('num').value);
  var texto=document.getElementById("text")

  texto.innerHTML=`Aqui esta a tabuada do número: ${num}:`

  if (num < 0) {
    window.alert('[ERRO] Digite um número positivo');
    return; // sai da função se houver um erro
  }

  for (var i = 1; i <= 10; i++) {
    var resultado = num * i;
    var linha = num + " x " + i + " =" + resultado;
    tab.innerHTML += linha + "<br>";
  }

  
}