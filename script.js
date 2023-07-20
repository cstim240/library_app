let myLibrary = [];

function Book(title, author, pages, readInfo) { //constructor
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.readInfo = readInfo
    this.info = function(){
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " +
        this.readInfo + " yet.");
    }
}

function addBookToLibrary(){
    closePopup();
    let title = document.getElementById("bookTitle");
    let author = document.getElementById("bookAuthor");
    let pages = document.getElementById("bookPages");
    let readInfo = document.getElementById("finishedBook");
    myLibrary.push(new Book(title, author, pages, readInfo));
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


