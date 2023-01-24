let toDoItems = []
let numberGoUp = 0

const heroDiv = document.getElementById("hero")
const toDoListBox = document.createElement("div")
toDoListBox.setAttribute("id","gehe")
const toDoListItemsDiv = document.createElement("div")
toDoListItemsDiv.setAttribute("id", "spec")
const siteTitle = document.createElement("h1")
siteTitle.textContent = "Your own personal To-Do-List"

const textInputField = document.createElement("input")
textInputField.placeholder = ("Add to do's herdsae")

const btnAddToDo = document.createElement("button")
btnAddToDo.textContent = ("Submit ToDo")
btnAddToDo.setAttribute("class", "button1")


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
    const currentDateStamp = currentTime.getDate()
    const currentMonthStamp = currentTime.getMonth() + 1
    const currentYearStamp = currentTime.getFullYear()

    toDoItems.push({
        name: textElement,
        id: currentTimeStamp
    })

    displayToDoFunction(textElement, currentDateStamp, currentMonthStamp, currentYearStamp, currentTimeStamp)
    textInputField.value = ""
}

function displayToDoFunction(textElement, currentDateStamp, currentMonthStamp, currentYearStamp, currentTimeStamp){
    numberGoUp = numberGoUp + 1
    const paragraphElement = document.createElement("p")
    const removeButton = document.createElement("button")
    const itemDiv = document.createElement("div")
    itemDiv.setAttribute("class", "ID3")
    const idForRemoval = currentTimeStamp
    removeButton.textContent = ("Remove")
    removeButton.setAttribute("class", "button2")   
    removeButton.addEventListener("click", function(){
        paragraphElement.remove()
        removeButton.remove()
        itemDiv.remove()

        const indexTest = toDoItems.findIndex((value) => value.id === idForRemoval)
        toDoItems.splice(indexTest, 1)
    })
    paragraphElement.textContent = "• " + textElement + " - " + currentDateStamp + "." + currentMonthStamp + "." + currentYearStamp
    toDoListItemsDiv.append(itemDiv)
    itemDiv.append(paragraphElement, removeButton)
    console.log(toDoItems)
}



