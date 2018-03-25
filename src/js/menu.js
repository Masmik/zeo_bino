function menu() {
    var nav_container = document.querySelector('.nav__container');
    var nav = document.getElementsByTagName('nav')[0];
    nav_container.addEventListener('click', function (e) {
        e.preventDefault();

        if (!e.target.classList.contains('nav__container_active')) {
            e.target.classList.toggle('nav__container_active');
            nav.style.display = 'block';
            return;
        }
        nav.removeAttribute('style');
        e.target.classList.remove('nav__container_active');
    });
}
