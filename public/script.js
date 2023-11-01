const btnradio1 = document.getElementById('btnradio1');
const outputDiv = document.getElementById('output');
const submitBtn = document.getElementById('submitBtn');
//const nameInput = document.getElementById('nameInput');

let pregunta =[]

pregunta.push({
  id:0, "pregunta": "Si escucho a alguien insultar a un ser querido salgo ciegamente a defenderlo, aún sin conocer el contexto"
})

pregunta.push({
  id:1, "pregunta": "Cuando estoy en un lugar desconocido y escucho un ruido raro voy a ver qué es"
})

pregunta.push({
  id:2, "pregunta": "Hago amigos nuevos con regularidad"
})

pregunta.push({
  id:3, "pregunta": "Dedico gran parte de mi tiempo libre a explorar cosas aleatorias que despiertan mi interés"
})

pregunta.push({
  id:4, "pregunta": "Ver llorar a otras personas puede hacer que sienta ganas de llorar yo también"
})

pregunta.push({
  id:5, "pregunta": "Suelo hacer un plan de reserva para un plan de reserva"
})

pregunta.push({
  id:6, "pregunta": "En los actos sociales, rara vez intento presentarme a gente nueva y suelo hablar con los que ya conozc0"
})

pregunta.push({
  id:7, "pregunta": "Suelo mantener la calma, incluso bajo mucha presión"
})

pregunta.push({
  id:8, "pregunta": "Prefiero terminar por completo un proyecto antes de empezar otro"
})

pregunta.push({
  id:9, "pregunta": "Soy muy sentimental"
})

pregunta.push({
  id:10, "pregunta": "Me siento cómodo acercandome a alguien que me parece interesante e iniciando una conversación"
})

pregunta.push({
  id:11, "pregunta": "No me interesa demasiado discutir las diferentes interpretaciones y análisis de las obras creativas"
})

pregunta.push({
  id:12, "pregunta": "Me gusta seguir mas a mi cabeza que a mi corazón"
})

pregunta.push({
  id:13, "pregunta": "Suelo preferir hacer lo que quiero en el momento a seguir una rutina diaria concreta"
})

pregunta.push({
  id:14, "pregunta": "Rara vez me preocupo por causar una buena impresión a la gente que conozco"
})

pregunta.push({
  id:15, "pregunta": "Me gusta participar en actividades de grupo"
})

pregunta.push({
  id:16, "pregunta": "Mi felicidad proviene mas de ayudar a los demas que de lograr mis propias metas"
})

pregunta.push({
  id:17, "pregunta": " Me interesan tantas cosas que me cuesta elegir que hacer a continuacion"
})

pregunta.push({
  id:18, "pregunta": "Evito el liderazgo en grupos"
})

pregunta.push({
  id:19, "pregunta": "Prefiero hacer mis tareas antes de permitirme relajarme"
})

pregunta.push({
  id:20, "pregunta": "Me gusta ver a la gente discutir"
})

pregunta.push({
  id:21, "pregunta": "Tiendo a evitar llamar la atencion"
})

pregunta.push({
  id:22, "pregunta": "A menudo termino haciendo las cosas a ultimo momento"
})

pregunta.push({
  id:23, "pregunta": "Pierdo la paciencia con la gente que no es tan eficiente como yo"
})

pregunta.push({
  id:24, "pregunta": "Rara vez reconsidero las decisiones que tomé"
})



let contHtml = "";
let i = 0
let j = 0
for (let q of pregunta){
    contHtml+=`<div id="botonesop`+ j++ +`">
    <div class="btn-group`+ j +`  preguntas" role="group" aria-label="Basic radio toggle button group">`;

    contHtml+=`<div> ${q.pregunta} </div>`;
    contHtml+=`<div class="contenedor_botones d-flex col-12">
    <div class="Botones col">
    <input type="radio" class="btn-check`+ j +` " name="btnradio`+ j +`" id="btnradio`+ i++ +`" value= 1 autocomplete="off">
    <label> Muy de acuerdo </label>
    </div>

    <div class="Botones col">
    <input type="radio" class="btn-check`+ j +` " name="btnradio`+ j +`" id="btnradio`+ i++ +`" value= 2 autocomplete="off">
    <label> De acuerdo </label>
    </div> 
    <div class="Botones col">
    <input type="radio" class="btn-check`+ j +`" name="btnradio`+ j +`" id="btnradio`+ i++ +`" value= 3 autocomplete="off" checked>
    <label> Regular/No sé </label>
    </div>
    <div class="Botones col">
    <input type="radio" class="btn-check`+ j +`" name="btnradio`+ j +`" id="btnradio`+ i++ +`" value= 4 autocomplete="off">
    <label> En desacuerdo </label>
    </div>
    <div class="Botones col">
    <input type="radio" class="btn-check`+ j +`" name="btnradio`+ j +`" id="btnradio`+ i++ +`" value= 5 autocomplete="off">
    <label> Muy en desacuerdo </label>
    </div>`;
    contHtml+=`</div>
    </div>`;
}

contpreguntas.innerHTML = contHtml;

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
    console.log("Sos un: "+data.resultado.perro)
    let html =""
    html+="<div class='menu_respuesta'>"
    html +="<div id='Resultado-perruno'>"
    html+="Sos un "
    html+=data.resultado.perro
    html +="</div>"
    
    html+=`<img src ="imagenes/` + data.resultado.perro + `.jpg" class="Imgs-perros">`;
    html+= `<button type="button" class="btn btn-outline-success Botones_Resultado"  onclick="window.location.href = 'info_perros/` + data.resultado.perro + `.html';">Mas informacion</button>`;
    
    html+="<div class='menu_respuesta'>"
    html +="<div id='Resultado-humano'>"
    html+="Stats tuyas: "
    html+=" Afecto: "
    html+=data.resultado.valoresUsuario[0]
    html+=" Inteligencia: "
    html+=data.resultado.valoresUsuario[1]
    html+=" Lealtad: "
    html+=data.resultado.valoresUsuario[2]
    html+=" Energía: "
    html+=data.resultado.valoresUsuario[3]
    html+=" Valentía: "
    html+=data.resultado.valoresUsuario[4]
    html +="</div>"

    html+="Stats perro: "
    html+=" Afecto: "
    html+=data.resultado.subarreglo[0]
    html+=" Inteligencia: "
    html+=data.resultado.subarreglo[1]
    html+=" Lealtad: "
    html+=data.resultado.subarreglo[2]
    html+=" Energía: "
    html+=data.resultado.subarreglo[3]
    html+=" Valentía: "
    html+=data.resultado.subarreglo[4]
    html +="</div>"
    html +="</div>"

    html+="</div>"
    let carrusel= ""
    
    document.getElementById("texto1").innerHTML= html
    document.getElementById("carrusel").innerHTML= carrusel

  })



  .catch(error => {
    console.error('Error:', error);
  });
});