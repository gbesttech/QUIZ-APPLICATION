const quizDB = [
    {
        question: "In 1768, Captain James Cook set out to explore which ocean?",
        a: "Pacific Ocean",
        b: "Atlantic Ocean",
        c: "Indian Ocean",
        d: "Arctic Ocean",
        ans: "ans1"  
    },
    {
        question: "What is actually electricity?",
        a: "A flow of water",
        b: "A flow of air",
        c: "A flow of electrons",
        d: "A flow of atoms",
        ans: "ans3"
    },
    {
        question: "Which of the following is not an international organisation?",
        a: "FIFA",
        b: "NATO",
        c: "ASEAN",
        d: "FBI",
        ans: "ans4"
    },
    {
        question: "Which of the following disorders is the fear of being alone?",
        a: "Agoraphobia",
        b: "Aerophobia",
        c: "Acrophobia",
        d: "Arachnophobia",
        ans: "ans1"
    },
    {
        question: "What is the speed of sound?",
        a: "120 km/h",
        b: "1,200 km/h",
        c: "400 km/h",
        d: "700 km/h",
        ans: "ans2"
    },
    {
        question: "Which is the easiest way to tell the age of many trees?",
        a: "To measure the width of the tree",
        b: "To count the rings on the trunk",
        c: "To count the number of leaves",
        d: "To measure the height of the tree",
        ans: "ans2"
    },
    {
        question: "What do we call a newly hatched butterfly?",
        a: "A moth",
        b: "A butter",
        c: "A caterpillar",
        d: "A chrysalis",
        ans: "ans3"
    },
    {
        question: "In total, how many novels were written by the Bronte sisters?",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
        ans: "ans1", 
    },
    {
        question: "What was the first country to use battle tanks in combat during World War I?",
        a: "France",
        b: "Japan",
        c: "Britain",
        d: "Germany",
        ans: "ans3"
    },
    {
        question: "Which two months are named after Emperors of the Roman Empire?",
        a: "January and February",
        b: "March and April",
        c: "May and June",
        d: "July and August",
        ans: "ans4"
    },

];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = ()  => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const deselectALL = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}


const getcheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

    });

     return answer;

};



submit.addEventListener('click', () => {
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectALL();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length}
        `;

        showScore.classList.remove('scoreArea')
    }


});