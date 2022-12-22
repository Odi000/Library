const 
    bookShelf = document.querySelector('.bookshelf'),
    keyHole = document.querySelector('.key-hole');

keyHole.onclick = function() {
    bookShelf.classList.add('clicked');
}

bookShelf.addEventListener('transitionend', (e) => {
    if(e.propertyName !== 'scale') return;
    bookShelf.style.display = 'none';
})