const dateElem = document.getElementsByClassName('date')[0];
const timeElem = document.getElementsByClassName('time')[0];

const getTime = function() {
  const date  = new Date();

  let day     = pad(date.getDate(), 2, 0);
  let month   = pad(date.getMonth()+1, 2, 0);
  const year  = date.getFullYear();

  const weekday = weekdays[date.getDay()];
  const hour    = date.getHours();
  let minute    = pad(date.getMinutes(), 2, 0);

  dateElem.textContent = `${weekday}. ${day}.${month}.${year}`;
  timeElem.textContent = `${hour}:${minute}`;
}

window.onload = getTime();
setInterval(getTime, 1000);
