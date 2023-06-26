const prompt = require('prompt-sync')();

const perroalfa = [-3, -2, 3, 2, 1]
const perrobeta = [-1, -1, 2, 3, -3]

console.log("quiz")

let valUser = [0,0,0,0,0]

let tempStats = [0,0,0,0,0]

let quizActive = true

let questionState = 0;

let questionText = [
  "Te gusta mas la uno o la dos?",
  "Te gusta mas la uno o la dos?",
  "Te gusta mas la uno o la dos?"
]

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

function main(){
  for(let i = 0; i < questionText.length; i++){
    console.log("asfdasf")
    responder()
    addValues()
    console.log(valUser)
  }
}


function addValues() {
    
  for (i = 0; i < valUser.length ; i++) {
      valUser[i] += tempStats[i];
  }
}

function responder(){
  
  clearTempStats()

  for (let i = 0; i < questionText.length; i++) {
    
    const resp = prompt(questionText[i]);

    tempStats = answerValues[i-1],[resp]
    
    if (quizActive){
      questionState++
    }
  }

}

function clearTempStats() {
    
  tempStats = [0,0,0,0,0];	
}

main()