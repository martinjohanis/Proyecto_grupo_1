const btnradio1 = document.getElementById('btnradio1');
const outputDiv = document.getElementById('output');
//const nameInput = document.getElementById('nameInput');
//const outputDiv = document.getElementById('output');


function click_boton_comenzar()
{
      //alert("hola kai como estas?")
      document.getElementById("texto1").innerHTML=""
      document.getElementById("texto1").innerHTML=`  <div id="botonesop1">
     <div class="btn-group1" role="group" aria-label="Basic radio toggle button group">
      <h4> Te gusta mas la 1 o la 2?</h4>
      
      
      <input type="radio" class="btn-check1" name="btnradio1" id="btnradio1" value= 1 autocomplete="off" checked>
      <label class="btn btn-outline-primary1" for="btnradio1">opcion 1</label>
   
      <input type="radio" class="btn-check1" name="btnradio1" id="btnradio2" value= 2 autocomplete="off">
      <label class="btn btn-outline-primary1" for="btnradio1">opcion 2</label>
    </div>
    </div>
  
  
    <div id="botonesop2">
     <div class="btn-group2" role="group" aria-label="Basic radio toggle button group">
      <h4> Te gusta mas la 1 o la 2?</h4>
      
      
      <input type="radio" class="btn-check2" name="btnradio2" id="btnradio3" value= 1 autocomplete="off" checked>
      <label class="btn btn-outline-primary2" for="btnradio2">opcion 1</label>
   
      <input type="radio" class="btn-check2" name="btnradio2" id="btnradio4" value= 2 autocomplete="off">
      <label class="btn btn-outline-primary2" for="btnradio2">opcion 2</label>
    </div>
    </div>
  
  
    <div id="botonesop3">
     <div class="btn-group3" role="group" aria-label="Basic radio toggle button group">
      <h4> Te gusta mas la 1 o la 2?</h4>
      
      
      <input type="radio" class="btn-check3" name="btnradio3" id="btnradio5" value=1 autocomplete="off" checked>
      <label class="btn btn-outline-primary3" for="btnradio3">opcion 1</label>
   
      <input type="radio" class="btn-check3" name="btnradio3" id="btnradio6" value=2 autocomplete="off">
      <label class="btn btn-outline-primary3" for="btnradio3">opcion 2</label>
    </div>
    </div>
  
    <button type="button" id="submitBtn" onclick="obtenerResp()" class="btn btn-outline-secondary"><h4>Descubre tu resultado!</h4></button>
  `
  }

  function obtenerResp() {
    var respuestas = [];
    const elements = document.querySelectorAll('input[type="radio"]:checked'); //obtiene todos los elementos del formulario
  
    elements.forEach(element => {
      if (element.type === 'checkbox' || element.type === 'radio') {
        if (element.checked) {
          respuestas.push(element.value);
        }
      } else {
        respuestas.push(element.value);
      }
    });
  
    if (respuestas.length !== 3) {
      alert("Seleccionar una opción en todas las preguntas");
    }
  
    console.log(respuestas);
    return respuestas
  }
  

// Agrega un listener al botón de submit para que cuando se haga click se envíe el nombre ingresado al servidor
submitBtn.addEventListener('click', () => {
  //const name = nameInput.value; // Obtiene el nombre ingresado en el input
  
  obtenerResp()

  console.log("Enviar")
  console.log(respuestas)

  fetch('/obtenerPerro', {
    method: 'POST',
    body: JSON.stringify({ respuestas }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    outputDiv.textContent = data.resultado;
  })

  .catch(error => {
    console.error('Error:', error);
  });
});