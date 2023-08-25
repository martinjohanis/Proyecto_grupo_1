const btnradio1 = document.getElementById('btnradio1');
const outputDiv = document.getElementById('output');
const submitBtn = document.getElementById('submitBtn');
//const nameInput = document.getElementById('nameInput');


/*function click_boton_comenzar()
{
  
      //alert("hola kai como estas?")
      document.getElementById("texto1").innerHTML=`  
      
      <h3>Descubre que perro eres! </h3>
      <div id="botonesop1">
     <div class="btn-group1" role="group" aria-label="Basic radio toggle button group">
      <h4> Ejercicio </h4>
      
      
      <input type="radio" class="btn-check1" name="btnradio1" id="btnradio1" value= 1 autocomplete="off" checked>
      <label class="btn btn-outline-primary1" for="btnradio1"> Tranquilo </label>
   
      <input type="radio" class="btn-check1" name="btnradio1" id="btnradio2" value= 2 autocomplete="off">
      <label class="btn btn-outline-primary1" for="btnradio1"> Regular </label>

      
      <input type="radio" class="btn-check1" name="btnradio1" id="btnradio3" value= 3 autocomplete="off">
      <label class="btn btn-outline-primary1" for="btnradio1"> Energetico </label>
    </div>
    </div>
  
  
    <div id="botonesop2">
     <div class="btn-group2" role="group" aria-label="Basic radio toggle button group">
      <h4> Hablas mucho?</h4>
      
      
      <input type="radio" class="btn-check2" name="btnradio2" id="btnradio4" value= 1 autocomplete="off" checked>
      <label class="btn btn-outline-primary2" for="btnradio2"> Callado </label>
   
      <input type="radio" class="btn-check2" name="btnradio2" id="btnradio5" value= 2 autocomplete="off">
      <label class="btn btn-outline-primary2" for="btnradio2"> Regular </label>

      <input type="radio" class="btn-check2" name="btnradio2" id="btnradio6" value= 3 autocomplete="off">
      <label class="btn btn-outline-primary2" for="btnradio2"> Ruidoso </label>
    </div>
    </div>
  
  
    <div id="botonesop3">
     <div class="btn-group3" role="group" aria-label="Basic radio toggle button group">
      <h4> Guardian </h4>
      
      
      <input type="radio" class="btn-check3" name="btnradio3" id="btnradio7" value=1 autocomplete="off" checked>
      <label class="btn btn-outline-primary3" for="btnradio3"> Miedoso </label>
   
      <input type="radio" class="btn-check3" name="btnradio3" id="btnradio8" value=2 autocomplete="off">
      <label class="btn btn-outline-primary3" for="btnradio3"> Regular </label>

      
      <input type="radio" class="btn-check3" name="btnradio3" id="btnradio9" value=3 autocomplete="off">
      <label class="btn btn-outline-primary3" for="btnradio3"> Valiente </label>
      
    </div>
    </div>

    <div id="botonesop4">
     <div class="btn-group4" role="group" aria-label="Basic radio toggle button group">
      <h4> Sociable </h4>
      
      
      <input type="radio" class="btn-check4" name="btnradio4" id="btnradio10" value=1 autocomplete="off" checked>
      <label class="btn btn-outline-primary4" for="btnradio4"> Introvertido </label>
   
      <input type="radio" class="btn-check4" name="btnradio4" id="btnradio11" value=2 autocomplete="off">
      <label class="btn btn-outline-primary4" for="btnradio4"> Regular </label>

      
      <input type="radio" class="btn-check4" name="btnradio4" id="btnradio12" value=3 autocomplete="off">
      <label class="btn btn-outline-primary4" for="btnradio4"> Extrovertido </label>
      
    </div>
    </div>

    
    <div id="botonesop5">
     <div class="btn-group5" role="group" aria-label="Basic radio toggle button group">
      <h4> Inteligencia </h4>
      
      
      <input type="radio" class="btn-check5" name="btnradio5" id="btnradio13" value=1 autocomplete="off" checked>
      <label class="btn btn-outline-primary5" for="btnradio5"> Emocional </label>
   
      <input type="radio" class="btn-check5" name="btnradio5" id="btnradio14" value=2 autocomplete="off">
      <label class="btn btn-outline-primary5" for="btnradio5"> Regular </label>

      
      <input type="radio" class="btn-check5" name="btnradio5" id="btnradio15" value=3 autocomplete="off">
      <label class="btn btn-outline-primary5" for="btnradio5"> Logico </label>
      
    </div>
    </div>
  
    <button type="button" id="submitBtn" class="btn btn-outline-secondary"><h4>Descubre tu resultado!</h4></button>
  `
  }*/


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

    html +="<div id='' style='padding:5ex; border: 1px solid black; width: 100%;'>"
    html+=data.resultado
    html +="</div>"

    document.getElementById("texto1").innerHTML= html
  })

  .catch(error => {
    console.error('Error:', error);
  });
});