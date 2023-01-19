let toDoItems = []

const heroDiv = document.getElementById("hero")
const toDoListBox = document.createElement("div")
const siteTitle = document.createElement("h1")
siteTitle.textContent = "Your own personal To-Do-List"

const toDoInputField = document.createElement("input")
toDoInputField.placeholder = ("Add to do's here")

const btnAddToDo = document.createElement("button")
btnAddToDo.textContent = ("Submit ToDo")


heroDiv.append(
    toDoListBox    
)
toDoListBox.append(
    siteTitle,
    toDoInputField,
    btnAddToDo
)

const toDoListItemsDiv = document.createElement("div")
toDoListItemsDiv.setAttribute("id", "to-do-list-items-div")

heroDiv.append(
    toDoListItemsDiv
)




btnAddToDo.addEventListener ("click", myFunction);

function myFunction(){
    console.log("123")
}
