let toDoItems = []

const heroDiv = document.getElementById("hero")
const toDoListBox = document.createElement("div")
const toDoListItemsDiv = document.createElement("div")
const siteTitle = document.createElement("h1")
siteTitle.textContent = "Your own personal To-Do-List"

const toDoInputField = document.createElement("input")
toDoInputField.placeholder = ("Add to do's here")

const btnAddToDo = document.createElement("button")
btnAddToDo.textContent = ("Submit ToDo")


heroDiv.append(
    toDoListBox,
    toDoListItemsDiv   
)
toDoListBox.append(
    siteTitle,
    toDoInputField,
    btnAddToDo
)





btnAddToDo.addEventListener ("click", myFunction);

function addToDoFunction(){
    const toDoTextElement = toDoInputField.value
    if (!toDoTextElement) return
    const currentTime = new Date()
    const currentTimeStamp = currentTime.getTime()
    const currentDateStamp = currentTime.getDate()
    toDoItems.push({
        name: toDoTextElement,
        id: currentTimeStamp,
        date: currentDateStamp
    })

    displayToDoFunction(toDoTextElement, currentTimeStamp)
    toDoInputField.value = " "
}

function displayToDoFunction(toDoTextElement, currentTimeStamp, currentDateStamp){
    const toDoItemElement = document.createElement("p")
    toDoItemElement.textContent = toDoTextElement + currentDateStamp
    toDoListItemsDiv.append(toDoItemElement)
}


