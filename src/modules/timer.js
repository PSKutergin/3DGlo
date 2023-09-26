const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    const timerDaysText = document.getElementById('timer-days-text')

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
    }

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds }
    };

    const updateClock = (getTime) => {

        if (getTime.days > 0) {
            timerDays.style.display = 'inline';
            timerDaysText.style.display = 'inline';

            timerDays.textContent = getTime.days;
            timerDaysText.textContent = dayText(getTime.days, ['день', 'дня', 'дней'])

        } else {
            timerDays.style.display = 'none'
            timerDaysText.style.display = 'none'
        }

        timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
        timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;
        timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;

        // if (getTime.timeRemaining > 0) {
        //     setTimeout(updateClock, 1000)
        // };

    };

    // updateClock()

    let idInterval = setInterval(() => {
        let getTime = getTimeRemaining()

        if (getTime.timeRemaining > 0) {
            updateClock(getTime)
        } else if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval)
        }
    }, 1000)
}

export default timer