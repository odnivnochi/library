let library = []

class Book{
  constructor(
    title = "",
    author = "",
    pages = 0,
    read = false,
  ){
    this.title =title,
    this.author =author,
    this.pages =pages,
    this.read =read;
  }
}

const addBookBtn = document.getElementById("addBook");
const buttonRe = document.getElementById("buttonRe");
addBookBtn.addEventListener("click",  () => showNewBook(getBook()));

let parent = document.querySelector('#grid');

function getBook () {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const check = document.getElementById('check').checked;
  if(title === ""){
    alert("Please, fill in the gaps!")
    
    
  }else{
    if(library.includes(title)){
      alert("You already have it!")
    }else{
      library.push(title)
      let newBook = new Book(title, author, pages, check)  
      document.getElementById("title").value = ""
      document.getElementById("author").value = ""
      document.getElementById("pages").value = ""
      document.getElementById("check").checked = false
      return newBook
    }
  }

}
function showNewBook(book){

  let aBlock = document.createElement('div')
  let textTitle = document.createElement('p');
  let pTitle = document.createElement('p');
  let hr1 = document.createElement('hr');
  let textAuthor = document.createElement('p');
  let pAuthor = document.createElement('p');
  let hr2 = document.createElement('hr');
  let textPages = document.createElement('p');  
  let pPages = document.createElement('p');
  let buttonRe = document.createElement('button');
  let hr3 = document.createElement('hr');
  let checkbox = document.createElement('input');
  let lableCheckbox = document.createElement('lable');

  aBlock.className = "colDiv"
  textTitle.className = "textP"
  textAuthor.className = "textP"
  textPages.className = "textP"
  buttonRe.className = "buttonRe"
  lableCheckbox.className = "textLable"
  buttonRe.textContent = "X"
  pTitle.textContent = book.title
  pAuthor.textContent = book.author
  pPages.textContent = book.pages
  textTitle.textContent = "Title"
  textAuthor.textContent = "Author"
  textPages.textContent = "Pages"
  checkbox.type = "checkbox"
  checkbox.className = "check"
  lableCheckbox.textContent = "Read"
  
  checkbox.checked = book.read
  
  aBlock.append(buttonRe)
  aBlock.append(textTitle)
  aBlock.append(pTitle)
  aBlock.append(hr1)
  aBlock.append(textAuthor)
  aBlock.append(pAuthor)
  aBlock.append(hr2)
  aBlock.append(textPages)
  aBlock.append(pPages)
  aBlock.append(hr3)
  aBlock.append(checkbox)
  aBlock.append(lableCheckbox)
  parent.appendChild(aBlock);

  buttonRe.addEventListener("click", () => resetGrid(aBlock));
}
function resetGrid(grid) {
  
  grid.remove();

};