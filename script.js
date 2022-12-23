/*--- Main global vars & Bookshelf locked stage ---*/

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
    const divContainer = document.createElement('div');
    const deleteBtn = document.createElement('div');
    const trashBin = document.createElement('img');
    const bookImg = document.createElement('img');
    const bookTitle = document.createElement('p');

    deleteBtn.appendChild(trashBin);
    divContainer.appendChild(deleteBtn);
    divContainer.appendChild(bookImg);
    divContainer.appendChild(bookTitle);

    deleteBtn.classList.add('delete');
    trashBin.src = "./images/trash-can.svg";
    trashBin.alt = "delete";

    bookImg.src = getBookCover();

    bookTitle.textContent = book.title;

    library.appendChild(divContainer);
})

/* Book Constructor */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/* Random book img generator */
function getBookCover() {
    const randomNr = Math.floor(Math.random()*5+1);
    return `./images/books/book_${randomNr}.png`;
}