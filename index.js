let toDoItems = []

const heroDiv = document.getElementById("hero")
const toDoListBox = document.createElement("div")
const toDoListItemsDiv = document.createElement("div")
const siteTitle = document.createElement("h1")
siteTitle.textContent = "Your own personal To-Do-List"

const textInputField = document.createElement("input")
textInputField.placeholder = ("Add to do's herdsae")

const btnAddToDo = document.createElement("button")
btnAddToDo.textContent = ("Submit ToDo")


heroDiv.append(
    toDoListBox,
    toDoListItemsDiv   
)
toDoListBox.append(
    siteTitle,
    textInputField,
    btnAddToDo
)





btnAddToDo.addEventListener ("click", addToDoFunction);

function addToDoFunction(){
    const textElement = textInputField.value
    if (!textElement) return
    const currentTime = new Date()
    const currentTimeStamp = currentTime.getTime()
    toDoItems.push({
        name: textElement,
        id: currentTimeStamp
    })

    displayToDoFunction(textElement)
    textInputField.value = " "
}

function displayToDoFunction(textElement){
    const paragraphElement = document.createElement("p")
    paragraphElement.textContent = textElement
    toDoListItemsDiv.append(paragraphElement)
}


