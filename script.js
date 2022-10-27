
let myLibrary = [];




class book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
     return(
      'Title: ' +
      this.title +
      'Author: ' +
      this.author +
      'Total Pages: ' +
      this.pages +
      'Have I read it? : ' +
      this.read
     )
        
    }
  }
}