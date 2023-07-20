let myLibrary = [];
let bookCounter = 0;

function Book(title, author, pages, bookCompletion) { //book obj constructor
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.bookCompletion = bookCompletion
    this.info = function(){
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " +
        this.bookCompletion + " yet.");
    }
}

function addBookToLibrary(){
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let pages = document.getElementById("bookPages").value;
    let bookCompletion = document.getElementById("finishedBook").value;
    myLibrary.push(new Book(title, author, pages, bookCompletion));
    closePopup();
    clearValues();
    displayLibrary();
}

function clearValues(){
    document.getElementById("bookTitle").value = '';
    document.getElementById("bookAuthor").value = '';
    document.getElementById("bookPages").value = '';
    document.getElementById("finishedBook").value = '';
}

//loops through the array and displays each book on the page
function displayLibrary(){
    let bookListDiv = document.querySelector(".bookList");
    bookListDiv.innerHTML = ""; //clear previous content 

    for (let i = 0; i < myLibrary.length; ++i){
        bookCounter++;
        let book = myLibrary[i];
        let bookParagraph = document.createElement("p");

        bookParagraph.textContent = "Book " + bookCounter + ": " + book.info();
        bookListDiv.appendChild(bookParagraph);
    }
    //next tip, append a singular class that will style the book details
}

//popup form feature
let popup = document.querySelector(".popup");
function openPopup(){
    popup.classList.add("open-popup"); //makes the popup visible on the screen
}

function closePopup(){
    popup.classList.remove("open-popup"); //removes the popup
    clearValues();
}
//

