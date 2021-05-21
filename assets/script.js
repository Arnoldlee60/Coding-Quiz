var startButton = document.querySelector("#start");
var quizQuestion = document.createElement("ul");
var timer = document.getElementById("countdown")
var questionPlacement = document.createElement('h1');
var mainEl = document.getElementById('main');
questionPlacement.textContent = "question";

//setInterval( test, 50000);

startButton.addEventListener("click", function() {
    timer.textContent = 60;
    timerForQuestions();
    document.body.appendChild(questionPlacement);

  });


  function questions()
  {
    //setInterval( test, 50000); //timer
    //use the thing where you can add stuff to the page and post the question and the timer
    startButton.innerHTML = "CLICK ME";
  }


  function timerForQuestions(){
    var seconds = setInterval(function() { //countdown every second

            if (timer.textContent != 0)
            {
                timer.textContent--; 
            }
        }, 1000)
}

