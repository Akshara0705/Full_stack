function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.id;
        changeBackgroundColor(color);
    });
});
