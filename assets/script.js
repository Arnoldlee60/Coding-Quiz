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
    timerForQuestions(); //if you click multiple times the time goes faster Im not really sure what to do
    begin();
  });

  function begin(){
    if(onOff == 0)
    {
    timer.textContent = 60; // make it 60;
    questions();
    document.body.appendChild(questionPlacement);
        document.body.appendChild(a1Placement);
        document.body.appendChild(a2Placement);
        document.body.appendChild(a3Placement);
        document.body.appendChild(a4Placement);
    }
    onOff++; 
  }


  function questions()
  {
    if(questionCounter == 0)
    {
        questionPlacement.textContent = "Question 1: What is 2 + 2 = ?";
        a1Placement.textContent = "1.   four";
            a1.innerHTML = "1";
            document.body.appendChild(a1);
        a2Placement.textContent = "2.   five";
        a2.innerHTML = "2";
            document.body.appendChild(a2);
        a3Placement.textContent = "3.   one";
            a3.innerHTML = "3";
            document.body.appendChild(a3);
        a4Placement.textContent = "4.   fish";
            a4.innerHTML = "4";
            document.body.appendChild(a4);
        
        a1.addEventListener("click", function() {
        correct++;
        onOff = 0;
        questions();
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
        questionPlacement.textContent = "Question 2: What is a dog?";
        a1Placement.textContent = "1.   A reptile";
            a1.innerHTML = "1";
            document.body.appendChild(a1);
        a2Placement.textContent = "2.   a mammal";
        a2.innerHTML = "2";
            document.body.appendChild(a2);
        a3Placement.textContent = "3.   a bird";
            a3.innerHTML = "3";
            document.body.appendChild(a3);
        a4Placement.textContent = "4.   a fish";
            a4.innerHTML = "4";
            document.body.appendChild(a4);
        
        a1.addEventListener("click", function() {
        incorrect++;
        timer.textContent = timer.textContent - 5; 
        });
        a2.addEventListener("click", function() {
            correct++;
            onOff = 0;
            questions();
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
    if(questionCounter == 2)
    {
        questionPlacement.textContent = "Question 3: Which food does not spoil ";
        a1Placement.textContent = "1.   eggs";
            a1.innerHTML = "1";
            document.body.appendChild(a1);
        a2Placement.textContent = "2.   milk";
        a2.innerHTML = "2";
            document.body.appendChild(a2);
        a3Placement.textContent = "3.   honey";
            a3.innerHTML = "3";
            document.body.appendChild(a3);
        a4Placement.textContent = "4.   figs";
            a4.innerHTML = "4";
            document.body.appendChild(a4);
        
        a1.addEventListener("click", function() {
        incorrect++;
        timer.textContent = timer.textContent - 5; 
        });
        a2.addEventListener("click", function() {
            incorrect++;
            timer.textContent = timer.textContent - 5; 
        });
        a3.addEventListener("click", function() {
            correct++;
            onOff = 0;
            questions();
        });
        a4.addEventListener("click", function() {
            incorrect++;
            timer.textContent = timer.textContent - 5; 
        });
    }
    if(questionCounter == 3)
    {
        questionPlacement.textContent = "Question 4: what color is blood in your body";
        a1Placement.textContent = "1.   blue";
            a1.innerHTML = "1";
            document.body.appendChild(a1);
        a2Placement.textContent = "2.   purple";
        a2.innerHTML = "2";
            document.body.appendChild(a2);
        a3Placement.textContent = "3.   green";
            a3.innerHTML = "3";
            document.body.appendChild(a3);
        a4Placement.textContent = "4.   red";
            a4.innerHTML = "4";
            document.body.appendChild(a4);
        
        a1.addEventListener("click", function() {
        incorrect++;
        timer.textContent = timer.textContent - 5; 
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
            correct++;
            onOff = 0;
            questions();
        });
    }
    if(questionCounter == 4)
    {
        questionPlacement.textContent = "Question 5: Fastest bird in the world";
        a1Placement.textContent = "Peregrine falcon";
            a1.innerHTML = "1";
            document.body.appendChild(a1);
        a2Placement.textContent = "Hummingbird";
        a2.innerHTML = "2";
            document.body.appendChild(a2);
        a3Placement.textContent = "Raven";
            a3.innerHTML = "3";
            document.body.appendChild(a3);
        a4Placement.textContent = "Bald eagle";
            a4.innerHTML = "4";
            document.body.appendChild(a4);
        
        a1.addEventListener("click", function() {
        incorrect++;
        timer.textContent = timer.textContent - 5; 
            correct++;
            onOff = 0;
            questions();
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
