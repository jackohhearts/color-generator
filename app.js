const button = document.querySelector('button');
const h2 = document.querySelector('h2');

button.addEventListener('click', function () {
    const newColor = colorgen();
    document.body.style.backgroundColor = newColor;
    h2.innerText = newColor;
})

const colorgen = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `RGB(${r}, ${g}, ${b})`;
}