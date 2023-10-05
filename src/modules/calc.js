const calc = (price = 100) => {
    const calcInputs = document.querySelectorAll('input.calc-item');
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        };

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        };

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0
        };

        if (totalValue > 0) {
            outNum(totalValue, total);
        };
    };

    const outNum = (num, elem, step = 10, time = 500) => {
        let count = 0;
        let t = Math.round(time / (num / step));

        let interval = setInterval(() => {
            count += step;
            if (count >= num) {
                clearInterval(interval)
            }
            elem.textContent = count;

        }, t);
    }

    calcInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        })
    });

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc()
        }
    });
};

export default calc