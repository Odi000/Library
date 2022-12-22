const
    section = document.querySelector('section'),
    bookShelf = document.querySelector('.bookshelf'),
    keyHole = document.querySelector('.key-hole'),
    library = document.querySelector('.library');

keyHole.onclick = function() {
    bookShelf.classList.add('clicked');
}

bookShelf.addEventListener('transitionend', (e) => {
    if(e.propertyName !== 'scale') return;
    bookShelf.style.display = 'none';
    section.style.display = 'block';
    library.classList.add('unlocked');
})

/*-- Creating the Books --*/

const warAndPeace = 
new Book('War and Peace', 'Leo Tolstoy', 1225, 'Yes');
const theCastle = 
new Book('The Castle', 'Franz Kafka', 416, 'Yes');
const theGeneral = 
new Book('The General of the Dead Army', 'Ismail Kadare', 264, 'Yes');
const kiteRunner = 
new Book('The Kite Runner', 'Khaled Hosseini', 371, 'Yes');
const books = [warAndPeace,theCastle,theGeneral,kiteRunner];

books.forEach(book => {
    div = document.createElement('div');
    img = document.createElement('img');
    para = document.createElement('p');
    console.log(library);
})

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}