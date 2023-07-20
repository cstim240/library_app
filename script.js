let myLibrary = [];

function Book(title, author, pages, bookCompletion) { //constructor
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
}

//loops through the array amd displays each book on the page
function displayLibrary(){
    for (let i = 0; i < myLibrary.length; ++i){
        myLibrary[i].info();
    }
}

//popup form feature
let popup = document.querySelector(".popup");
function openPopup(){
    popup.classList.add("open-popup"); //makes the popup visible on the screen
}

function closePopup(){
    popup.classList.remove("open-popup"); //removes the popup
}


