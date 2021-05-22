var startButton = document.querySelector("#start");
var timer = document.getElementById("countdown");
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");
var questionPlacement = document.createElement('h1');
var a1Placement = document.createElement('h1');
var a2Placement = document.createElement('h1');
var a3Placement = document.createElement('h1');
var a4Placement = document.createElement('h1');
var onOff = 0;
var correct;
var incorrect;
var questionCounter = 0;


startButton.addEventListener("click", function() {
    if(onOff == 0)
    {
    timer.textContent = 60; // make it 60;
    timerForQuestions();
    questions();
    document.body.appendChild(questionPlacement);
        document.body.appendChild(a1Placement);
        document.body.appendChild(a2Placement);
        document.body.appendChild(a3Placement);
        document.body.appendChild(a4Placement);
        
    }
    onOff++;
  });


  function questions()
  {
    if(questionCounter == 0)
    {
        questionPlacement.textContent = "Question 1: question";
        a1Placement.textContent = "answer 1";
            a1.innerHTML = "1";
            document.body.appendChild(a1);
        a2Placement.textContent = "answer 2";
        a2.innerHTML = "2";
            document.body.appendChild(a2);
        a3Placement.textContent = "answer 3";
            a3.innerHTML = "3";
            document.body.appendChild(a3);
        a4Placement.textContent = "answer 4";
            a4.innerHTML = "4";
            document.body.appendChild(a4);
        
        a1.addEventListener("click", function() {
        correct++;
        });
        a2.addEventListener("click", function() {
            incorrect++;
            timer.textContent = timer.textContent - 5; 
        });
        a3.addEventListener("click", function() {
            incorrect++;
            timer.textContent = timer.textContent - 5; 
        });
        a4.addEventListener("click", function() {
            incorrect++;
            timer.textContent = timer.textContent - 5; 
        });
    }
    if(questionCounter == 1)
    {
        questionPlacement.textContent = "Question 2: question";
        a1Placement.textContent = "cat";
        a2Placement.textContent = "dog";
        a3Placement.textContent = "fish";
        a4Placement.textContent = "bird";
    }
    if(questionCounter == 2)
    {
        questionPlacement.textContent = "Question 3: question";
        a1Placement.textContent = "yummy";
        a2Placement.textContent = "atasf";
        a3Placement.textContent = "answasfagwever 3";
        a4Placement.textContent = "answwadaer 4";
    }
    if(questionCounter == 3)
    {
        questionPlacement.textContent = "Question 4: question";
        a1Placement.textContent = "ansvawvawwer 1";
        a2Placement.textContent = "ansvfghytfwer 2";
        a3Placement.textContent = "answdfghrsefder 3";
        a4Placement.textContent = "answghwe345er 4";
    }
    if(questionCounter == 4)
    {
        questionPlacement.textContent = "Question 5: question";
        a1Placement.textContent = "answer1erefgrt3e 1";
        a2Placement.textContent = "answefqgbrger 2";
        a3Placement.textContent = "answergrbwefv 3";
        a4Placement.textContent = "answeevbgrer 4";
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
