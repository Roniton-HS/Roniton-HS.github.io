const dateElem = document.getElementsByClassName('date')[0];
const timeElem = document.getElementsByClassName('time')[0];

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let firstLoad = true

const pad = function (num, len, sym) {
    return num.toString().padStart(len, sym);
}

const getTime = function () {
    const date = new Date();
    let day = pad(date.getDate(), 2, '0');
    let month = pad(date.getMonth() + 1, 2, '0');
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

    if (firstLoad){
        setBackground(month)
        firstLoad = false
    }
}

setInterval(getTime, 1000);

const setBackground = function (month) {
    const rand = Math.floor(Math.random() * 6)

    switch (rand){
        default:
            document.body.style.background = "url('../res/backgrounds/standard.png')";
            break;
        case 1:
            document.body.style.background = "url('../res/backgrounds/forestBackground.jpg')";
            break;
        case 2:
            document.body.style.background = "url('../res/backgrounds/galacticBackground.jpg')";
            break;
        case 3:
            document.body.style.background = "url('../res/backgrounds/lakeBackground.jpg')";
            break;
        case 4:
            document.body.style.background = "url('../res/backgrounds/mountainBackground.jpg')";
            break;
        case 5:
            document.body.style.background = "url('../res/backgrounds/waterBackground.jpg')";
    }

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
}

