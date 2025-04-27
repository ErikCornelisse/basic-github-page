document.addEventListener('DOMContentLoaded', function () {
    const hexagon = document.getElementById('hexagon-00');
    if (hexagon) {
        hexagon.addEventListener('click', function () {
            hexagon.classList.toggle('active');
        });
    }
});