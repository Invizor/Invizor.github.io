let currentIndex = 41;

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
    },
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 3',
        images: [
            './images/gde-logica/question-1-3/1.png',
            './images/gde-logica/question-1-3/2.png',
            './images/gde-logica/question-1-3/3.png'
        ],
        answer: 'Бочка'
    },
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 4',
        images: [
            './images/gde-logica/question-1-4/1.png',
            './images/gde-logica/question-1-4/2.png',
            './images/gde-logica/question-1-4/3.png'
        ],
        answer: 'Покер'
    },
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 5',
        images: [
            './images/gde-logica/question-1-5/1.png',
            './images/gde-logica/question-1-5/2.png',
            './images/gde-logica/question-1-5/3.png'
        ],
        answer: 'Муравей'
    },
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 6',
        images: [
            './images/gde-logica/question-1-6/1.png',
            './images/gde-logica/question-1-6/2.png',
            './images/gde-logica/question-1-6/3.png'
        ],
        answer: 'Нунчаки'
    },
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 7',
        images: [
            './images/gde-logica/question-1-7/1.png',
            './images/gde-logica/question-1-7/2.png',
            './images/gde-logica/question-1-7/3.png'
        ],
        answer: 'Револьвер'
    },
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 8',
        images: [
            './images/gde-logica/question-1-8/1.png',
            './images/gde-logica/question-1-8/2.png',
            './images/gde-logica/question-1-8/3.png'
        ],
        answer: 'Фокус'
    },
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 9',
        images: [
            './images/gde-logica/question-1-9/1.png',
            './images/gde-logica/question-1-9/2.png',
        ],
        answer: 'Чемпион'
    },
    {
        title: 'Раунд 1',
        subtitle: 'Вопрос 10',
        images: [
            './images/gde-logica/question-1-10/1.png',
            './images/gde-logica/question-1-10/2.png',
            './images/gde-logica/question-1-10/3.png'
        ],
        answer: 'Сестра'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 1',
        images: [
            './images/gde-logica/question-2-1/1.png',
            './images/gde-logica/question-2-1/2.png',
        ],
        answer: 'Без лица',
        answerImage: './images/gde-logica/question-2-1/3.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 2',
        images: [
            './images/gde-logica/question-2-2/1.png',
            './images/gde-logica/question-2-2/2.png',
        ],
        answer: 'Завтрак у Тиффани',
        answerImage: './images/gde-logica/question-2-2/3.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 3',
        images: [
            './images/gde-logica/question-2-3/1.png',
            './images/gde-logica/question-2-3/2.png',
            './images/gde-logica/question-2-3/3.png',
        ],
        answer: 'Черный плащ',
        answerImage: './images/gde-logica/question-2-3/4.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 4',
        images: [
            './images/gde-logica/question-2-4/1.png',
            './images/gde-logica/question-2-4/2.png',
            './images/gde-logica/question-2-4/3.png',
        ],
        answer: 'Гладиатор',
        answerImage: './images/gde-logica/question-2-4/4.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 5',
        images: [
            './images/gde-logica/question-2-5/1.png',
            './images/gde-logica/question-2-5/2.png',
            './images/gde-logica/question-2-5/3.png',
        ],
        answer: 'Зачарованные',
        answerImage: './images/gde-logica/question-2-5/4.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 6',
        images: [
            './images/gde-logica/question-2-6/1.png',
            './images/gde-logica/question-2-6/2.png',
            './images/gde-logica/question-2-6/3.png',
        ],
        answer: 'Зеленая миля',
        answerImage: './images/gde-logica/question-2-6/4.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 7',
        images: [
            './images/gde-logica/question-2-7/1.png',
            './images/gde-logica/question-2-7/2.png',
            './images/gde-logica/question-2-7/3.png',
        ],
        answer: 'Миньоны',
        answerImage: './images/gde-logica/question-2-7/4.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 8',
        images: [
            './images/gde-logica/question-2-8/1.png',
            './images/gde-logica/question-2-8/2.png',
            './images/gde-logica/question-2-8/3.png',
        ],
        answer: 'Тайна Коко',
        answerImage: './images/gde-logica/question-2-8/4.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 9',
        images: [
            './images/gde-logica/question-2-9/1.png',
            './images/gde-logica/question-2-9/2.png',
            './images/gde-logica/question-2-9/3.png',
        ],
        answer: 'Пираты Карибского моря',
        answerImage: './images/gde-logica/question-2-9/4.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 10',
        images: [
            './images/gde-logica/question-2-10/1.png',
            './images/gde-logica/question-2-10/2.png',
            './images/gde-logica/question-2-10/3.png',
        ],
        answer: 'Принц персии: пески времени',
        answerImage: './images/gde-logica/question-2-10/4.png'
    },
    {
        title: 'Раунд 2',
        subtitle: 'Вопрос 11',
        images: [
            './images/gde-logica/question-2-11/1.png',
            './images/gde-logica/question-2-11/2.png',
            './images/gde-logica/question-2-11/3.png',
        ],
        answer: 'Мулан',
        answerImage: './images/gde-logica/question-2-11/4.png'
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 1',
        images: [
            './images/gde-logica/question-3-1/1.png',
            './images/gde-logica/question-3-1/2.png',
        ],
        answer: 'Резать без ножа',
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 2',
        images: [
            './images/gde-logica/question-3-2/1.png',
            './images/gde-logica/question-3-2/2.png',
        ],
        answer: 'Всыпать по первое число',
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 3',
        images: [
            './images/gde-logica/question-3-3/1.png',
            './images/gde-logica/question-3-3/2.png',
        ],
        answer: 'Дуракам закон не писан',
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 4',
        images: [
            './images/gde-logica/question-3-4/1.png',
            './images/gde-logica/question-3-4/2.png',
            './images/gde-logica/question-3-4/3.png',
        ],
        answer: 'Индюк тоже думал, да в суп попал',
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 5',
        images: [
            './images/gde-logica/question-3-5/1.png',
            './images/gde-logica/question-3-5/2.png',
            './images/gde-logica/question-3-5/3.png',
        ],
        answer: 'Кто в лес, кто по дрова',
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 6',
        images: [
            './images/gde-logica/question-3-6/1.png',
            './images/gde-logica/question-3-6/2.png',
        ],
        answer: 'Что упало, то пропало',
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 7',
        images: [
            './images/gde-logica/question-3-7/1.png',
            './images/gde-logica/question-3-7/2.png',
            './images/gde-logica/question-3-7/3.png',
        ],
        answer: 'Дурная голова ногам покоя не даёт',
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 8',
        images: [
            './images/gde-logica/question-3-8/1.png',
            './images/gde-logica/question-3-8/2.png',
            './images/gde-logica/question-3-8/3.png',
        ],
        answer: 'Пролетая, как фанера над Парижем',
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 9',
        images: [
            './images/gde-logica/question-3-9/1.png',
            './images/gde-logica/question-3-9/2.png',
            './images/gde-logica/question-3-9/3.png',
        ],
        answer: 'На ловца и зверь бежит',
    },
    {
        title: 'Раунд 3',
        subtitle: 'Вопрос 10',
        images: [
            './images/gde-logica/question-3-10/1.png',
            './images/gde-logica/question-3-10/2.png',
            './images/gde-logica/question-3-10/3.png',
        ],
        answer: 'Один в поле не воин',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 1',
        images: [
            './images/gde-logica/question-4-1/1.png',
            './images/gde-logica/question-4-1/2.png',
            './images/gde-logica/question-4-1/3.png',
        ],
        answer: 'Отпетые мошенники - А у реки гуляют девки, гуляют мужики',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 2',
        images: [
            './images/gde-logica/question-4-2/1.png',
            './images/gde-logica/question-4-2/2.png',
            './images/gde-logica/question-4-2/3.png',
        ],
        answer: 'Корни - А я теряю корни, улетаю в небо...',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 3',
        images: [
            './images/gde-logica/question-4-3/1.png',
            './images/gde-logica/question-4-3/2.png',
            './images/gde-logica/question-4-3/3.png',
        ],
        answer: 'Лобода - Твои глаза, такие чистые как небо...',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 4',
        images: [
            './images/gde-logica/question-4-4/1.png',
            './images/gde-logica/question-4-4/2.png',
            './images/gde-logica/question-4-4/3.png',
        ],
        answer: 'Монатик - Кружит голову ай до упаду...',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 5',
        images: [
            './images/gde-logica/question-4-5/1.png',
            './images/gde-logica/question-4-5/2.png',
            './images/gde-logica/question-4-5/3.png',
        ],
        answer: 'Artic & Asti - Под грустный дэнс я отпускаю нашу любовь...',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 6',
        images: [
            './images/gde-logica/question-4-6/1.png',
            './images/gde-logica/question-4-6/2.png',
            './images/gde-logica/question-4-6/3.png',
        ],
        answer: 'The Rolling Stones - I see a red door and I want it painted black',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 7',
        images: [
            './images/gde-logica/question-4-7/1.png',
            './images/gde-logica/question-4-7/2.png',
            './images/gde-logica/question-4-7/3.png',
        ],
        answer: 'Максим Леонидов - я оглянулся посмотреть не оглянулась ли она...',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 8',
        images: [
            './images/gde-logica/question-4-8/1.png',
            './images/gde-logica/question-4-8/2.png',
            './images/gde-logica/question-4-8/3.png',
        ],
        answer: 'Жанна Фриске - сяду в машину, поеду по серпантину...',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 9',
        images: [
            './images/gde-logica/question-4-9/1.png',
            './images/gde-logica/question-4-9/2.png',
            './images/gde-logica/question-4-9/3.png',
        ],
        answer: 'Елена Ваенга - снова стою одна, снова курю мама снова, а вокруг тишина...',
    },
    {
        title: 'Раунд 4',
        subtitle: 'Вопрос 10',
        images: [
            './images/gde-logica/question-4-10/1.png',
            './images/gde-logica/question-4-10/2.png',
            './images/gde-logica/question-4-10/3.png',
        ],
        answer: 'Ленинград - на лабутенах нах и в восхитительных штанах...',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 1. Какой фразеологизм здесь зашифрован?',
        images: [
            './images/gde-logica/question-5-1/1.png',
            './images/gde-logica/question-5-1/2.png',
        ],
        answer: 'Влюбиться по уши',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 2. Какая песня?',
        images: [
            './images/gde-logica/question-5-1/1.png',
            './images/gde-logica/question-5-2/2.png',
            './images/gde-logica/question-5-2/3.png',
            './images/gde-logica/question-5-2/4.png',
            './images/gde-logica/question-5-2/5.png',
        ],
        answer: 'Иван Дорн - Самая любимая музыка здесь играет',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 3. Какой фильм?',
        images: [
            './images/gde-logica/question-5-3/1.png',
            './images/gde-logica/question-5-3/2.png',
            './images/gde-logica/question-5-3/3.png',
            './images/gde-logica/question-5-3/4.png',
            './images/gde-logica/question-5-3/5.png',
            './images/gde-logica/question-5-3/6.png',
        ],
        answer: 'Один дома',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 4. Какая песня?',
        images: [
            './images/gde-logica/question-5-4/1.png',
            './images/gde-logica/question-5-4/2.png',
            './images/gde-logica/question-5-4/3.png',
            './images/gde-logica/question-5-4/4.png',
            './images/gde-logica/question-5-4/5.png',
            './images/gde-logica/question-5-4/6.png',
            './images/gde-logica/question-5-4/7.png',
        ],
        answer: 'Земляне - трава у дома',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 5. Какой мультфильм?',
        images: [
            './images/gde-logica/question-5-5/1.png',
            './images/gde-logica/question-5-5/2.png',
            './images/gde-logica/question-5-5/3.png',
            './images/gde-logica/question-5-5/4.png',
        ],
        answer: 'Губка боб квадратные штаны',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 6. Какой фразеологизм?',
        images: [
            './images/gde-logica/question-5-6/1.png',
            './images/gde-logica/question-5-6/2.png',
        ],
        answer: 'И след простыл',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 7. Какой фильм?',
        images: [
            './images/gde-logica/question-5-7/1.png',
            './images/gde-logica/question-5-7/2.png',
            './images/gde-logica/question-5-7/3.png',
            './images/gde-logica/question-5-7/4.png',
            './images/gde-logica/question-5-7/5.png',
        ],
        answer: 'Социальная сеть',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 8. Какая песня?',
        images: [
            './images/gde-logica/question-5-8/1.png',
            './images/gde-logica/question-5-8/2.png',
            './images/gde-logica/question-5-8/3.png',
            './images/gde-logica/question-5-8/4.png',
            './images/gde-logica/question-5-8/5.png',
            './images/gde-logica/question-5-8/6.png',
        ],
        answer: 'Боярский - зеленоглазое такси',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 9. Какой фразеологизм?',
        images: [
            './images/gde-logica/question-5-9/1.png',
            './images/gde-logica/question-5-9/2.png',
            './images/gde-logica/question-5-9/3.png',
        ],
        answer: 'Голова идет кругом',
    },
    {
        title: 'Раунд 5',
        subtitle: 'Вопрос 10. Какой фильм?',
        images: [
            './images/gde-logica/question-5-10/1.png',
            './images/gde-logica/question-5-10/2.png',
            './images/gde-logica/question-5-10/3.png',
            './images/gde-logica/question-5-10/4.png',
            './images/gde-logica/question-5-10/5.png',
            './images/gde-logica/question-5-10/6.png',
        ],
        answer: 'Король лев',
    },
]

function calculate() {
    removeEventListeners();

    const {title, subtitle, images, answer, answerImage} = questions[currentIndex];

    const titleElem = document.getElementsByClassName('title')[0];
    titleElem.innerHTML = `${title}`;
    const subtitleElem = document.getElementsByClassName('subtitle')[0];
    subtitleElem.innerHTML = `${subtitle}`;
    const answerElem = document.getElementsByClassName('answer')[0];
    answerElem.innerHTML = `${answer}`;

    const cards = document.getElementsByClassName('card');
    [...cards].forEach(el => el.remove());

    const width = Math.min((window.innerWidth - 200 * Math.max(1, window.innerWidth / 800)) / images.length, window.innerHeight - 400);

    const content = document.getElementsByClassName('content')[0];

    for (let i = 0; i < images.length; i++) {
        content.innerHTML += `<img class="card" src="${images[i]}" width="${width}" />`
    }

    const answerImageElem = document.getElementsByClassName('answer-image')[0];
    answerImageElem.innerHTML = answerImage ? `<img class="card" src="${answerImage}" width="300" />` : '';

    addEventListeners(answerImage);
}

function listenerClickPrev() {
    currentIndex = Math.max(0, currentIndex - 1);
    calculate();
}

function listenerClickNext() {
    console.log(">>>2");
    currentIndex = Math.min(currentIndex + 1, questions.length - 1);
    calculate();
}

function listenerMouseEnterAnswer() {
    console.log(">>>3");
    document.getElementsByClassName('answer-image')[0].style.display = 'flex';
    calculate();
}

function listenerMouseLeaveAnswer() {
    document.getElementsByClassName('answer-image')[0].style.display = 'none';
    calculate();
}

function addEventListeners(answerImage) {
    document.getElementsByClassName('prev')[0].addEventListener('click', listenerClickPrev)
    document.getElementsByClassName('next')[0].addEventListener('click', listenerClickNext)
    if (answerImage) {
        document.getElementsByClassName('answer')[0].addEventListener('mouseenter', listenerMouseEnterAnswer)
        document.getElementsByClassName('answer')[0].addEventListener('mouseleave', listenerMouseLeaveAnswer)
    }
}

function removeEventListeners() {
    document.getElementsByClassName('prev')[0].removeEventListener('click', listenerClickPrev, false);
    document.getElementsByClassName('next')[0].removeEventListener('click', listenerClickNext, false);
    document.getElementsByClassName('answer')[0].removeEventListener('mouseenter', listenerMouseEnterAnswer, false)
    document.getElementsByClassName('answer')[0].removeEventListener('mouseleave', listenerMouseLeaveAnswer, false)
}

calculate();