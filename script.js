/*--- Main global vars & Bookshelf locked stage ---*/

const
    section = document.querySelector('section'),
    bookShelf = document.querySelector('.bookshelf'),
    keyHole = document.querySelector('.key-hole'),
    library = document.querySelector('.library'),
    bookDescr = document.querySelector('.book-description');

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
    generateDescr(book);
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

    deleteBtn.onclick = deleteBook;
    divContainer.onclick = (e) => {
        viewDescription(e, deleteBtn, trashBin, book);
    }
})

/* Book Constructor */
function Book(title, author, pages, read, descr) {
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

/* Delete book element */
function deleteBook() {
    this.parentNode.remove();
}

/* Opened Book */
function viewDescription(e, deleteBtn, trashBin, book) {
    if(e.target === deleteBtn || e.target === trashBin) return 
    library.style.display = 'none';
    bookDescr.classList.add('open');

    const 
    isRead = bookDescr.querySelector('p'),
    title = bookDescr.querySelector('h1:nth-child(2)'),
    author = bookDescr.querySelector('h1:nth-child(3)'),
    pages = bookDescr.querySelector('h1:nth-child(4)'),
    descritpion = bookDescr.querySelector('span');
    
    isRead.textContent += book.read;
    title.textContent += book.title;
    author.textContent += book.author;
    pages.textContent += book.pages;
    descritpion.textContent = book.descr;
}

/* Default Books Description */
function generateDescr(book) {
    switch(true) {
        case book.title == 'War and Peace':
            book.descr = `War and Peace broadly focuses on Napoleon’s 
            invasion of Russia in 1812 and follows three of the most well-known 
            characters in literature: Pierre Bezukhov, the illegitimate son of a 
            count who is fighting for his inheritance and yearning for spiritual 
            fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to 
            fight in the war against Napoleon; and Natasha Rostov, the beautiful young 
            daughter of a nobleman who intrigues both men.`;
            break;
        case book.title == 'The Castle':
            book.descr = `The Castle is the last novel by Franz Kafka. In it a protagonist 
            known only as "K." arrives in a village and struggles to gain access to the mysterious 
            authorities who govern it from a castle supposedly owned by Count Westwest.`;
            break;
        case book.title == 'The General of the Dead Army':
            book.descr = `This is the story of an Italian general, accompanied by his chaplain, 
            charged with the mission of scouring Albania in search of the bones of their 
            fallen countrymen, killed twenty years earlier during World War II.`;
            break;
        case book.title == 'The Kite Runner':
            book.descr = `Afghani immigrant Amir is summoned from his California home to 
            Pakistan by Rahim Khan, an old, dying friend of his father. As a boy in Afghanistan, 
            wealthy Amir was best friends with servant's son Hassan, but when Hassan was brutally 
            assaulted by a local bully, Amir was too scared to save him, and has been tormented 
            by guilt ever since.`;
    }
}