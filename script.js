const quizDB = [
    {
        questions: "What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Text Markup Language",
        ans: "D"
    },
    {
        questions: "What is the full form of CSS?",
        a: "Cascading Style Soft",
        b: "Cartoon Style Sheep",
        c: "Cascading Style Sheet",
        d: "Cascading Super Sheet",
        ans: "C"
    },
    {
        questions: "What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JorderShoes",
        d: "JustScript",
        ans: "A"
    }
];




const start = document.getElementById('start');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answer');
const userGroup = document.getElementById('user');
const nextBtn = document.getElementById('next');
const restartbtn = document.getElementById('restart');
const finish = document.getElementById('finish');
const scoreblock = document.getElementById('scoreblock');
const score = document.getElementById('score');
const username = document.getElementById('name');


const opt1 = document.getElementById('ans1');
const opt2 = document.getElementById('ans2');
const opt3 = document.getElementById('ans3');
const opt4 = document.getElementById('ans4');

let currentquestion=0;
let totalscore = 0;

function validate(){
    
    
    const username = document.getElementById('name').value;
    console.log(username);
    if(username=="" || username.length<3){
        alert("Enter Your proper name.");
    }
    else{
        userGroup.classList.add('hide');
        
        startgame();
    }
}

function startgame(){
    questionContainer.classList.remove('hide');
    loadquestion();

}


function loadquestion(){
    const questionlist = quizDB[currentquestion];
    questionElement.innerHTML = questionlist.questions;
    opt1.innerText = questionlist.a;
    opt2.innerText = questionlist.b;
    opt3.innerText = questionlist.c;
    opt4.innerText = questionlist.d;
    nextBtn.classList.add('hide');
}

function nextquestion(){
    currentquestion=currentquestion+1;
    clear();
    loadquestion();
    nextBtn.classList.add('hide');
}
function clear(){
    opt1.classList.remove('correct');
    opt2.classList.remove('correct');
    opt3.classList.remove('correct');
    opt4.classList.remove('correct');
    opt1.classList.remove('wrong');
    opt2.classList.remove('wrong');
    opt3.classList.remove('wrong');
    opt4.classList.remove('wrong');
}
function selected(answer){

    const questionlist = quizDB[currentquestion];
    if((currentquestion + 1) == quizDB.length){
        nextBtn.classList.add('hide');
        finish.classList.remove('hide');
    }
    else{
        nextBtn.classList.remove('hide');
    }

    if(questionlist.ans==answer){
        totalscore =totalscore+1;
    }

    if(questionlist.ans== 'A'){
        opt1.classList.add('correct');
        opt2.classList.add('wrong');
        opt3.classList.add('wrong');
        opt4.classList.add('wrong');
    }
    if(questionlist.ans== 'B'){
        opt1.classList.add('wrong');
        opt2.classList.add('correct');
        opt3.classList.add('wrong');
        opt4.classList.add('wrong');
        
    }
    if(questionlist.ans== 'C'){
        opt1.classList.add('wrong');
        opt2.classList.add('wrong');
        opt3.classList.add('correct');
        opt4.classList.add('wrong');
        
    }
    if(questionlist.ans== 'D'){
        opt1.classList.add('wrong');
        opt2.classList.add('wrong');
        opt3.classList.add('wrong');
        opt4.classList.add('correct');
    }
}

function finished(){
    const namet = username.value;
    const result = namet+ ' got ' + totalscore + ' out of ' + quizDB.length + ' questions.';
    scoreblock.classList.remove('hide');
    questionContainer.classList.add('hide');
    score.innerText = result;
}

function restart(){
    totalscore = 0;
    currentquestion = 0;
    scoreblock.classList.add('hide');
    questionContainer.classList.remove('hide');
    finish.classList.add('hide');
    clear();
    loadquestion();
}









// restart.addEventListener('click',startgame);
// nextBtn.addEventListener('click',()=>{
    
//     current++;
//     next();
// })


// function validate(){
//     console.log("validate");
//     startgame();
//     let username = document.getElementById('name').value;
//     if(username=="" || username.length<3){
        
//         alert("Enter Your proper name.");
       
//     }
//     else{
//         userGroup.classList.add('hide');
        
       
//     }
// }


// function startgame(){
//     restart.classList.add('hide');
//     questionContainer.classList.remove('hide');
    
//     shuffle = quizDB.sort(()=> Math.random() - .5);
//     current =0;
    
//    next();
    
// }

// function next(){
//     reset();
//     showquestion(shuffle[current]);
// }

// function showquestion(question){
//     questionElement.innerText =question.question;
//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('opt-btn');
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
            
            
//         }

//         button.addEventListener('click', selectanswer)
//         answerBtn.appendChild(button)
        
//     });

// }

// function selectanswer(e){
//     const selected = e.target;
//     const correct = selected.dataset.correct;
//     setStatus(document.body,correct)
//     Array.from(answer.children).forEach(button =>{
//         setStatus(button, button.dataset.correct)

        
//     })
//     if(shuffle.length>current+1){
//         nextBtn.classList.remove('hide');

        
//     }
//     else{
//         restart.classList.remove('hide');

//         questionContainer.classList.add('hide');

//     }
    
    
// }

// function setStatus(element,correct){
    
//     clearStatus(element);
//     if(correct){
//         element.classList.add('correct');
        
//     }
//     else{
//         element.classList.add('wrong');
//     }
// }


// function clearStatus(element){
//     element.classList.remove('correct');
//     element.classList.remove('wrong');
// }


// function reset(){
//     clearStatus(document.body)
//     nextBtn.classList.add('hide');
//     while(answerBtn.firstChild){
//         answerBtn.removeChild(answerBtn.firstChild)
//     }
// }