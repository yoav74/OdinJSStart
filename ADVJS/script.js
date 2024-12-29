function Book(title, author, pages, did_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.did_read = did_read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.did_read}.`;
    };
    this.toggleRead = function(){
        if(this.did_read == true)
            this.did_read = false;
        else
            this.did_read = true;
        printLibrary();
    }
};
function onload() {

}

const Library = [];
const DocBody = document.querySelector("body");
const table = document.querySelector("#tab");
const tableCopy = table.innerHTML;
const Checkbox = document.querySelector("#didread");
// DocBody.appendChild(table);

function addBookToLibrary(title, author, pages, did_read) {
    const newBook = new Book(title, author, pages, did_read);
    Library.push(newBook);
    console.log(newBook);
    printLibrary(newBook);
}

function printLibrary() {
    table.innerHTML = tableCopy;
    Library.forEach((element) => {
        const newDiv = document.createElement("div");
        const row = table.insertRow(-1);
        const button = document.createElement("button");
        button.textContent = "Remove Book";
        const ReadStatus = document.createElement("input");
        ReadStatus.type = "checkbox";
        ReadStatus.checked = element.did_read;
        ReadStatus.addEventListener("click",() =>{
            element.toggleRead();
        })
        button.addEventListener("click", () => {
            const index = Library.indexOf(element);
            Library.splice(index, 1);
            printLibrary();
        })
        newDiv.classList.add = "book";
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);

        cell1.textContent = element.title;
        cell2.textContent = element.author;
        cell3.textContent = element.pages;
        cell4.textContent = element.did_read;
        cell5.appendChild(button);
        cell6.appendChild(ReadStatus);
    }
    )
};


const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    var checkboxValue = event.target.didread.checked;
    addBookToLibrary(event.target.book_name.value, event.target.author.value, event.target.numPages.value, checkboxValue);
})

// addBookToLibrary("Harry Potter", "J.K. Rolling", "400", true);
// addBookToLibrary("A song of ice and fire", "GRR Martin", "600", true);