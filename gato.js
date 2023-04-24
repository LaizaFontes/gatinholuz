let interrup = document.getElementById('interruptor');
interrup.addEventListener('click', interruptor);

let cliques = 0;
let estadoLamp = false;
let ligada = document.getElementById('ligada');
let desligada = document.getElementById('apagada');

function interruptor() {
  document.body.classList.toggle('muda-tema');
}
