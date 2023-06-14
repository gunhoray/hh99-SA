const numbers = Array(10).fill().map((item, index) => index * 1);
const random = [];

while (numbers.length > 0) {
  const num = Math.floor(Math.random() * numbers.length);
  const newArr = numbers.splice(num, 1);
  const value = newArr[0];
  random.push(value);
}

const picked = random.splice(0, 3);

let findMatch = function(picked, answer) {
  const pickedString = picked.join('');
  const answerString = answer.toString();
  let result = '';

  if (inputString.length !== 3) {
    result = '3자리 숫자만 입력하세요.';
  } else if (isNaN(answerString)) {
    result = '유효한 문자만 입력하세요.';
  } else {
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < 3; i++) {
      if (pickedString.includes(answerString[i])) {
        if (pickedString[i] === answerString[i]) {
          strikes++;
        } else {
          balls++;
        }
      }
    }

    result = `${balls}B${strikes}S`;
  }

  return result;
};

let attempts = 0;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const playGame = function() {
  rl.question('숫자를 입력하세요: ', function(answer) {
    attempts++;

    const result = findMatch(picked, answer);
    console.log(result);

    if (result === '3S') {
      console.log(`${attempts}번만에 맞히셨습니다.`);
      console.log('게임을 종료합니다.');
      rl.close();
    } else {
      playGame();
    }
  });
};

console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');
playGame();