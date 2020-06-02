const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  'What do you listen to while doing that? ',
  'Which meal is your favourite (eg: dinner, brunch, etc.) ',
  "What's your favourite thing to eat for that meal? ",
  'Which sport is your absolute favourite? ',
  'What is your superpower? In a few words, tell us what you are amazing at! ',
];

const answers = [];

rl.question(questions[0], (answer) => {
  answers.push(answer);
  rl.question(questions[1], (answer) => {
    answers.push(answer);
    rl.question(questions[2], (answer) => {
      answers.push(answer);
      rl.question(questions[3], (answer) => {
        answers.push(answer);
        rl.question(questions[4], (answer) => {
          answers.push(answer);
          rl.question(questions[5], (answer) => {
            answers.push(answer);
            rl.question(questions[6], (answer) => {
              console.log();
              for (let i = 0; i < answers.length; i++) {
                console.log(`${questions[i]}: ${answers[i]}`);
              }
              rl.close();
            });
          });
        });
      });
    });
  });
});
