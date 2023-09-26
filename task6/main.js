'use strict'

const timer = () => {
    const helloText = document.getElementById('hello');
    const todayText = document.getElementById('today');
    const currentTime = document.getElementById('current-time');
    const daysLeft = document.getElementById('days-left');
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    const getData = () => {
        let date = new Date();
        let hours = date.getHours();
        let today = week[date.getDay() - 1];
        let time = date.toLocaleTimeString('en-US');
        let newYear = new Date(2024, 0, 1);
        let dayToNewYear = Math.floor((newYear - date) / 1000 / 60 / 60 / 24);

        return { hours, today, time, dayToNewYear }
    }


    const timeDay = (hours) => {
        if (hours > 5 && hours < 12) {
            return 'Доброе утро'
        } else if (hours > 11 && hours < 18) {
            return 'Добрый день'
        } else if (hours > 17 && hours < 23) {
            return 'Добрый вечер'
        } else {
            return 'Доброй ночи'
        }
    };

    const dayText = (n, text_arr) => {
        n = Math.abs(n) % 100
        var n1 = n % 10
        if (n > 10 && n < 20) {
            return text_arr[2]
        }
        if (n1 > 1 && n1 < 5) {
            return text_arr[1]
        }
        if (n1 == 1) {
            return text_arr[0]
        }
        return text_arr[2]
    };

    const updData = () => {
        let data = getData()

        helloText.textContent = timeDay(data.hours);
        todayText.textContent = 'Сегодня: ' + data.today;
        currentTime.textContent = 'Текущее время: ' + data.time;
        daysLeft.textContent = 'До нового года осталось ' + data.dayToNewYear + ' ' + dayText(data.dayToNewYear, ['день', 'дня', 'дней']);

        if (data.dayToNewYear > 0) {
            setTimeout(updData, 1000)
        };
    };

    updData()
};

timer()