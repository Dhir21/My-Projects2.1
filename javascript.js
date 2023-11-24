
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Who ruined Eren's equipment back in the trainee days?",
      answers: {
        a: "Mikasa Ackerman",
        b: "Keith Shadis",
        c: "Historia Reiss",
        d: "Sasha Blouse"
      },
      correctAnswer: "b"
    },
    {
      question: "What's the name of Jean's horse?",
      answers: {
        a: "Chibi",
        b: "Shallot",
        c: "Bufpart",
        d: "Jeanbo"
      },
      correctAnswer: "c"
    },
    {
      question: "What was the name of Levi's mother?",
      answers: {
        a: "Yeager",
        b: "Kuchel",
        c: "Carla",
        d: "Grisha"
      },
      correctAnswer: "c"
    },
    {
      question: "What are the walls protecting humanity called?",
      answers: {
        a: "Maria, Rose, and Sina",
        b: "Maria, Linda, and Shiganshina",
        c: "Maria, Sheena, and Rose",
        d: "Maria, Shiganshina, and Walla"
      },
      correctAnswer: "a"
    },
    {
      question: "The Beast Titan is a __ Meter Class.",
      answers: {
        a: "15",
        b: "18",
        c: "17",
        d: "16"
      },
      correctAnswer: "c"
    },
    {
      question: "Who is the Titan known as the 'Beast Titan'?",
      answers: {
        a: "Reiner Braun",
        b: "Bertholdt Hoover",
        c: "Zeke Yeager",
        d: "Porco Galliard"
      },
      correctAnswer: "c"
    },
    {
      question: "Which character is obsessed with cleaning?",
      answers: {
        a: "Connie Springer",
        b: "Sasha Blouse",
        c: "Levi Ackerman",
        d: "Oluo Bozado"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the first member of Levi's squad to be killed by Annie, the Female Titan?",
      answers: {
        a: "Petra",
        b: "Pieck",
        c: "Gunther",
        d: "Historia"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the name of the colossal titan shifter?",
      answers: {
        a: "Bertholdt Hoover",
        b: "Reiner Braun",
        c: "Porco Galliard",
        d: "Falco Grice"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the primary objective of the Survey Corps?",
      answers: {
        a: "Protecting the Walls",
        b: "Exploring the Outside World",
        c: "Enforcing Military Law",
        d: "Researching Titan Biology"
      },
      correctAnswer: "b"
    },
    {
      question: "For how many years did Ymir wander outside of the Walls as a Titan?",
      answers: {
        a: "60",
        b: "50",
        c: "40",
        d: "70"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the name of Eren's adoptive sister?",
      answers: {
        a: "Mikasa Ackerman",
        b: "Annie Leonhart",
        c: "Historia Reiss",
        d: "Sasha Blouse"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the name of the newspaper headquarters in Stohess district?",
      answers: {
        a: "Berg Newspaper",
        b: "Beaure Newspaper",
        c: "Roy Newspaper",
        d: "Stohess Newapaper"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the name of the town where the story begins?",
      answers: {
        a: "Shiganshina",
        b: "Trost",
        c: "Stohess",
        d: "Karanes"
      },
      correctAnswer: "a"
    },
    {
      question: "What did Carla do for living before she met Grisha?",
      answers: {
        a: "A Soldier",
        b: "A Waitress",
        c: "A Doctor",
        d: "A Teacher"
      },
      correctAnswer: "b"
    }
    // Add more questions here if needed
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  const audio = new Audio('Akuma_no_ko2.ogg');
  audio.loop = true;
  audio.volume = 0.5;
  // Function to play the audio
  function playAudio() {
    audio.play();
    // Remove the event listener after the audio starts playing
    document.removeEventListener('click', playAudio);
  }
  
  // Attach an event listener to a user action (click)
  document.addEventListener('click', playAudio);
// Select the GIF container
const gifContainer = document.querySelector('.gif-container');

// You can dynamically add the GIF as needed or use CSS to set it as a background
gifContainer.style.backgroundImage = 'url("https://media.giphy.com/media/Ku1FyPdoBXVg4/giphy.gif")';


