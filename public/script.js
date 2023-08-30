const btnradio1 = document.getElementById('btnradio1');
const outputDiv = document.getElementById('output');
//const nameInput = document.getElementById('nameInput');
//const outputDiv = document.getElementById('output');
const respuestasUser = [];

function enviarResp() {
  const form = document.getElementById('myForm');

  console.log(form);
  
  const elements = form.querySelectorAll('input, select, value'); //obtiene todos los elementos del formulario



  elements.forEach(element => {
    if (element.type === 'checkbox' || element.type === 'radio') {
      if (element.checked) {
        respuestasUser.push(element.value);
      }
    } else {
      respuestasUser.push(element.value);
    }
  });

  if (respuestasUser.length !== answerValues.length) {
    alert("Seleccionar una opción en todas las preguntas");
  }

  console.log(respuestasUser);
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

  fetch('/obtenerPerro', {
    method: 'POST',
    body: JSON.stringify({ respuestasUser }),
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

  .then(response => response.json())
  .then(data => {
    outputDiv.textContent = data.resultado;
  .then(res => res.json())
  .then(data => {
    console.log("Tu perro elegido ha sido: "+data.resultado)
    let html =""

    html +="<div id='' style='padding:5ex; border: 1px solid black; width: 100%;'>"
    html+=data.resultado
    html +="</div>"

    document.getElementById("texto1").innerHTML= html
  })

  .catch(error => {
    console.error('Error:', error);
  });
});