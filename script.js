/*--- Main global vars & Bookshelf locked stage ---*/

const
    section = document.querySelector('section'),
    bookShelf = document.querySelector('.bookshelf'),
    keyHole = document.querySelector('.key-hole'),
    library = document.querySelector('.library'),
    bookDescr = document.querySelector('.book-description'),
    openFormBtn = document.querySelector('.new-book'),
    newBookForm = document.querySelector('.new-book-form'),
    addBookBtn = document.getElementById('submit');
    

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
    insertBookInDOM(book);
})

/* Book Constructor */
function Book(title, author, pages, read, descr) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.descr = descr; 
}

/* Random book img generator */
function getBookCover() {
    const randomNr = Math.floor(Math.random()*10+1);
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
    descritpion = bookDescr.querySelector('span'),
    backBtn = bookDescr.querySelector('button');
    
    isRead.textContent += book.read;
    title.textContent += book.title;
    author.textContent += book.author;
    pages.textContent += book.pages;
    descritpion.textContent = book.descr;

    backBtn.onclick = () => {
        goBack(isRead, title, author, pages, descritpion);
    };
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

/* Exit description window */
function goBack(isRead, title, author, pages, descritpion) {
    bookDescr.classList.remove('open');
    library.style.display = '';
    isRead.textContent = 'Read: ';
    title.textContent = 'Title: ';
    author.textContent = 'Author: ';
    pages.textContent = 'Pages: ';
    descritpion.textContent = 'Description:';
}

/* Add new book */
openFormBtn.firstElementChild.onclick = openBookForm;
addBookBtn.onclick = addNewBook;

function openBookForm() {
    const backBtn = newBookForm.querySelector('.back');

    library.style.display = 'none';
    newBookForm.classList.add('active');
    backBtn.onclick = goBack_2;
}

function addNewBook() {
    const inputs = [...newBookForm.querySelectorAll('input,select,textarea')];
    const inputValues = inputs.map(input => input.value);
    const newBook = new Book(...inputValues);

    insertBookInDOM(newBook);
    goBack_2();
}

function goBack_2() {
    newBookForm.classList.remove('active');
    library.style.display = '';
    newBookForm.reset();
}

/* Insert Book in DOM */
function insertBookInDOM(book) {
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

    library.insertBefore(divContainer, openFormBtn);

    deleteBtn.onclick = deleteBook;
    divContainer.onclick = (e) => {
        viewDescription(e, deleteBtn, trashBin, book);
    }
}

/* Show credits */
//Everything manually here just because I didn't want to tire the PC
const creditsBtn = document.querySelector('h2');
const credits = document.createElement('div');

createCredits(credits);

creditsBtn.onclick = function () {
    document.body.appendChild(credits);
}

function createCredits(credits) {
    const title = document.createElement('h2');
    const list = document.createElement('ul');
    const 
        liEl_0 = document.createElement('li'),
        liEl_1 = document.createElement('li'),
        liEl_2 = document.createElement('li'),
        liEl_3 = document.createElement('li');
    const 
        link_0 = document.createElement('a'),
        link_1 = document.createElement('a'),
        link_2 = document.createElement('a'),
        link_3 = document.createElement('a');
    const closeBtn = document.createElement('button');
    
    liEl_0.appendChild(link_0);
    liEl_1.appendChild(link_1);
    liEl_2.appendChild(link_2);
    liEl_3.appendChild(link_3);
    list.appendChild(liEl_0);
    list.appendChild(liEl_1);
    list.appendChild(liEl_2);
    list.appendChild(liEl_3);
    credits.appendChild(title);
    credits.appendChild(list);
    credits.appendChild(closeBtn);
    
    link_0.href = "https://www.pexels.com/photo/green-leafed-tree-38136/";
    link_1.href = "https://www.flaticon.com/free-icons/bookshelf";
    link_2.href = "https://www.flaticon.com/free-icons/library";
    link_3.href = "https://www.flaticon.com/free-icons/bookshelf";
    link_0.target = "_blank";
    link_1.target = "_blank";
    link_2.target = "_blank";
    link_3.target = "_blank";
    link_0.textContent = "Background photo by Veeterzy";
    link_1.textContent = "Bookshelf created by Smalllikeart - Flaticon";
    link_2.textContent = "Library icon created by Smashicons - Flaticon";
    link_3.textContent = "Literature, Bookshelf & Book icons created by Freepik - Flaticon";
    title.textContent = "Special thanks go to image creators:";
    closeBtn.textContent = '⨉';
    credits.classList.add('credits');
    closeBtn.onclick = () => credits.remove();
}