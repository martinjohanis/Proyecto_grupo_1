const perro1 = [10, 20, 30, 40]
const perro2 = [40, 30, 10, 20]

const respuestaUsuario = [0, 0, 0, 0]

for (let i = 0; i < 3; i++) { // iteramos cada pregunta
  console.log ("ingrese la respuesta a la pregunta",i)
  let respP1
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
console.log (respuestaUsuario)
}