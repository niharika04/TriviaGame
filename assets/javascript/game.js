var panel = $('#quiz-area');




//CLICK EVENTS




$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});



//Question set




var questions = [{
  question: "1 . What is Doug's last name?",
  answers: ["Funnie", "Skeeter", "Johnson", "April"],
  correctAnswer: "Funnie"
}, {
  question: "2 . What song do Ren and Stimpy sing to make people more cheerful?",
  answers: ["Cheery Uppy", "Happy Happy Joy Joy", "Fun Fun Cheer Smile", "Let's Spread The Joy"],
  correctAnswer: "Happy Happy Joy Joy"
}, {
  question: "3 . What kind of animal is Rocko (from Rocko's Modern Life)?",
  answers: ["mongoose", "dog", "wallaby", "cat"],
  correctAnswer: "wallaby"
}, {
  question: "4 . In Dexter's Laboratory, what is Dexter's sister's name?",
  answers: ["Dorothy", "Deedee", "Dolly", "Doju"],
  correctAnswer: "Deedee"
}, {
  question: "5 . In the Angry Beavers, which brother is named Norbert?",
  answers: ["the beaver with darker fur", "the beaver with lighter fur", "no brother is named Norbert", "both were named Norbert"],
  correctAnswer: "the beaver with lighter fur"
}, {
  question:  "6 . What TV network did Johnny Bravo first air on?",
  answers: ["Cartoon Network", "Nickelodeon", "PBS Kids", "Pogo"],
  correctAnswer: "Cartoon Network"
}, {
  question: "7 . What occupation do Courage's owners hold?",
  answers: ["business executives", "farmers", "quilters", "Jobless"],
  correctAnswer: "farmers"
}, {
  question: "8 . Who created the Powerpuff Girls?",
  answers: ["Professur Mercurium", "Professor Plutonium", "Professor Germanium", "Professor Utonium"],
  correctAnswer: "Professor Utonium"
}];

//creating an object game
var game = {
  correct:0,
  incorrect:0,
  counter:90,
//game timer  
  decrement: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log("TIME'S UP!");
      game.done();
    }
  },
 // start function  
  start: function() {
    timer = setInterval(game.decrement, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">90</span> Seconds</h2>');
    $('#start').remove();

//for loop to show questions and answer choices(using append to follow the flow - questions-answechoices-button done)
    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {

//answer evaluation
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');


  }

};