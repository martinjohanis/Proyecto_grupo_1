const btnradio1 = document.getElementById('btnradio1');
const outputDiv = document.getElementById('output');
const submitBtn = document.getElementById('submitBtn');
//const nameInput = document.getElementById('nameInput');

let pregunta =[]

pregunta.push({
  id:0, "pregunta": "a"
})

pregunta.push({
  id:1, "pregunta": "b"
})

pregunta.push({
  id:2, "pregunta": "c"
})

pregunta.push({
  id:3, "pregunta": "d"
})

for (let q of pregunta){
  "<div>${q.pregunta}</div>"
}

  function obtenerResp() {
    var respuestas = [];
    const elements = document.querySelectorAll('input[type="radio"]:checked'); //obtiene todos los elementos del formulario
  
    elements.forEach(elements => {
        if (elements.checked) {
          respuestas.push(elements.value);
        }
    });
  
    return respuestas
  }
  
/*startBtn.addEventListener('click', () => {
  click_boton_comenzar()
  });*/


// Agrega un listener al botón de submit para que cuando se haga click se envíe el nombre ingresado al servidor
submitBtn.addEventListener('click', () => {
  //const name = nameInput.value; // Obtiene el nombre ingresado en el input
  let respuestas = obtenerResp()

  console.log("Enviar")
  console.log(respuestas)

  fetch('/obtenerPerro', {
    method: 'POST',
    body: JSON.stringify( respuestas ),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log("Tu perro elegido ha sido: "+data.resultado)
    let html =""
    html+="<div class='menu_respuesta'>"
    html +="<div id='Resultado-perruno'>"
    html+="Tu perro es "
    html+=data.resultado
    html +="</div>"
    
    html+=`<img src ="imagenes/` + data.resultado + `.jpg" class="Imgs-perros">`;
    html+= `<button type="button" class="btn btn-outline-success Botones_Resultado"  onclick="window.location.href = 'info_perros/` + data.resultado + `.html';">Mas informacion</button>`;

    html+="</div>"
    


    document.getElementById("texto1").innerHTML= html
  })

  .catch(error => {
    console.error('Error:', error);
  });
});