const calc = () => {
    const calcInputs = document.querySelectorAll('input.calc-item')

    calcInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        })
    })

}

export default calc