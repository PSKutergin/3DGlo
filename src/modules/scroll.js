const scroll = () => {
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const btnDown = document.querySelector('main>a');

    const scroll = (item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = item.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    menuItems.forEach(menuItem => scroll(menuItem))
    scroll(btnDown)
}

export default scroll