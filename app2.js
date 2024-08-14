let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
console.log(listaNumerosSorteados);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  /* console.log(typeof numeroDeUsuario);
  console.log(numeroSecreto);
  console.log(typeof numeroSecreto);
  console.log(numeroDeUsuario);
  console.log(numeroDeUsuario === numeroSecreto);*/
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos}${intentos === 1 ? "vez " : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "ya se sortearon todos los números posibles");
  } else {
    //si el numero generado esta incluido enla lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero Secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalo de nuemros
  //generar el numero aleatorio
  //Iniacializar el numero de intentos
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
