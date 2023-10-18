const express = require('express');
var app = express();
const port = 3000; // Puerto de la APP Web

// Perros
let perro1 = {
  raza: "Golden Retriever",
  values: [46,-11,24,57,46],
}
let perro2 = {
  raza: "Border Collie",
  values: [17,11,20,11,57],
}
let perro3 = {
  raza: "Weimaraner",
  values: [-16,-50,-6,-11,-9], 
}
let perro4 = {
  raza: "Dachshund",
  values: [-23,-18,12,0,-8], 
}
let perro5 = {
  raza: "Bulldog Francés",
  values: [14,-52,43,-55,33], 
}
let perro6 = {
  raza: "Galgo Ruso",
  values: [-20,42,3,8,13], 
}
let perros = [perro1, perro2, perro3, perro4, perro5, perro6]//valores perros(perro = [indice.values])

const db = require('./../database/db');

let valUser = [0,0,0,0,0]

var http = require('http');
const {answerValues} = require('./respuestas.js');

app.use(express.static(__dirname + "/../public")); // Indica que la carpeta 'public' contiene los archivos estáticos de la aplicación web
app.use(express.json());  // Indica que se usarán datos en formato JSON en las peticiones

// Ruta para obtener el saludo, recibe el nombre en el body de la petición y devuelve el saludo en formato JSON
app.post('/obtenerPerro', (req, res) => { 

  var respuestas = req.body

  console.log("check 1")
  console.log(respuestas)
  
  console.log("check 2")

  /*for(let i = 0; i < valUser.length; i++){
    addValues()
  }*/

  let resultado = calcularDistancia(perros, addValues(respuestas));

  console.log("check 3")

  console.log(valUser)
  
  console.log("check 4")
  
  console.log(resultado)

  const menorDistancia = resultado.subarreglo;
  const perroMenorDistancia = resultado.perro;

  res.json({ resultado: resultado.perro });

  respuestas = 0;
  valUser = [0,0,0,0,0];

   
  db.returnGreetingFromDB()

    .then((greeting) => {
      if (greeting) {
        console.log(greeting);
        res.json({ greeting });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    })

    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });

});

// Inicializa la aplicación web e imprime un mensaje en la consola indicando el puerto de escucha
app.listen(port, () => { 
  console.log(`Server running on http://localhost:${port}`);
});

function addValues(respuestas) {
  for (let i = 0; i < answerValues.length ; i++) {
   for (let j = 0; j < valUser.length ; j++) {
      valUser[j] += answerValues[i][respuestas[i]-1][j];
   }
  }
  return valUser
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
  let perroMenorDistancia = perros[indiceMenorDistancia].raza;
  return { subarreglo: menorDistancia, perro: perroMenorDistancia };
}