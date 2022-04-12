const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name?  ', (answer) => {
  console.log(`Nice to meet you ${answer}`);
  rl.question('What\'s an activity you like doing? ', (answer1) => {
    console.log(`Sounds fun`);
    rl.question('What do you listen to while doing that? ', (answer2) => {
      console.log(`You have a good taste in music ${answer}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
        console.log(`Me too`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {
          console.log(`Yum`);
          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            console.log(`So you're an athlete I see`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
              console.log(` ${answer} loves to ${answer1} while listening to ${answer2}, during ${answer3} they eat ${answer4}, they enjoy the sport of ${answer5} over any other, and they have a knack for ${answer6}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});