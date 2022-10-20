const form  = document.querySelector('form')
const titlein = document.querySelector('#title')
const bookdata = document.querySelector('#mytable')
const authorin = document.querySelector('#author')
const ISBNin = document.querySelector('#ISBN')

bookdata.addEventListener('click', deletebook)
form.addEventListener('submit', addbook)

function addbook(e){
    const row = bookdata.insertRow(-1)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.setAttribute('href', '#')
    cell1.innerHTML = titlein.value
    cell2.innerHTML = authorin.value
    cell3.innerHTML = ISBNin.value
    cell4.appendChild(a)
    const bookslists = [titlein.value, authorin.value, ISBNin.value]
    addbookLS(bookslists)
}
function deletebook(e){
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this book?')){
        }
    }
}
function addbookLS(book) {
    let books
    if(localStorage.getItem('book') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('book'))
    }
    books.push(book)
    localStorage.setItem('book', JSON.stringify(books))
}


