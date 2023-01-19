let toDoItems = []
const toDoListBox = document.getElementById("to-do-list-box")

const siteTitle = document.createElement("h1")
siteTitle.textContent = "Your own personal To-Do-List"

const toDoInputField = document.createElement("input")
toDoInputField.placeholder = ("Add to do's here")

const btnAddToDo = document.createElement("button")
btnAddToDo.textContent = ("Submit ToDo")

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