/**
 * Date Modified/Branch Creation (of library-classes): Aug 15, 2023
 * Purpose: To refactor existing code, organizing it with the concept of 'classes' in mind
 */
"use strict";

class Book {
    constructor(title, author, pages, bookCompletion){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.bookCompletion = bookCompletion;
    }
}

class Popup {
    constructor(popupElement){
        this.popupElement = popupElement;

        this.attachEventListeners();
    }

    attachEventListeners(){
        const openBtn = document.getElementById("newBookButton");
        const closeBtn = document.getElementById("closeBtn");

        openBtn.addEventListener('click', () => {
            this.open();
        });

        closeBtn.addEventListener('click', () => {
            this.close();
        });

    }

    open(){
        this.popupElement.classList.add("open-popup"); //makes the popup visible on the screen
    }

    close(){
        this.popupElement.classList.remove("open-popup"); //removes the popup
    }

}

class Library {
    constructor(){
        this.myLibrary = [];
        this.popup = new Popup(document.querySelector(".popup"));

        this.attachToSubmit();
    }

    attachToSubmit(){
        const submitBtn = document.getElementById("submitBtn");

        submitBtn.addEventListener('click', () => {
            const title = document.getElementById("bookTitle").value;
            const author = document.getElementById("bookAuthor").value;
            const pages = document.getElementById("bookPages").value;
            const bookCompletion = document.getElementById("finishedBook").value;
            this.addBookToLibrary(title, author, pages, bookCompletion);
        });
    }

    addBookToLibrary(title, author, pages, bookCompletion){
        this.myLibrary.push(new Book(title, author, pages, bookCompletion));
        this.popup.close();
        this.clearValues();
        this.displayLibrary();
    }

    clearValues(){
        document.getElementById("bookTitle").value = '';
        document.getElementById("bookAuthor").value = '';
        document.getElementById("bookPages").value = '';
        document.getElementById("finishedBook").value = '';
    }

    displayLibrary(){
        let bookCounter = 0;
        let bookListDiv = document.querySelector(".bookList");
        bookListDiv.innerHTML = ""; //clear previous content 

        for (let i = 0; i < this.myLibrary.length; ++i){
            bookCounter++;
            let book = this.myLibrary[i];
            this.setupCard(book, bookListDiv);
        }
    }

    setupCard(book, bookListDiv){
        let bookCard = document.createElement("div");
        bookCard.classList.add("bookCard"); //assigns the class .bookCard to the div which encapsulates the card's contents
    
        let cardTitle = document.createElement("div"); //creates a div which holds the title p elem
        cardTitle.classList.add("cardTitle");
        let titleP = document.createElement("p");  //creates the p element which holds the title
        titleP.textContent = book.title;
        cardTitle.appendChild(titleP); //adds the p element as a child of the cardTitle div elem
        bookCard.appendChild(cardTitle);
    
        let authorP = document.createElement("p"); //the author paragraph elem
        authorP.textContent = "Author: " + book.author;
        bookCard.appendChild(authorP);
    
        let pageP = document.createElement("p"); //page # paragraph elem
        pageP.textContent = "Pages: " + book.pages;
        bookCard.appendChild(pageP);
    
        let optionsDiv = document.createElement("div"); //for .cardOptions div
        optionsDiv.classList.add("cardOptions");
    
        let inputDiv = document.createElement("div"); //for our checkbox div
        let inputLabel = document.createElement("label");
        inputLabel.textContent = "Completed: ";
        let inputBox = document.createElement("input"); //for the actual input checkbox
        inputBox.type ="checkbox";
        inputBox.checked = book.bookCompletion; //places the book obj's completion status as the state of the checkbox box
    
        let removeDiv = document.createElement("div");
        let removeLabel = document.createElement("label");
        removeLabel.textContent = "Remove: ";
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("removeButton");
    
        removeBtn.addEventListener("click", () => {
            this.removeBook(book);
        });
    
        
        removeDiv.appendChild(removeLabel);
        removeDiv.appendChild(removeBtn);
        bookCard.appendChild(removeDiv);
        
        inputDiv.appendChild(inputLabel);
        inputDiv.appendChild(inputBox);
    
        optionsDiv.appendChild(inputDiv);
        optionsDiv.appendChild(removeDiv);
        bookCard.appendChild(optionsDiv); //finally adds the options div to our main bookCard div
        bookListDiv.appendChild(bookCard);
    }

    removeBook(book){
        //find the index of the book in the myLib array
        const indexToRemove = myLibrary.indexOf(book);
    
        if (indexToRemove !== -1){ // we use -1 to represent if the element is not found in the myLibrary array
            myLibrary.splice(indexToRemove, 1);
            displayLibrary();
        }
    }

    openPopup(){
        this.popup.open();
    }

    closePopup(){
        this.popup.close();
    }
}

const library = new Library();

library.addBookToLibrary("Harry Potter and The Sorcerer's Stone", "J. K. Rowling", "309", false);
library.addBookToLibrary("A Game Of Thrones", "George R.R. Martin", "694", true);




/*function Book(title, author, pages, bookCompletion) { //book obj constructor
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.bookCompletion = (bookCompletion? true : false)
    this.info = function(){
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " +
        this.bookCompletion + " yet.");
    }
}*/

/*function addBookToLibrary(){
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let pages = document.getElementById("bookPages").value;
    let checkbox = document.getElementById("finishedBook"); //we don't need the value of the checkbox
    let bookCompletion = checkbox.checked; //the checkbox's .checked property directly gives us the boolean value indicating whether the checkbox is checked or not (t/f)
    myLibrary.push(new Book(title, author, pages, bookCompletion));
    closePopup();
    clearValues();
    displayLibrary();
}*/

/*function clearValues(){
    document.getElementById("bookTitle").value = '';
    document.getElementById("bookAuthor").value = '';
    document.getElementById("bookPages").value = '';
    document.getElementById("finishedBook").value = '';
}*/

/*
//loops through the array and displays each book on the page through a div card
function displayLibrary(){
    let bookCounter = 0;
    let bookListDiv = document.querySelector(".bookList");
    bookListDiv.innerHTML = ""; //clear previous content 

    for (let i = 0; i < myLibrary.length; ++i){
        bookCounter++;
        let book = myLibrary[i];
        setupCard(book, bookListDiv);
    }
    //next tip, append a singular class that will style the book details
}*/

/*
//setup for each div card, including own classes for styling
function setupCard(book, bookListDiv){
    let bookCard = document.createElement("div");
    bookCard.classList.add("bookCard"); //assigns the class .bookCard to the div which encapsulates the card's contents

    let cardTitle = document.createElement("div"); //creates a div which holds the title p elem
    cardTitle.classList.add("cardTitle");
    let titleP = document.createElement("p");  //creates the p element which holds the title
    titleP.textContent = book.title;
    cardTitle.appendChild(titleP); //adds the p element as a child of the cardTitle div elem
    bookCard.appendChild(cardTitle);

    let authorP = document.createElement("p"); //the author paragraph elem
    authorP.textContent = "Author: " + book.author;
    bookCard.appendChild(authorP);

    let pageP = document.createElement("p"); //page # paragraph elem
    pageP.textContent = "Pages: " + book.pages;
    bookCard.appendChild(pageP);

    let optionsDiv = document.createElement("div"); //for .cardOptions div
    optionsDiv.classList.add("cardOptions");

    let inputDiv = document.createElement("div"); //for our checkbox div
    let inputLabel = document.createElement("label");
    inputLabel.textContent = "Completed: ";
    let inputBox = document.createElement("input"); //for the actual input checkbox
    inputBox.type ="checkbox";
    inputBox.checked = book.bookCompletion; //places the book obj's completion status as the state of the checkbox box

    let removeDiv = document.createElement("div");
    let removeLabel = document.createElement("label");
    removeLabel.textContent = "Remove: ";
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("removeButton");

    removeBtn.addEventListener("click", function(){
        removeBook(book);
    });

    
    removeDiv.appendChild(removeLabel);
    removeDiv.appendChild(removeBtn);
    bookCard.appendChild(removeDiv);
    
    inputDiv.appendChild(inputLabel);
    inputDiv.appendChild(inputBox);

    optionsDiv.appendChild(inputDiv);
    optionsDiv.appendChild(removeDiv);
    bookCard.appendChild(optionsDiv); //finally adds the options div to our main bookCard div
    bookListDiv.appendChild(bookCard);
}*/

/*
//remove button functionality
function removeBook(book){
    //find the index of the book in the myLib array
    const indexToRemove = myLibrary.indexOf(book);

    if (indexToRemove !== -1){ // we use -1 to represent if the element is not found in the myLibrary array
        myLibrary.splice(indexToRemove, 1);
        displayLibrary();
    }
}*/

/*
//popup form feature
let popup = document.querySelector(".popup");
function openPopup(){
    popup.classList.add("open-popup"); //makes the popup visible on the screen
}

function closePopup(){
    popup.classList.remove("open-popup"); //removes the popup
    clearValues();
}*/

/*
//add premade book
function addPremadeBook(title, author, pages, completion){
    myLibrary.push(new Book(title, author, pages, completion));
    displayLibrary();
}

addPremadeBook("Harry Potter and The Sorcerer's Stone", "J. K. Rowling", "309", false);
addPremadeBook("A Game Of Thrones", "George R.R. Martin", "694", true);
*/



