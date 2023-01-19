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

function myFunction(){
    const toDoTextElement = toDoInputField.value
    if (!toDoTextElement) return
    const currentTime = new Date()
    const currentTimeStamp = currentTime.getTime()
    toDoItems.push({
        name: toDoTextElement,
        id: currentTimeStamp
    })

    myFunction2(toDoTextElement, currentTimeStamp)
    toDoInputField.value = " "
}

function myFunction2(toDoTextElement, currentTimeStamp){
    const toDoItemElement = document.createElement("p")
    toDoItemElement.textContent = toDoTextElement
    toDoListItemsDiv.append(toDoItemElement)
}


