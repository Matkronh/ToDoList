let toDoItems = []
const toDoListBox = document.getElementById("to-do-list-box")
const siteTitle = document.createElement("h1")
siteTitle.textContent = "Your own personal To-Do-List"
const toDoInputField = document.createElement('input[type="text"]')
toDoInputField.setAttribute("placeholder", "Type in a task...")
const btnAddToDo = document.createElement('input[type="button"]')
btnAddToDo.setAttribute("value", "Submit")
toDoListBox.append(
    siteTitle,
    toDoInputField,
    btnAddToDo
)