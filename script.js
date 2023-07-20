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
    let title = prompt("Enter the title of your book");
    let author = prompt("Enter the author of your book");
    let pages = prompt("Enter the total number of pages the book has");
    let readInfo = prompt("Enter the number of pages you have read so far");
    myLibrary.push(new Book(title, author, pages, readInfo));
    console.log(displayLibrary());
}

//loops through the array amd displays each book on the page
function displayLibrary(){
    for (let i = 0; i < myLibrary.length; ++i){
        myLibrary[i].info();
    }
}

let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup"); //makes the popup visible on the screen
}

function closePopup(){
    popup.classList.remove("open-popup"); //removes the popup
}


