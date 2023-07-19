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
}

//loops through the array amd displays each book on the page
function displayLibrary(){
    for (let i = 0; i < myLibrary.length; ++i){
        myLibrary[i].info();
    }
}


