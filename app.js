const quizDB =[
    {
        question:"Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hay Text MarkUp Language",
        c: "Hyper Text MakeUp Language",
        d: "Hyper Text MarkUp Language",
        ans:"ans4"
    },
    {
        question:"Q2: What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b: "Cascading Style Sheild",
        c: "Common Style Sheet",
        d: "Cascading Style Sheild",
        ans:"ans1"
    },
    {
        question:"Q3: What is the full form of JS?",
        a: "JavaSite",
        b: "JavaSuper",
        c: "JavaScript",
        d: "JavaSheet",
        ans:"ans3"
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore')
// load question
let questionCount = 0;
let score=0;
const loadQuestion = ()=>{
    question.innerText= quizDB[questionCount].question;
    option1.innerText = quizDB[questionCount].a;
    option2.innerText = quizDB[questionCount].b;
    option3.innerText = quizDB[questionCount].c;
    option4.innerText = quizDB[questionCount].d;
}

loadQuestion();

// submit event

const getCheckAnswer = ()=>{
    let answer;
    answers.forEach((currEle)=>{
        if(currEle.checked){
            answer = currEle.id;
        }
    });
    return answer;

}

const deselectAll=()=>{
    answers.forEach((currEle)=>{
        currEle.checked=false;
    });
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    deselectAll();

    if(questionCount< quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML =`
        <h3>You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">PLAY AGAIN</button>
        
        `
        showScore.classList.remove('scoreArea')

    }

})

