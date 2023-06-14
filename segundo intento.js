const perroalfa = [-3,-2,3,2,1]
const perrobeta = [-1,-1,2,3,-3]

console.log("quiz")

var valUser = [0,0,0,0,0]

var tempStats = [0,0,0,0,0]

var quizActive = true

var questionState = 0;

var questionText = [
        "Te gusta mas la uno o la dos?",
        "Te gusta mas la uno o la dos?",
        "Te gusta mas la uno o la dos?"
    ]

var answerValues = [

    [//preg 1
      [2,0,-1,3,0] // opcion 1
      [-1,-2,-3,0,0] //opcion 2
    ]
    
    [//preg 2
      [3,0,-3,-2,1] //opcion 1
      [0,0,1,2,-3] //opcion 2
    ]
    
    [//preg 3
      [1,3,3,0,0]//opcion 1
      [2,2,0,1,0]//opcion 2
    ]
]





function addValues() {
    
  for (i = 0; i < userStats.length ; i++) {
      userStats[i] += tempStats[i];
  }
}

function responder(){
  
  clearTempStats()

  for (let i = 0; i < answerValues.length; i++) {
    
    resp = prompt(questionText[i])

    tempStats = answerValues[i-1][resp]
    
    if (quizActive){
      questionState++
    }
  }

}

function clearTempStats() {
    
  tempStats = [0,0,0,0,0];	
}

