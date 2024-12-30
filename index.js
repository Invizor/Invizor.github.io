const questionsStruct = {
  first: {
    questions: [
      {
        text: 'Ёлка/Сосна/Пихта/Ель',
        number: 34,
        open: false,
      },
      {
        text: 'Общественные места/город/офис',
        number: 14,
        open: false,
      },
      {
        text: 'Квартира/дом/подъезд',
        number: 10,
        open: false,
      },
      {
        text: 'Транспорт',
        number: 9,
        open: false,
      },
      {
        text: 'Себя/Детей',
        number: 8,
        open: false,
      },
      {
        text: 'Помогите/устал/не знаю',
        number: 7,
        open: false,
      },
      {
        text: 'Песни от Игната',
        number: 6,
        open: false,
      },
      {
        text: 'Новогодний стол/блюда',
        number: 5,
        open: false,
      },
      {
        text: 'Окна',
        number: 4,
        open: false,
      },
      {
        text: 'Кошки/собаки',
        number: 3,
        open: false,
      }
    ],
    missFirst: 0,
    missSecond: 0
  },
  second: {
    questions: [
      {
        text: 'Философия от Алефтины',
        number: 19,
        open: false,
      },
      {
        text: 'Одежда/техника/мебель',
        number: 18,
        open: false,
      },
      {
        text: 'Мужчина/отец детей',
        number: 17,
        open: false,
      },
      {
        text: 'Что приготовить',
        number: 13,
        open: false,
      },
      {
        text: 'Чем заняться/куда сходить',
        number: 8,
        open: false,
      },
      {
        text: 'Профессия',
        number: 7,
        open: false,
      },
      {
        text: 'Поругаться или сдержаться',
        number: 6,
        open: false,
      },
      {
        text: 'Не знаю',
        number: 5,
        open: false,
      },
      {
        text: 'Дети',
        number: 4,
        open: false,
      },
      {
        text: 'Карьера или дом',
        number: 3,
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



