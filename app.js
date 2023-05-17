// by selecting the elements within the element

const questions = document.querySelectorAll(".question");
// console.log(questions);
questions.forEach(function (question) {
  // console.log(question);
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // to hide the answer on other items/questions
    questions.forEach(function (item) {
      // console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    // to show the answer text and minus icon on the button clicked question
    question.classList.toggle("show-text");
  });
});

// by traversing the dom

// const questionBtns = document.querySelectorAll(".question-btn");

// questionBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
