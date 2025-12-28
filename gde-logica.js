let currentIndex = 0;

const questions = [
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 1',
        images: [
            './images/gde-logica/question-1-1/1.jpg',
            './images/gde-logica/question-1-1/2.png',
            './images/gde-logica/question-1-1/3.png'
        ],
        answer: 'Кольцо'
    },
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 2',
        images: [
            './images/gde-logica/question-1-2/1.png',
            './images/gde-logica/question-1-2/2.png',
            './images/gde-logica/question-1-2/3.png'
        ],
        answer: 'Джакузи'
    }
]

function calculate() {
    const {title, subtitle, images, answer} = questions[currentIndex];

    const titleElem = document.getElementsByClassName('title')[0];
    titleElem.innerHTML = `${title}`;
    const subtitleElem = document.getElementsByClassName('subtitle')[0];
    subtitleElem.innerHTML = `${subtitle}`;
    const answerElem = document.getElementsByClassName('answer')[0];
    answerElem.innerHTML = `${answer}`;

    const cards = document.getElementsByClassName('card');
    [...cards].forEach(el => el.remove());

    const width = (window.innerWidth - 200 * Math.max(1, window.innerWidth / 800)) / images.length;

    const content = document.getElementsByClassName('content')[0];

    for (let i = 0; i < images.length; i++) {
        content.innerHTML += `<img class="card" src="${images[i]}" width="${width}" />`
    }

    addEventListeners();
}

function addEventListeners() {
    document.getElementsByClassName('prev')[0].addEventListener('click', (ev) => {
        currentIndex = Math.max(0, currentIndex - 1);
        calculate();
    })
    document.getElementsByClassName('next')[0].addEventListener('click', (ev) => {
        currentIndex = Math.min(currentIndex + 1, questions.length - 1);
        calculate();
    })
}

calculate();