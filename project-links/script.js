function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/tesste.jpg');
        img.setAttribute('alt', 'Logo-light');
    } else {
        img.setAttribute('src', './assets/tesste.jpg');
        img.setAttribute('alt', 'Logo-dark');
    }
}
