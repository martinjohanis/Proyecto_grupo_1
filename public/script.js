const btnradio1 = document.getElementById('btnradio1');
const outputDiv = document.getElementById('output');
//const nameInput = document.getElementById('nameInput');
//const outputDiv = document.getElementById('output');
const respuestasUser = [];

function enviarResp() {
  const form = document.getElementById('myForm');

  console.log(form);
  
  const elements = form.querySelectorAll('input, select'); //obtiene todos los elementos del formulario



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


function click_boton_comenzar()
{
      //alert("hola kai como estas?")
      document.getElementById("texto1").innerHTML=""
      document.getElementById("texto1").innerHTML=`  <div id="botonesop1">
     <div class="btn-group1" role="group" aria-label="Basic radio toggle button group">
      <h4> Te gusta mas la 1 o la 2?</h4>
      
      
      <input type="radio" class="btn-check1" name="btnradio1" id="btnradio1" autocomplete="off" checked>
      <label class="btn btn-outline-primary1" for="btnradio1">opcion 1</label>
   
      <input type="radio" class="btn-check1" name="btnradio1" id="btnradio2" autocomplete="off">
      <label class="btn btn-outline-primary1" for="btnradio1">opcion 2</label>
    </div>
    </div>
  
  
    <div id="botonesop2">
     <div class="btn-group2" role="group" aria-label="Basic radio toggle button group">
      <h4> Te gusta mas la 1 o la 2?</h4>
      
      
      <input type="radio" class="btn-check2" name="btnradio2" id="btnradio3" autocomplete="off" checked>
      <label class="btn btn-outline-primary2" for="btnradio2">opcion 1</label>
   
      <input type="radio" class="btn-check2" name="btnradio2" id="btnradio4" autocomplete="off">
      <label class="btn btn-outline-primary2" for="btnradio2">opcion 2</label>
    </div>
    </div>
  
  
    <div id="botonesop3">
     <div class="btn-group3" role="group" aria-label="Basic radio toggle button group">
      <h4> Te gusta mas la 1 o la 2?</h4>
      
      
      <input type="radio" class="btn-check3" name="btnradio3" id="btnradio5" autocomplete="off" checked>
      <label class="btn btn-outline-primary3" for="btnradio3">opcion 1</label>
   
      <input type="radio" class="btn-check3" name="btnradio3" id="btnradio6" autocomplete="off">
      <label class="btn btn-outline-primary3" for="btnradio3">opcion 2</label>
    </div>
    </div>
  
    <button type="button" id="submitBtn" onclick="click_boton_finalizar()" class="btn btn-outline-secondary"><h4>Descubre tu resultado!</h4></button>
  `
  }

  
  function click_boton_finalizar()
  {
      alert("hola kai como estas?")
      document.getElementById("submitBtn").innerHTML= enviarResp()
  }


// Agrega un listener al botón de submit para que cuando se haga click se envíe el nombre ingresado al servidor
submitBtn.addEventListener('click', () => {
  //const name = nameInput.value; // Obtiene el nombre ingresado en el input

  fetch('/obtenerPerro', {
    method: 'POST',
    body: JSON.stringify({ respuestasUser }),
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