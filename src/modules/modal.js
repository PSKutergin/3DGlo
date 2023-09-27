const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    let idInterval;
    let opacity = 0;

    window.clearTimeout(timer);

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            if (innerWidth >= 768) animModalShow()
        })
    });

    closeBtn.addEventListener('click', () => {
        if (innerWidth >= 768) animModalClose()
        modal.style.display = 'none'
    });

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
}

export default modal