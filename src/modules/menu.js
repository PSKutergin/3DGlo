const menu = () => {
    const body = document.querySelector('body')
    const menu = body.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    };

    body.addEventListener('click', (e) => {
        if (!e.target.closest('.active-menu') && menu.classList.contains('active-menu') || e.target.closest('.menu') || e.target.classList.contains('close-btn') || e.target.matches('ul>li>a')) {
            handleMenu()
        };
    })
}

export default menu