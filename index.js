const questionsStruct = {
  first: {
    questions: [
      {
        text: 'Тестовый ответ',
        number: 31,
        open: false,
      },
      {
        text: 'Тестовый ответ',
        number: 22,
        open: false,
      },
      {
        text: 'Тестовый ответ',
        number: 15,
        open: false,
      },
      {
        text: 'Тестовый ответ',
        number: 10,
        open: false,
      },
      {
        text: 'Тестовый ответ',
        number: 7,
        open: false,
      },
      {
        text: 'Тестовый ответ',
        number: 5,
        open: false,
      },
      {
        text: 'Тестовый ответ',
        number: 3,
        open: false,
      },
      {
        text: 'Тестовый ответ',
        number: 1,
        open: false,
      }
    ],
    missFirst: 0,
    missSecond: 0
  },
  second: {
    questions: [
      {
        text: 'Тестовый ответ 2',
        number: 31,
        open: false,
      },
      {
        text: 'Тестовый ответ 2',
        number: 22,
        open: false,
      },
      {
        text: 'Тестовый ответ 2',
        number: 15,
        open: false,
      },
      {
        text: 'Тестовый ответ 2',
        number: 10,
        open: false,
      },
      {
        text: 'Тестовый ответ 2',
        number: 7,
        open: false,
      },
      {
        text: 'Тестовый ответ 2',
        number: 5,
        open: false,
      },
      {
        text: 'Тестовый ответ 2',
        number: 3,
        open: false,
      },
      {
        text: 'Тестовый ответ 2',
        number: 1,
        open: false,
      }
    ],
    missFirst: 0,
    missSecond: 0
  }
}

let currentLevel = 'first';

function calculate() {
  const {questions, missFirst, missSecond} = questionsStruct[currentLevel];

  const tableElem = document.getElementsByClassName('table')[0];
  const itemElements = tableElem.getElementsByClassName('item');
  const itemOpenedElements = tableElem.getElementsByClassName('item opened');

  [...itemElements].forEach(el => el.remove());
  [...itemOpenedElements].forEach(el => el.remove());

  console.log("questions", questions);

  for (let i = 0; i < questions.length; i++) {
    if (!questions[i].open) {
      tableElem.innerHTML += `<div class="item"><div class="text">${i+1}</div></div>`
    } else {
      tableElem.innerHTML += `<div class="item opened"><div class="text">${questions[i].text}</div><div class="number">${questions[i].number}</div></div>`
    }
  }

  const missedLeftElemWrapper = document.getElementsByClassName('miss-left-wrapper')[0];
  const missedLeftElements = missedLeftElemWrapper.getElementsByClassName('miss-left');

  [...missedLeftElements].forEach(el => el.remove());

  for (let i = 0; i < 3; i++) {
    if (missFirst - 1 >= i) {
      missedLeftElemWrapper.innerHTML += `<div class="miss-left selected">X</div>`
    } else {
      missedLeftElemWrapper.innerHTML += `<div class="miss-left">X</div>`
    }
  }

  const missedRightElemWrapper = document.getElementsByClassName('miss-right-wrapper')[0];
  const missedRightElements = missedRightElemWrapper.getElementsByClassName('miss-right');

  [...missedRightElements].forEach(el => el.remove());

  for (let i = 0; i < 3; i++) {
    if (missSecond - 1 >= i) {
      missedRightElemWrapper.innerHTML += `<div class="miss-right selected">X</div>`
    } else {
      missedRightElemWrapper.innerHTML += `<div class="miss-right">X</div>`
    }
  }

  addEventListeners();
}

function addEventListeners() {
  [...document.getElementsByClassName('miss-right')].forEach((elem, index) => {
    elem.addEventListener('click', (ev) => {
      questionsStruct[currentLevel].missSecond++;
      calculate();
    })
  });

  [...document.getElementsByClassName('miss-left')].forEach((elem, index) => {
    elem.addEventListener('click', (ev) => {
      questionsStruct[currentLevel].missFirst++;
      calculate();
    })
  });

  [...document.getElementsByClassName('item')].forEach((elem, index) => {
    elem.addEventListener('click', (ev) => {
      console.log("index", index);
      questionsStruct[currentLevel].questions[index].open = !questionsStruct[currentLevel].questions[index].open;
      calculate();
    })
  });
}

function clearData() {
  questionsStruct.first.missFirst = 0;
  questionsStruct.first.missSecond = 0;
  questionsStruct.first.questions.forEach(question => {
    question.open = false;
  })
  questionsStruct.second.missFirst = 0;
  questionsStruct.second.missSecond = 0;
  questionsStruct.second.questions.forEach(question => {
    question.open = false;
  })
}

document.getElementsByClassName('first-level')[0].addEventListener('click', () => {
  currentLevel = 'first';
  clearData()
  calculate();
})

document.getElementsByClassName('second-level')[0].addEventListener('click', () => {
  currentLevel = 'second';
  clearData();
  calculate();
})

calculate();



