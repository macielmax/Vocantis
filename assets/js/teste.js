const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answers-buttons");
const nextButton = document.querySelector("#next-btn");
const questionNumber = document.querySelector("#question-number");
const progressElement = document.querySelector("#progresso");
const currentProgress = document.querySelector("#progresso-atual");
const backButton = document.querySelector("#back-btn");
const readyMessage = document.querySelector(".pronto-mensagem");

const questions = [
    {
        question: "O que mais te motiva em uma atividade profissional?",
        answers: [
            { id: 1, text: "Liderar equipes e projetos"},
            { id: 2, text: "Ajudar e orientar outras pessoas"},
            { id: 3, text: "Trabalhar com dados e números"},
            { id: 4, text: "Criar algo novo e inovador"},
            { id: 5, text: "Resolver problemas complexos e desafiadores"}
        ],
    },
    {
        question: "Em qual ambiente você se sente mais produtivo?",
        answers: [
            { id: 1, text: "Laboratório ou ambiente técnico"},
            { id: 2, text: "Escritório colaborativo"},
            { id: 3, text: "Estúdio criativo ou ateliê"},
            { id: 4, text: "Sala de aula ou espaço educativo"},
            { id: 5, text: "Ao ar livre ou em campo"}
        ],
    },
    {
        question: "Qual dessas ações você faria voluntariamente no tempo livre?",
        answers: [
            { id: 1, text: "Programar um aplicativo ou site"},
            { id: 2, text: "Organizar eventos comunitários"},
            { id: 3, text: "Desenhar, pintar ou fazer música"},
            { id: 4, text: "Dar aulas ou explicar conceitos"},
            { id: 5, text: "Analisar investimentos ou mercado"}
        ],
    },
    {
        question: "Como você prefere aprender coisas novas?",
        answers: [
            { id: 1, text: "Experimentando e testando na prática"},
            { id: 2, text: "Estudando teoria e conceitos"},
            { id: 3, text: "Observando e imitando outros"},
            { id: 4, text: "Criando meus próprios métodos"},
            { id: 5, "text": "Discutindo em grupo"}
        ],
    },
    {
        question: "Qual dessas conquistas te deixaria mais orgulhoso?",
        answers: [
            { id: 1, text: "Desenvolver uma tecnologia inovadora"},
            { id: 2, text: "Impactar positivamente a vida de muitas pessoas"},
            { id: 3, text: "Criar uma obra de arte reconhecida"},
            { id: 4, text: "Construir um negócio de sucesso"},
            { id: 5, text: "Descobrir algo importante para a ciência"}
        ],
    },
    {
        question: "Em um projeto em grupo, qual papel você naturalmente assume?",
        answers: [
            { id: 1, text: "O planejador que organiza tudo"},
            { id: 2, text: "O mediador que mantém a harmonia"},
            { id: 3, text: "O criativo que gera ideias"},
            { id: 4, text: "O executor que coloca a mão na massa"},
            { id: 5, text: "O líder que toma as decisões"}
        ],
    },
    {
        question: "Qual dessas matérias sempre despertou seu interesse?",
        answers: [
            { id: 1, text: "Matemática e Física"},
            { id: 2, text: "História e Sociologia"},
            { id: 3, text: "Artes e Literatura"},
            { id: 4, text: "Biologia e Química"},
            { id: 5, text: "Geografia e Economia"}
        ],
    },
    {
        question: "Como você imagina seu dia de trabalho ideal?",
        answers: [
            { id: 1, text: "Resolvendo problemas técnicos complexos"},
            { id: 2, text: "Interagindo com pessoas diferentes"},
            { id: 3, text: "Criando e desenvolvendo projetos únicos"},
            { id: 4, text: "Criar algo novo e inovador"},
            { id: 5, text: "Resolver problemas complexos e desafiadores"}
        ],
    },
];

let currentQuestionIndex = 0;
let userAnswers = []; 

function startTest() {
    currentQuestionIndex = 0;
    userAnswers = [];
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    readyMessage.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();

    if (currentQuestionIndex === 0) {
        backButton.disabled = true;
    } else {
        backButton.disabled = false;
    }

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    let progressPercent = (currentQuestionIndex / questions.length) * 100;
    
    progressElement.innerHTML = `${Math.round(progressPercent)}% Concluído`;
    currentProgress.style.width = `${progressPercent}%`;

    questionNumber.innerHTML = `Pergunta ${questionNo} de ${questions.length}`;
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id; 
        button.classList.add("btn-opcao");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    
    selectedBtn.classList.add("btn-opcao-active"); 
    
    userAnswers[currentQuestionIndex] = selectedBtn.dataset.id;

    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });

    nextButton.style.display = "flex";
    readyMessage.style.display = "flex";
}

function redirecionar() {
    window.location.href = "resultado.html";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        redirecionar();
    }
}

function handleBackButton() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

backButton.addEventListener("click", () => {
    handleBackButton();
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        redirecionar();
    }
});

startTest();