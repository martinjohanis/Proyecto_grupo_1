const perro1 = [10, 20, 30, 40] 
const perro2 = [40, 30, 10, 20] //valores de arreglo de cada perro

const respuestaUsuario = [0, 0, 0, 0] //arreglo respuesta al que le sumamos valores para despues comparar

for (let i = 0; i < 2; i++) { // iteramos cada pregunta
  console.log ("ingrese la respuesta a la pregunta",i+1)
  let respP1
  if (i ==0) {
  respP1 = prompt("Te consideras una persona atletica? Ingresa 1 para sì y 2 para no")
  if (respP1 == 1) {
    respuestaUsuario[0] = (respuestaUsuario[0] +10) 
    respuestaUsuario[1] = (respuestaUsuario[1] +20)
    respuestaUsuario[2] = (respuestaUsuario[2] +30)
    respuestaUsuario[3] = (respuestaUsuario[3] +40) 
  } else if (respP1 == 2){
    respuestaUsuario[0] = (respuestaUsuario[0] +40) 
    respuestaUsuario[1] = (respuestaUsuario[1] +30)
    respuestaUsuario[2] = (respuestaUsuario[2] +20)
    respuestaUsuario[3] = (respuestaUsuario[3] +10) 
  }
  }else if (i==1){
    
    let respP2 = prompt("Te gusta jugar? Ingresa 1 para si y 2 para no")
      if (respP2 == 1) {
    respuestaUsuario[0] = (respuestaUsuario[0] +20) 
    respuestaUsuario[1] = (respuestaUsuario[1] +10)
    respuestaUsuario[2] = (respuestaUsuario[2] +20)
    respuestaUsuario[3] = (respuestaUsuario[3] +30) 
  } else if (respP2 == 2){
      respuestaUsuario[0] = (respuestaUsuario[0] -10) 
    respuestaUsuario[1] = (respuestaUsuario[1] +10)
    respuestaUsuario[2] = (respuestaUsuario[2] +20)
    respuestaUsuario[3] = (respuestaUsuario[3] -20) 
  }
  }
}
console.log (respuestaUsuario)
  
const arregloComparacion = [0, 0, 0, 0]
  
  if (respuestaUsuario[0]>=(perro1[0]+perro2[0])/2){
    arregloComparacion[0] = 2
  } else arregloComparacion[0] = 1
  if (respuestaUsuario[1]>=(perro1[1]+perro2[1])/2){
    arregloComparacion[1] = 2
  } else arregloComparacion[1] = 1
  if (respuestaUsuario[2]>=(perro1[2]+perro2[2])/2){
    arregloComparacion[2] = 1
  } else arregloComparacion[2] = 2
  if (respuestaUsuario[3]>=(perro1[3]+perro2[3])/2){
    arregloComparacion[3] = 1
  } else arregloComparacion[3] = 2

let contadorUnos = 0
let contadorDos = 0
for (i=0; i<arregloComparacion.length; i++){
  if (arregloComparacion[i] = 1){
    contadorUnos++
  } else contadorDos++
}

if (contadorUnos > contadorDos){
  console.log ("sos el perro 1")
} else console.log ("sos el perro 2")

if (contadorUnos == contadorDos && arregloComparacion[0] == 1){
  console.log ("sos el perro 1")
} else if (contadorUnos == contadorDos && arregloComparacion[0] == 2){
  console.log ("sos el perro 2")
} 
