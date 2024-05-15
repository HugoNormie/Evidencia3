document.addEventListener('DOMContentLoaded', function () {
    const projectContainers = document.querySelectorAll('.project__container');
    const popup = document.querySelector('.popup');

    projectContainers.forEach(container => {
        container.addEventListener('click', function () {
            popup.style.display = 'flex';
        });
    });
});
function closePopup() {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.popup-overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}
function showPopup() {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.popup-overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}
