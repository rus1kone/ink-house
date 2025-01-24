document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.reproductions__tab');
    const groups = document.querySelectorAll('.reproductions__items-group');
    const images = document.querySelectorAll('.reproduction__item-image');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalImage = document.querySelector('.modal-image');
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            groups.forEach(group => group.classList.remove('active'));

            tab.classList.add('active');

            const target = tab.dataset.target;
            console.log(`Clicked tab target: ${target}`);

            const activeGroup = document.querySelector(`.reproductions__items-group[data-group="${target}"]`);
            if (activeGroup) {
                console.log(`Found group for target: ${target}`);
                activeGroup.classList.add('active');
            } else {
                console.error(`No group found for target: ${target}`);
            }
        });
    });

    images.forEach(image => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            modalOverlay.classList.add('show');
        });
    });

    modalOverlay.addEventListener('click', () => {
        modalOverlay.classList.remove('show');
        modalImage.src = '';
    });

    burger.addEventListener('click', () => {
        menu.classList.toggle('header__menu-active');
        burger.classList.toggle('header__burger-active');
    });
});
