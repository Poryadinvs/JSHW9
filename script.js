const figure = document.querySelector('.figure');
const btnCircle = document.querySelector('.btnCircle');
const btnSquare = document.querySelector('.btnSquare');
const btnRectangle = document.querySelector('.btnRectangle');
const btnTriangle = document.querySelector('.btnTriangle');

btnCircle.onclick = () => {
    figure.setAttribute('class', 'figure circle');
}

btnSquare.onclick = () => {
    figure.setAttribute('class', 'figure square');
}

btnRectangle.onclick = () => {
    figure.setAttribute('class', 'figure rectangle');
}

btnTriangle.onclick = () => {
    figure.setAttribute('class', 'figure triangle');
}
const btnСhangeShape = document.querySelector('.changeShape');

let shapes = {
    'figure circle': 'figure square',
    'figure square': 'figure rectangle',
    'figure rectangle': 'figure triangle',
    'figure triangle': 'figure circle'
}

btnСhangeShape.onclick = () => {
    figure.className = shapes[figure.className];
    btnСhangeShape.innerText =
        shapes[btnСhangeShape.innerText] ?? 'figure circle'
};

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.onclick = () => {
        item.classList.toggle('large');
    }
});

const navItems = document.querySelectorAll('.navigation li');

navItems.forEach(item => {
    item.click=function() {
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
    };
});