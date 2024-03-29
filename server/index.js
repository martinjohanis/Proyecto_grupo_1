const express = require('express');
var app = express();
const port = 3000; // Puerto de la APP Web
const prompt = require('prompt-sync')();

// Perros
let perro1 = {
  raza: "Golden Retriever",
  values: [3,3,3,3,3],
}
let perro2 = {
  raza: "Border Collie",
  values: [-2,-2,-2,-2,-2],
}
let perro3 = {
  raza: "Weimaraner",
  values: [0,0,0,0,0], 
}
let perros = [perro1, perro2, perro3]//valores perros(perro = [indice.values])

let valUser = [0,0,0,0,0]

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


app.use(express.static(__dirname + "/../public")); // Indica que la carpeta 'public' contiene los archivos estáticos de la aplicación web
app.use(express.json());  // Indica que se usarán datos en formato JSON en las peticiones

// Ruta para obtener el saludo, recibe el nombre en el body de la petición y devuelve el saludo en formato JSON
app.post('/obtenerPerro', (req, res) => { 

  const respuestas = req.body

  guardarRespuestas()
  
  console.log(respuestas)
  
  console.log("tumamam")



  /*for(let i = 0; i < valUser.length; i++){
    addValues()
  }*/

  const resultado = calcularDistancia(perros, valUser);
  const menorDistancia = resultado.subarreglo;
  const perroMenorDistancia = resultado.perro;

  res.json({ resultado: resultado.perro });

});

// Inicializa la aplicación web e imprime un mensaje en la consola indicando el puerto de escucha
app.listen(port, () => { 
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/',function(req,res){
  res.set({
      'perroResp': '*'
      });
  return res.redirect('index.html');
  })

  
function guardarRespuestas() {

  const respuestasUser = document.querySelectorAll('input[type="radio"]:checked');

  if (respuestasUser.length === answerValues.length) {
    respuestasUser.forEach((respuestas, index) => {
      respuestas.push(answerValues[index][respuestas.value]);
    });

    console.log(respuestas); // respuestas seleccionadas por el usuario

  } else {
    alert("Debes seleccionar una opción para cada pregunta.");
  }
}

function addValues() {
  for (let i = 0; i < answerValues.length ; i++) {
   for (let j = 0; j < valUser.length ; j++) {
       valUser[j] += answerValues[i][opcionesArr[i]-1][j];
   }
  }
}

function calcularDistancia(perros, valUser) {  // calcula las distancias entre cada subarreglo y el valUser
  
  let distancias = [];//arreglo que contiene las distancias calculadas

  for (let i = 0; i < perros.length; i++) {
    let sumaDistancia = 0;
    for (let j = 0; j < valUser.length; j++) {
      sumaDistancia += Math.abs(perros[i].values[j] - valUser[j]); //calculo de distancias
    }
    distancias.push(sumaDistancia);//se agrega el numero del calculo al arreglo "distancias"
  }


  let indiceMenorDistancia = distancias.indexOf(Math.min(...distancias));  
  // encuentra el subarreglo con el numero mas bajo en las sumas de distancias
  let menorDistancia = perros[indiceMenorDistancia].values;
  let perroMenorDistancia = nombres[indiceMenorDistancia].raza;
  return { subarreglo: menorDistancia, perro: perroMenorDistancia };
}