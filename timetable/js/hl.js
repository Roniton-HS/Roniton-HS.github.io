const inRange = function(i, low, high) {
  return i >= low && i <= high;
}

const getTableCell = function(t, day) {
  let cell;
  if      (inRange(t, 800, 859)) cell = 1
  else if (inRange(t, 900, 959)) cell = 2
  else if (inRange(t, 1000, 1059)) cell = 3
  else if (inRange(t, 1100, 1159)) cell = 4
  else if (inRange(t, 1200, 1259)) cell = 5
  else if (inRange(t, 1300, 1359)) cell = 6
  else if (inRange(t, 1400, 1459)) cell = 7
  else if (inRange(t, 1500, 1559)) cell = 8
  else if (inRange(t, 1600, 1659)) cell = 9
  else if (inRange(t, 1700, 1759)) cell = 10;
  return `${day}${cell}`;
}

const markActive = function() {
  const date  = new Date();

  const day     = weekdays[date.getDay()].toLowerCase();
  const hour    = pad(date.getHours(), 2, 0);
  const minute  = pad(date.getMinutes(), 2, 0);
  const time    = `${hour}${minute}`;

  const target = document.getElementById(getTableCell(time, day));
  if (target) target.style.backgroundColor = '#6e1e10';
}

window.onload = markActive();
setInterval(markActive, 60000);
