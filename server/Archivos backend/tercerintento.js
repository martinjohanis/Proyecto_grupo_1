const prompt = require('prompt-sync')();

const perros = [[3,3,3,3,3],[-2,-2,-2,-2,-2], [0,0,0,0,0]]//valores perros(perro = [indice])

let nombres = ["Golden", "Border Collie", "Weimaraner"];//nombre perros

console.log("quiz")

let valUser = [0,0,0,0,0]

let tempStats = [0,0,0,0,0]

let quizActive = true

let questionState = 0;

let questionText = [
  "Te gusta mas la uno o la dos?",
  "Te gusta mas la uno o la dos?",
  "Te gusta mas la uno o la dos?"
]

let answerValues = [
  [ //preg 1
    [2,0,-1,3,0],   //opcion 1
    [-1,-2,-3,0,0]  //opcion 2
  ],
  [ //preg 2
    [3,0,-3,-2,1],  //opcion 1
    [0,0,1,2,-3]    //opcion 2
  ],
  [ //preg 3
    [1,3,3,0,0],    //opcion 1
    [2,2,0,1,0]     //opcion 2
  ]
]

function main(){
  for(let i = 0; i < questionText.length; i++){
    console.log("asfdasf")
    obtenerResp(i)
    addValues()
    console.log(valUser)
  }
  // calcula la distancia y obtiene el subarreglo con la menor suma de distancias y el perro correspondiente
  const resultado = calcularDistancia(perros, valUser);
  const menorDistancia = resultado.subarreglo;
  const perroMenorDistancia = resultado.perro;
  console.log("El subarreglo con la menor distancia es", menorDistancia);
  console.log("El perro es", perroMenorDistancia);
}


function addValues() {
    
  for (i = 0; i < valUser.length ; i++) {
      valUser[i] += tempStats[i];
  }
}

function obtenerResp(i){
  
  clearTempStats()
    
  const resp = prompt(questionText[i]);

  for (val = 0; val < tempStats.length ; val++) {
    tempStats[val] = answerValues[i][resp-1][val]
  }
  
  if (quizActive){
    questionState++
  }

}

function calcularDistancia(perros, valUser) {  // calcula las distancias entre cada subarreglo y el valUser
  
  let distancias = [];//arreglo que contiene las distancias calculadas

  for (let i = 0; i < perros.length; i++) {
    let sumaDistancia = 0;
    for (let j = 0; j < valUser.length; j++) {
      sumaDistancia += Math.abs(perros[i][j] - valUser[j]); //calculo de distancias
    }
    distancias.push(sumaDistancia);//se agrega el numero del calculo al arreglo "distancias"
  }


  let indiceMenorDistancia = distancias.indexOf(Math.min(...distancias));  
  // encuentra el subarreglo con el numero mas bajo en las sumas de distancias
  let menorDistancia = perros[indiceMenorDistancia];
  let perroMenorDistancia = nombres[indiceMenorDistancia];
  return { subarreglo: menorDistancia, perro: perroMenorDistancia };
}

function clearTempStats() {
    
  tempStats = [0,0,0,0,0];	
}

main()