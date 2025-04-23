document.addEventListener('DOMContentLoaded', function () {
    const hexagon = document.getElementById('hexagonHamburger');
    if (hexagon) {
        hexagon.addEventListener('click', function () {
            hexagon.classList.toggle('active');
        });
    }
});