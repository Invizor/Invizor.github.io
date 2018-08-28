const TIME_X = 1538352000 - 10800;
const motivatorList = [
  'Димон! Давай поднажми!',
  'Сегодня пара задачек, завтра спец в кармане',
  'Уже сдался? Готовишь коньячек?',
  'К черту все! Берись и делай!',
  'Дойдя до конца, люди смеются над страхами, мучившими их вначале.',
  'Самое высокое наслаждение — сделать то, чего, по мнению других ты не можешь сделать.',
  'Никогда не рассказывай людям о своих планах. Просто бери и делай. Пусть они удивляются от результатов, а не от болтовни'
];

document.getElementById("time").innerHTML = getStringTime();
document.getElementById("footer").innerHTML = getMotivator();

function declOfNum(number, titles)
{
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function getDiff() {
  let currentDiff = TIME_X - (Date.now() / 1000);
  if (currentDiff < 0) currentDiff = 0;
  return currentDiff;
}

function prepareStringTime(day, hour, minute, second) {
  let result = '';
  if(day < 10) result += '0' + day; else result += day;
  result += ' ' + declOfNum(day, ['день', 'дня', 'дней']);
  result += ' : ';
  if(hour < 10) result += '0' + hour; else result += hour;
  result += ' ' + declOfNum(hour, ['час', 'часа', 'часов']);
  result += ' : ';
  if(minute < 10) result += '0' + minute; else result += minute;
  result += ' ' + declOfNum(minute, ['минута', 'минуты', 'минут']);
  result += ' : ';
  if(second < 10) result += '0' + second; else result += second;
  result += ' ' + declOfNum(second, ['секунда', 'секунды', 'секунд']);
  return result;
}

function getStringTime() {
  let diff = getDiff();
  let day = Math.floor(diff / (24*60*60));
  diff = diff % (24*60*60);
  let hour = Math.floor(diff / (60*60));
  diff = diff % (60*60);
  let minute = Math.floor(diff / 60);
  diff = diff % 60;
  let second = Math.floor(diff);
  return prepareStringTime(day, hour, minute, second);
}

(() => {
  setInterval(() => {
    document.getElementById("time").innerHTML = getStringTime();
  }, 1000);
})();

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getMotivator() {
  let randomValue = getRandomInt(0, motivatorList.length - 1);
  return motivatorList[randomValue];
}