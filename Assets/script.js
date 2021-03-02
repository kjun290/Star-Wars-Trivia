var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var timerElement = document.querySelector(".timer-count");

var timer;
var timerCount;

let randomQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  randomQuestion = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  timerCount = 60
  setNextQuestion()

  startTimer()
}


// Timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
     
 
      if (timerCount <= 0 ) {
        clearInterval(timer);
          startButton.innerText = 'Restart';
          startButton.classList.remove('hide');
          alert ("Game Over")
        
      }
    }, 1000);
  }

function endGame() {
    
    console.log(timer)

    //display dive with final score and input

   // window.location.href = "highscores.html"
    }

function setNextQuestion() {
  resetState()
  showQuestion()
}

function showQuestion() {
  let question =  randomQuestion[currentQuestionIndex];
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct


  // subtract 5 seconds for wrong answer
  if (!correct) {
    timerCount-= 5
  }

setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
})
if (randomQuestion.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide')
} else {
  console.log (timerCount);
  localStorage.setItem("score", timerCount);

clearInterval (timer);
  startButton.innerText = 'Restart';
  startButton.classList.remove('hide');
  
  
}
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }

}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



// High Score using local storage
//   document.getElementById ("score").innterHTML=localStorage.getItem("score");
//   let oldScores = JSON.parse(window.localStorage.getItem("score")) || [];
// oldScores.push(score);
// window.localStorage.setItem("scoreComb", JSON.stringify(oldScores));

// List of Quiz Questions 

var questions = [
  {
    question: 'Who found R2-D2 and C-3PO roaming the Tatooine desert before selling them to Owen Lars?',
    answers: [
      { text: 'Gamorreans', correct: false },
      { text: 'Gungans', correct: false },
      { text: 'Jawas', correct: true },
      { text: 'Sand People', correct: false },

    ]
  },
  
  {
    question: 'What planet does the Empire choose to destroy first with the Death Star?',
    answers: [
      { text: 'Alderaan', correct: true },
      { text: 'Yavin', correct: false },
      { text: 'Dantooine', correct: false },
      { text: 'Geonosis', correct: false }
    ]
  },
  
  {
    question: 'What was Luke Skywalker’s call sign during the Battle of Yavin?',
    answers: [
      { text: 'Red Two', correct: false },
      { text: 'Red Five', correct: true },
      { text: 'Gold Leader', correct: false },
      { text: 'Red Leader', correct: false }
    ]
  },
  
   {
    question: 'How many times did characters utter some form of the phrase “I’ve got a bad feeling about this” during A New Hope?',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: true },
      { text: '3', correct: false },
      { text: '4', correct: false }
    ]
  },

  {
    question: 'What is the name of the giant four-legged walkers used by the Empire during the Battle of Hoth?',
    answers: [
      { text: 'TIE fighters', correct: false },
      { text: 'AT-STs', correct: false },
      { text: 'AT-TEs', correct: false },
      { text: 'AT-ATs', correct: true }
    ]
  },

  {
    question: 'Who does Luke see in his vision while in the cave during his Jedi training with Yoda on Dagobah?',
    answers: [
      { text: 'Yoda', correct: false },
      { text: 'Princess Leia', correct: false },
      { text: 'Darth Vader', correct: true },
      { text: 'Obi-Wan Kenobi', correct: false }
    ]
  },

  {
    question: 'Cloud City, the mining colony run by Lando Calrissian, specialized in what resource?',
    answers: [
      { text: 'Chromium', correct: false },
      { text: 'Carbon', correct: false },
      { text: 'Lanthanide', correct: false },
      { text: 'Tibanna', correct: true }
    ]
  },

  {
    question: 'Who is Jabba the Hutt’s right-hand man?',
    answers: [
      { text: 'Bib Fortuna', correct: true },
      { text: 'Salacious Crumb', correct: false },
      { text: 'Ponda Baba', correct: false },
      { text: 'Watto', correct: false }
    ]
  },

  {
    question: 'Which ship did Han Solo and his crew of Rebels use to infiltrate the Forest Moon of Endor in order to destroy the Empire’s shield generator?',
    answers: [
      { text: 'Home One', correct: false },
      { text: 'Millennium Falcon', correct: false },
      { text: 'Tydirium', correct: true },
      { text: 'Avenger', correct: false }
    ]
  },

  {
    question: 'What was the name of the Ewok who found Leia unconscious on the Forest Moon of Endor after she was thrown off her speeder bike?',
    answers: [
      { text: 'Asha Fahn', correct: false },
      { text: 'Chirpa', correct: false },
      { text: 'Wicket Warrick', correct: true },
      { text: 'Teebo', correct: false }
    ]
  },

  {
    question: 'During his confrontation with Emperor Palpatine and Darth Vader on the second Death Star, what does Luke try to conceal?',
    answers: [
      { text: 'He has completed jedi training', correct: false },
      { text: 'He has a sister', correct: true },
      { text: 'The location of the rebel base', correct: false },
      { text: 'The Rebel Alliance attack plan', correct: false }
    ]
  },
]

