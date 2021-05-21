var startButton = document.querySelector("#start");
var timer = document.getElementById("#countdown")
var a1 = document.getElementById('#answer1');
var a2 = document.getElementById('#answer2');
var a3 = document.getElementById('#answer3');
var a4 = document.getElementById('#answer4');
var questionPlacement = document.createElement('h1');
var a1Placement = document.createElement('h2')
var onOff = 0;

//questionPlacement.textContent = "question";
var questionCounter = 0;

//setInterval( test, 50000);

startButton.addEventListener("click", function() {
    if(onOff == 0)
    {
    timer.textContent = 10; // make it 60;
    timerForQuestions();
    questions();
    document.body.appendChild(questionPlacement);
    }
    onOff++;
  });


  function questions()
  {
    if(questionCounter == 0)
    {
        questionPlacement.textContent = "Question 1: question";
        a1.textContent = "answer 1";
        document.body.appendChild(a1Placement);
        //a2.textContent = "answer 2";
        //a3.textContent = "answer 3";
        //a4.textContent = "answer 4";
    }
    if(questionCounter == 1)
    {
        questionPlacement.textContent = "Question 2: question";
        a1.textContent = "answer 11";
        a2.textContent = "answer 22";
        a3.textContent = "answer 33";
        a4.textContent = "answer 44";
    }
    if(questionCounter == 2)
    {
        questionPlacement.textContent = "Question 3: question";
        a1.textContent = "answer 11";
        a2.textContent = "answer 22";
        a3.textContent = "answer 33";
        a4.textContent = "answer 44";
    }
    if(questionCounter == 3)
    {
        questionPlacement.textContent = "Question 4: question";
        a1.textContent = "answer 11";
        a2.textContent = "answer 22";
        a3.textContent = "answer 33";
        a4.textContent = "answer 44";
    }
    if(questionCounter == 4)
    {
        questionPlacement.textContent = "Question 5: question";
        a1.textContent = "answer 11";
        a2.textContent = "answer 22";
        a3.textContent = "answer 33";
        a4.textContent = "answer 44";
    }

    


    questionCounter++;
  }


  function timerForQuestions(){
    var seconds = setInterval(function() { //countdown every second

            if (timer.textContent != 0)
            {
                timer.textContent--; 
            }
        }, 1000)
}

