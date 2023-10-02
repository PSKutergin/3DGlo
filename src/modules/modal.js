const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

    let idInterval;
    let opacity = 0;

    window.clearTimeout(timer);

    const animModalShow = () => {
        opacity++
        idInterval = requestAnimationFrame(animModalShow)

        if (opacity < 100) {
            modal.style.opacity = opacity * 5 / 100;
        } else {
            cancelAnimationFrame(idInterval)
        }
    };

    const animModalClose = () => {
        opacity--
        idInterval = requestAnimationFrame(animModalClose)

        if (opacity > 0) {
            modal.style.opacity = opacity / 100;
        } else {
            cancelAnimationFrame(idInterval)
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            if (innerWidth >= 768) animModalShow()
        })
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            if (innerWidth >= 768) animModalClose()
            modal.style.display = 'none'
        }
    })
}

export default modal