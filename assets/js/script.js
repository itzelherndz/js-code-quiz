//Body Element
var body=document.body;

//Create Elements
//Header
var headerEl=document.createElement("header");
var titleEl=document.createElement("h1");
//Nav 
var navEl=document.createElement("nav");
var timerEl=document.createElement("h3");
var viewScoreEl=document.createElement("h3");
//Main 
var mainEl=document.createElement("main");
var headingEl=document.createElement("h2");
var descriptionEl=document.createElement("p");
var startBtnEl=document.createElement("h4");
var olEl=document.createElement("ol");
var liEl=[];
for (var i=0; i<4; i++){
    liEl[i]=document.createElement("li");
}
var formEl=document.createElement("form");
var textInputEl=document.createElement("input");
var submitBtnEl=document.createElement("input");
var highScoresOl=document.createElement("ol");
//Footer
var footerEl=document.createElement("footer");
var verifyEl=document.createElement("h3");
var refreshEl=document.createElement("p");

//Append Content
body.appendChild(headerEl);
body.appendChild(mainEl);
body.appendChild(mainEl);
body.appendChild(footerEl);
headerEl.appendChild(titleEl);
headerEl.appendChild(navEl);
navEl.appendChild(viewScoreEl);
navEl.appendChild(timerEl);
mainEl.appendChild(headingEl);
mainEl.appendChild(descriptionEl);
mainEl.appendChild(startBtnEl);
mainEl.appendChild(olEl);
mainEl.appendChild(formEl);
mainEl.appendChild(highScoresOl);
for (var i=0; i<liEl.length; i++){
    olEl.appendChild(liEl[i]);
}
formEl.appendChild(textInputEl);
formEl.appendChild(submitBtnEl);
footerEl.appendChild(verifyEl);
footerEl.appendChild(refreshEl);

//Style
body.setAttribute("style","margin:0; padding:0; box-sizing:border-box; color:#01303f; font-family:Andale Mono, monospace; background-color:#d4f0fc;");
headerEl.setAttribute("style","display:flex; flex-direction:column; text-align:center;");
navEl.setAttribute("style","display:flex; flex-direction:column; justify-content:space-between; padding: 0 5%;")
viewScoreEl.setAttribute("style","color:#02a9f7;");
headingEl.setAttribute("style","text-align:center;")
descriptionEl.setAttribute("style","text-align:center; font-size:125%; padding:0 5%;");
startBtnEl.setAttribute("style","text-align:center; font-size: 125%");
for (var i=0; i<liEl.length; i++){
    liEl[i].setAttribute("style","list-style:none; text-align:center;");
}
highScoresOl.setAttribute("style","margin: 0 45%; width:10%;");
formEl.setAttribute("style","margin:0 45%; width:10%");
textInputEl.setAttribute("style","margin: 2.5% 45%; padding:2.5% 0; width:10%; text-align:center;")
submitBtnEl.setAttribute("style","margin: 2.5% 40%; padding:2.5% 0;");
footerEl.setAttribute("style","text-align:center;");

//Form Attributes
textInputEl.setAttribute("type","text");
submitBtnEl.setAttribute("type","submit");

//Clear Time Display
function clearTime(){
    timerEl.textContent='';
}

//Clear Main Function
function clearMain(){
    headingEl.textContent='';
    descriptionEl.textContent='';
    if (startBtnEl.parentElement){
        mainEl.removeChild(startBtnEl);
    }
    for (var i=0; i<liEl.length; i++){
        liEl[i].textContent='';
    }
    if (submitBtnEl.parentElement){
        formEl.removeChild(submitBtnEl);
        formEl.removeChild(textInputEl);
    }
    if (highScoresOl.parentElement){
        mainEl.removeChild(highScoresOl);
    }
}

//Clear Footer
function clearFooter(){
    verifyEl.textContent='';
    refreshEl.textContent='';
}

//Questions
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        choices:
        {
            a:"strings",
            b:"booleans",
            c:"alerts",
            d:"numbers"
        },
        correct: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____",
        choices:
        {
            a:"quotes",
            b:"curly brakets",
            c:"parenthesis",
            d:"square brackets"
        },
        correct: "c"
    },
    {
        question:"String values must be enclosed within _____ when being assigned to variables.",
        choices:
        {
            a:"commas",
            b:"curly brackets",
            c:"quotes",
            d:"parenthesis"
        },
        correct: "d"
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choices:
        {
            a:"JavaScript",
            b:"terminal/bash",
            c:"for loops",
            d:"console.log"
        },
        correct: "d"
    },
    {
        question:"Arrays in JavaScript can be used to store _____.",
        choices:
        {
            a:"numbers and strings",
            b:"other arrays",
            c:"booleans",
            d:"all of the above"
        },
        correct: "d"
    }
];

//Add Class of Choice to Answer Choices
for (var i=0; i<liEl.length; i++){
    liEl[i].setAttribute("class","choice");
}

//Answer Choices Event Listner With Data Attributes
olEl.addEventListener("click",function(event) {
    var element = event.target;

    if (element.matches(".choice")){
        olEl.setAttribute("data-state","true");
        var state = element.getAttribute("data-state");
        if (state === "correct"){
            verifyEl.textContent = "Correct!";
            verifyEl.setAttribute("data-state","correct");
        } else if (state === "wrong") {
            verifyEl.textContent = "Wrong!";
            verifyEl.setAttribute("data-state","wrong");
        }
    } else {
        olEl.setAttribute("data-state","false");
    }
});

//Counter to Parse Through Questions
var counter=0;
//Quiz Display Function
function quizDisplay(x){
    if (counter==questions.length){
        olEl.setAttribute("data-state","done");
        return;
    } else {
        olEl.setAttribute("data-state","false");
    }
    headingEl.textContent=questions[x].question;
    liEl[0].textContent=questions[x].choices.a;
    liEl[1].textContent=questions[x].choices.b;
    liEl[2].textContent=questions[x].choices.c;
    liEl[3].textContent=questions[x].choices.d;
    switch(questions[x].correct){
        case 'a':
            liEl[0].setAttribute("data-state","correct");
            liEl[1].setAttribute("data-state","wrong");
            liEl[2].setAttribute("data-state","wrong");
            liEl[3].setAttribute("data-state","wrong");
            break;
        case 'b':
            liEl[0].setAttribute("data-state","wrong");
            liEl[1].setAttribute("data-state","correct");
            liEl[2].setAttribute("data-state","wrong");
            liEl[3].setAttribute("data-state","wrong");
            break;
        case 'c':
            liEl[0].setAttribute("data-state","wrong");
            liEl[1].setAttribute("data-state","wrong");
            liEl[2].setAttribute("data-state","correct");
            liEl[3].setAttribute("data-state","wrong");
            break;
        case 'd':
            liEl[0].setAttribute("data-state","wrong");
            liEl[1].setAttribute("data-state","wrong");
            liEl[2].setAttribute("data-state","wrong");
            liEl[3].setAttribute("data-state","correct");
            break;
        default: break;
    }
}

//Initials Prompt Message
function initialsPrompt(){
    clearMain();
    clearTime();
    headingEl.textContent="GAME OVER";
    descriptionEl.textContent="Enter your initials to submit your score.";
    submitBtnEl.textContent="Submit";
    formEl.appendChild(textInputEl);
    formEl.appendChild(submitBtnEl);
}

//High Score Display
function highScoreDisplay(){
    if (highScoresOl.getAttribute("data-state")==="true"){
        return;
    } else {
        clearMain();
        clearFooter();
        headingEl.textContent="High Scores";
        refreshEl.textContent="Refresh the Page to Start Quiz";
        mainEl.appendChild(highScoresOl);
        var highScoresArray = JSON.parse(localStorage.getItem("highScores"));
        if (highScoresArray) {
            for (var i=0; i<highScoresArray.length; i++){
                var highScoreEl=[];
                highScoreEl[i] = document.createElement("li");
                highScoreEl[i].textContent= highScoresArray[i].initials + ": " + highScoresArray[i].score;
                highScoresOl.appendChild(highScoreEl[i]);
            }
            highScoresOl.setAttribute("data-state","true");
        }
    } 
}

//Quiz Function
function quiz(){

    //Clear Main
    clearMain();

    //Set Initial States
    olEl.setAttribute("data-state","false");
    textInputEl.value='';

    //Timers
    var time = 90;
    var timeInterval1 = setInterval(function() {
        timerEl.textContent = "Time: " + time;
        time--;

        var timeInterval2 = setInterval( function () {
            if(olEl.getAttribute("data-state")==="false"){
                quizDisplay(counter);
            } else if (olEl.getAttribute("data-state")==="true"){
                counter++;
                quizDisplay(counter);
            } else {
                //Store Score
                localStorage.setItem("lastTime",time);

                //Display
                initialsPrompt();

                //Clear Time Intervals
                clearInterval(timeInterval2);
                clearInterval(timeInterval1);
            }

            //Verifies Answer Choice Penalization
            if(verifyEl.getAttribute("data-state")==="wrong"){
                time-=10;
                verifyEl.setAttribute("data-state","no-answer");
            }   
        },1); 
        
        if (time<=0) {
            //Store Score
            localStorage.setItem("lastTime",time);    
            //Display
            initialsPrompt();
            //Clear Time Intervals
            clearInterval(timeInterval2);
            clearInterval(timeInterval1)
        } 

    }, 1000); 

    
    //Sets High Scores Item Once
    if(!(localStorage.getItem("highScores"))){
        localStorage.setItem("highScores","[]");
    }

    //Submit Button State
    submitBtnEl.setAttribute("data-state","false");
    
    //Submit Score
    submitBtnEl.addEventListener("click",function(event){
        event.preventDefault();
        var highScore = {
        initials: textInputEl.value,
        score: localStorage.getItem("lastTime")
        };
        var highScoresArray = JSON.parse(localStorage.getItem("highScores"));
        highScoresArray.push(highScore);
        localStorage.setItem("highScores",JSON.stringify(highScoresArray));
        highScoreDisplay();
    });

    if(counter>=questions.length){
        counter=0;
    }

    return;
}

//Function to Initialize Page
function init(){

    //Clear Main
    clearMain();

    //Title
    titleEl.textContent="Coding Challenge";

    //View High Score
    viewScoreEl.textContent="View High Scores";
    viewScoreEl.addEventListener("click",highScoreDisplay); 

    //Initial Main Content
    headingEl.textContent="JavaScript Quiz"
    descriptionEl.textContent="Answer the following JavaScript programming questions within the time limit. Incorrect answeres will penalize your score/time by 10 seconds.";
    startBtnEl.textContent="Start Quiz";
    mainEl.appendChild(startBtnEl);

    //Start Quiz Btn
    startBtnEl.addEventListener("click", quiz);

}

init();