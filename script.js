function Book(title, author, pages, readInfo){
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.readInfo = readInfo
    this.info = function(){
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " +
        this.readInfo + " yet.");
    }
}