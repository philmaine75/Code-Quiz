var welcome = document.querySelector(".welcome");
var panel = document.querySelector(".panel");
var start = document.getElementById("start");
var failure = document.querySelector(".failure");
var scores = document.querySelector(".scores")

    start.addEventListener("click", function(){

        welcome.style.display = "none";
        panel.style.display = "flex";
        timeEl.style.display = "flex"
        countdown()
    });

    var timeEl = document.getElementById("timer")
    var timeLeft = 30;
    function countdown() {
        
      var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
          timeEl.textContent = timeLeft + ' seconds remaining';
          timeLeft--;
        } else if (timeLeft === 1) {
          timeEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } 
        else {
          timeEl.textContent = ''
          clearInterval(timeInterval);
          panel.style.display = "none";
          failure.style.display = "flex";
        }
      }, 1000);
    }



const Questions = [{
    q: "The condition in an if/else statement is enclosed within ____",
    a: [{ text: "quotes", isCorrect: false },
    { text: "curly brackets", isCorrect: false },
    { text: "parenthesis", isCorrect: true },
    { text: "square brackets", isCorrect: false }
    ]
 
},
{
    q: "Which of the following can be stored in Javscript Arrays?",
    a: [{ text: "Numbers and Strings", isCorrect: false, },
    { text: "Other Arrays", isCorrect: false },
    { text: "Booleans", isCorrect: false },
    { text: "All of the Above", isCorrect: true }
    ]
 
},
{
    q: "What is a useful tool for debugging Javascript code?",
    a: [{ text: "Javascript", isCorrect: false },
    { text: "Terminal/bash", isCorrect: false },
    { text: "console.log", isCorrect: true },
    { text: "for loops", isCorrect: false }
    ]
 
}
 
]
 
var currentQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currentQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currentQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currentQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }  
}

loadQues();
var next = document.createElement("button")
const totalScore = document.getElementById("score")
function loadScore() {
   
    
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
    totalScore.appendChild(next)
    next.textContent = "Continue"
    next.style.marginLeft = "30px"
}
next.addEventListener("click", function(){
    var form = document.querySelector(".form");
    welcome.style.display = "none";
    panel.style.display = "none";
    form.style.display = "flex";
    totalScore.remove()
    
})

function nextQuestion() {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
        timeLeft = 99999
        timeEl.remove()

    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currentQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        timeLeft -= 5;
        nextQuestion();
    }
}
var scoreList = document.querySelector("#scoreList");
var saveScore = document.querySelector("#saveScore");
saveScore.addEventListener("submit", function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initialsinput")
    var li = document.createElement("li")
    li.textcontext = initials + score
    scoreList.appendChild(li)
    scores.style.display="flex"

})
