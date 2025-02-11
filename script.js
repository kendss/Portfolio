function showTextOnScroll() {
    const textElement = document.querySelector('.versi');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        textElement.classList.add('appear');
    } else {
        textElement.classList.remove('appear');
    }
}

window.addEventListener('scroll', showTextOnScroll);