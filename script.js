const questions=[
    {
        question: "What is the capital of France?",
        answers:[
            {text: "Paris", correct: true},
            {text: "London", correct: false},
            {text: "Germany",correct:false},
            {text: "Rome", correct: false}       
        ]
    },
        {
            question:"What is the largest animal in the world?",
            answers:[
                {text:"Panda",correct:false},
                {text:"Blue whale",correct:true},
                {text:"Elephant",correct:false},
                {text:"Koala",correct:false},
            ]
    },
        {
            question:"Electric bulb filament is made up of?",
            answers:[
                {text:"Carbon",correct:false},
                {text:"Tungsten",correct:true},
                {text:"Lead",correct:false},
                {text:"Copper",correct:false},
            ]
    },
        {
            question:"Which of the following is usedin pencil?",
            answers:[
                {text:"Graphite",correct:true},
                {text:"Aluminium",correct:false},
                {text:"Charcoal",correct:false},
                {text:"Phosphorus",correct:false},

            ]
    },
        {
            question:"What is the largest planet in our solar system?",
            answers:[
                {text:"Saturn",correct:false},
                {text:"Jupiter",correct:true},
                {text:"Mars",correct:false},
                {text:"Earth",correct:false},
            ]
    }
];

const questionelem=document.getElementById("ques");
const answerB=document.getElementById("answers");
const nextbutton=document.getElementById("next");
let questionindex=0;
let score=0;


function startquiz(){
    questionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    displayQuestion();
}
function displayQuestion(){
    resetQuestion();
    let current =questions[questionindex]
    let qno=questionindex+1;
    questionelem.innerHTML=qno+"."+current.question;

current.answers.forEach(answer => {
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn1");
    answerB.appendChild(button);
    if (answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",answerSelected);

});
}

function resetQuestion(){
    nextbutton.style.display="none";
    while(answerB.firstChild)
        answerB.removeChild(answerB.firstChild)

}

function answerSelected(a){
    const selectedButton=a.target;
    const correct=selectedButton.dataset.correct==="true";
    if(correct){
        selectedButton.classList.add("correct");
        score++;
    }
    else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerB.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";


}

function showscore(){
    resetQuestion();
    questionelem.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="PLAY AGAIN";
    nextbutton.style.display="block";
}
function handleNext(){
    questionindex++;
    if(questionindex<questions.length){
        displayQuestion();
    }
    else{
        showscore();
    }

}
nextbutton.addEventListener("click",()=>{
    if(questionindex<questions.length){
        handleNext();
    }
    else{
        startquiz();
    }

});

startquiz();