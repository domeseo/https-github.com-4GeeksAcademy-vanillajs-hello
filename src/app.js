/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// create variables 

let goalkeeper = [];
let defense = [];
let midfielder = [];
let striker = [];

//start function

function pushInputToArray(ref_goalkeeper, ref_defensa, ref_mediocampista, ref_atacante) {

  const porteroInput = document.getElementById('suputamadre');
  const portero = porteroInput.value;
  porteroInput.value = "";
  const defenderInput = document.getElementById('defensa');
  const defender = defenderInput.value;
  defenderInput.value = "";
  const midinput = document.getElementById('mediocampista');
  const mid = midinput.value;
  midinput.value = "";
  const strikeInput = document.getElementById('atacante');
  const strike = strikeInput.value;
  strikeInput.value = "";


  ref_goalkeeper.push(portero);
  ref_defensa.push(defender);
  ref_mediocampista.push(mid);
  ref_atacante.push(strike);
};

let button = document.getElementById("submit");

button.addEventListener("click", () => {  
  pushInputToArray(goalkeeper, defense, midfielder, striker);
  console.log(goalkeeper, defense, midfielder, striker);

// sustituye los elementos del team

let porta = document.getElementById('resultadogk');
porta.innerText = goalkeeper[goalkeeper.length - 1]; 

let retro = document.getElementById('resultadodf');
retro.innerHTML = defense[defense.length - 1];

let centro = document.getElementById('resultadomd');
centro.innerHTML = midfielder[midfielder.length - 1];

let att = document.getElementById('resultadost');
att.innerHTML = striker[striker.length -1];

});


