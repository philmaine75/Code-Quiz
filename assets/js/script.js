var welcome = document.querySelector(".welcome");
var panel = document.querySelector(".panel");
var start = document.getElementById("start");
var failure = document.querySelector(".failure");

    start.addEventListener("click", function(){

        welcome.style.display = "none";
        panel.style.display = "flex";
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
    q: "question 1?",
    a: [{ text: "option1", isCorrect: false },
    { text: "option2", isCorrect: false },
    { text: "option3", isCorrect: true },
    { text: "option4", isCorrect: false }
    ]
 
},
{
    q: "question 2?",
    a: [{ text: "option1", isCorrect: false, },
    { text: "option2", isCorrect: false },
    { text: "option3", isCorrect: false },
    { text: "option4", isCorrect: true }
    ]
 
},
{
    q: "question 3",
    a: [{ text: "option1", isCorrect: false },
    { text: "option2", isCorrect: false },
    { text: "option3", isCorrect: true },
    { text: "option4", isCorrect: false }
    ]
 
}
 
]
 
var currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
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
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
        timeLeft = 999
        timeEl.remove()

    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        timeLeft -= 5;
        nextQuestion();
    }
}
var scoreList = document.querySelector("#scoreList");
var initials = document.querySelector("#initialsinput").value
var saveScore = document.querySelector("#saveScore");
saveScore.addEventListener("submit", function(event) {
    event.preventDefault
    var li = document.createElement("li")
    li.textcontext = initials + score
    scoreList.appendChild(li)
})

