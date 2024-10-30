const dateElem = document.getElementsByClassName('date')[0];
const timeElem = document.getElementsByClassName('time')[0];

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const pad = function (num, len, sym) {
    return num.toString().padStart(len, sym);
}

const getTime = function () {
    const date = new Date();

    let day = pad(date.getDate(), 2, '0');
    let month = pad(date.getMonth() + 2, 2, '0');
    const year = date.getFullYear();

    const weekday = weekdays[date.getDay()];
    const hour = date.getHours();
    let minute = pad(date.getMinutes(), 2, '0');

    dateElem.textContent = `${weekday}. ${day}.${month}.${year}`;
    if (hour < 10) {
        const newHour = '0' + hour;
        timeElem.textContent = `${newHour}:${minute}`;
    } else {
        timeElem.textContent = `${hour}:${minute}`;
    }

}
setInterval(getTime, 1000);
