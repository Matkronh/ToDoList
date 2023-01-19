let toDoItems = []
const toDoListBox = document.getElementById("to-do-list-box")
console.log("hi")
const siteTitle = document.createElement("h1")
siteTitle.textContent = "Your own personal To-Do-List"

const toDoInputField = document.createElement("input")
toDoInputField.placeholder = ("Add to do's here")

const btnAddToDo = document.createElement("button")
btnAddToDo.textContent = ("Submit ToDo")
btnAddToDo.setAttribute("id", "btn-add-to-do")
const btnSubmit = document.getElementById("btn-add-to-do")

toDoListBox.append(
    siteTitle,
    toDoInputField,
    btnAddToDo
)

const toDoListItemsDiv = document.createElement("div")
toDoListItemsDiv.setAttribute("id", "to-do-list-items-div")

document.body.appendChild(
    toDoListItemsDiv
)

btnSubmit.addEventListener("click", function(){
    console.log("button is clicked")
})

