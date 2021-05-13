const quiz = [
  {
    question:"Nice to meet you! Which of the following is my name?",
    answers: [
    "Brad Pitt",
    "Shun",
    "Lady Gaga",
    "Justin Bieber"],
    correct: "Shun"
  },
  {
    question:"Which of the following is my age?",
    answers: [
    "23",
    "33",
    "43",
    "53"],
    correct: "33"
  },
  {
    question:"Which of the following is my favorite Japanese anime?",
    answers: [
    "DRAGON BALL",
    "Detective Conan",
    "ONE PIECE",
    "Pretty Guardian Sailor Moon"],
    correct: "DRAGON BALL"
  },
  {
    question:"Which of the following has I been studying since the beginning of this year?",
    answers: [
    "Programming",
    "Cooking",
    "Martial arts",
    "Science"],
    correct: "Programming"
  },
  {
    question:"Who do I live with?",
    answers: [
    "Parents",
    "Wife & two dogs",
    "Friends",
    "Lots of girlfriends"],
    correct: "Wife & two dogs"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}

setupQuiz();

//たぶんここから

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("Correct answer！");
    score++;
  } else {
    window.alert("Incorrect answer！ The correct answer was「" + quiz[quizIndex].correct + "」！");
  }

  quizIndex++;
//ここまで


  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert("Finished！The number of your correct answers was" + score + "/" + quizLength + "！")
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
   });
  handlerIndex++;
}
