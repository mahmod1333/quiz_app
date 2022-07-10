const quiz = [
    {
        question: "What is the capital of the United States?",
        answers: ["Washington", "New York", "Los Angeles", "Chicago"],
        correctAnswer: "Washington",
    },
    {
        question: "What is the capital of the United Kingdom?",
        answers: ["London", "Paris", "Berlin", "Rome"],
        correctAnswer: "London",
    },
    {
        question: "how old is the sun?",
        answers: ["1 million years old", 
        "1 billion years old", 
        "1 trillion years old", 
        "1 quadrillion years old"
    ],
        correctAnswer: "1 billion years old",
    },   {
        question: "what is ui in react?",
        answers: ["user interface", "user input", "user interface", "user interface"],
        correctAnswer: "user interface",
    },   {
        question: "what is state in react?",
        answers: ["tool","object","variable","property"],
        correctAnswer: "property",
    }];
    const quiz_content = document.querySelector(".quiz-header");
 const question = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const btn = document.getElementById("btn");
    let currentQuestion = 0;
    const quizlod = () => {
        question.innerHTML = quiz[currentQuestion].question;
        a_text.innerHTML = quiz[currentQuestion].answers[0];
        b_text.innerHTML = quiz[currentQuestion].answers[1];
        c_text.innerHTML = quiz[currentQuestion].answers[2];
        d_text.innerHTML = quiz[currentQuestion].answers[3];
    }
    quizlod();
    btn.addEventListener("click", () => {
        if (quiz[currentQuestion].answers[0] === quiz[currentQuestion].correctAnswer) {
            alert("correct");
        } else {
            alert("wrong");
        }
        currentQuestion++;
        if (currentQuestion === quiz.length) {
       quiz_content.innerHTML = "<h2>you are done</h2>";
         btn.innerHTML = "Restart";
         btn.addEventListener("click", () => {
            location.reload();
         }
         )

        }
        quizlod();
    }
    );

      
