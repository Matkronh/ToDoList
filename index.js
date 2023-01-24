let toDoItems = []

/* button styling array */
let toDoFrames = [
    "https://github.com/Matkronh/ToDoList/blob/main/imgs/backgrounsetc-starfield-1.jpg?raw=true",
    "https://github.com/Matkronh/ToDoList/blob/main/imgs/backgrounsetc-starfield-2.jpg?raw=true",
    "https://github.com/Matkronh/ToDoList/blob/main/imgs/backgrounsetc-starfield-3.jpg?raw=true",
    "https://github.com/Matkronh/ToDoList/blob/main/imgs/backgrounsetc-starfield-4.jpg?raw=true",
    "https://github.com/Matkronh/ToDoList/blob/main/imgs/backgrounsetc-starfield-5.jpg?raw=true"
]

const heroDiv = document.getElementById("hero")
const toDoListBox = document.createElement("div")
toDoListBox.setAttribute("id","gehe")
const toDoListItemsDiv = document.createElement("div")
toDoListItemsDiv.setAttribute("id", "spec")
const siteTitle = document.createElement("h1")
siteTitle.textContent = "Your own personal To-Do-List"

const textInputField = document.createElement("input")
textInputField.placeholder = (" Add to do's here")

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
///////////////////////////////////////////////////////////

const localToDoItems = "toDoItems"

function updateLocalStorage(){
    localStorage.setItem(localToDoItems, JSON.stringify(toDoItems))
}

function getLocalStorage(){
    toDoItems = JSON.parse(localStorage.getItem(localToDoItems)) || []
}

getLocalStorage()

/* 2 ways to enter to-do items, click and enter */

btnAddToDo.addEventListener ("click", addToDoFunction);

textInputField.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13){
        addToDoFunction()
    }
})

/* Function to create the to-do's */

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
        id: currentTimeStamp,
        fav: false,
        currentDate: currentDateStamp,
        currentMonth: currentMonthStamp,
        currentYear: currentYearStamp
    })

    updateLocalStorage()

    displayToDoFunction(textElement, currentDateStamp, currentMonthStamp, currentYearStamp, currentTimeStamp)
    textInputField.value = ""
}



/* Button function to render To-Do-List items */

function displayToDoFunction(textElement, currentDateStamp, currentMonthStamp, currentYearStamp, currentTimeStamp){
    const paragraphElement = document.createElement("p")
    paragraphElement.textContent = "• " + textElement + " - " + currentDateStamp + "." + currentMonthStamp + "." + currentYearStamp

    const removeButton = document.createElement("button")
    removeButton.textContent = ("Remove")
    removeButton.setAttribute("class", "button2")

    const itemDiv = document.createElement("div")
    itemDiv.setAttribute("class", "ID3")

    const favouriteButton = document.createElement("i")
    favouriteButton.setAttribute("class","fa-regular fa-star iUnfavourited")

    let favourited = true
    let idForRemoval = currentTimeStamp

    toDoListItemsDiv.append(itemDiv)


    /* Button styling */
    let bgImg = toDoFrames[Math.floor(Math.random()*5)]
    itemDiv.style.backgroundImage = `url(${bgImg})`
    itemDiv.style.backgroundSize = "80%"
    itemDiv.append(paragraphElement, favouriteButton, removeButton)

    /* Button to favourite tasks that require more urgent action, which brings the task to the top */
    favouriteButton.addEventListener("click", function(){
        if (favourited){
            favouriteButton.setAttribute("class", "fa-solid fa-star iFavourited")
            favourited = false
            toDoListBox.append(itemDiv)
            toDoItems.fav = true
        } else if (!favourited){
            favouriteButton.setAttribute("class","fa-regular fa-star iUnfavourited")
            favourited = true
            toDoListItemsDiv.append(itemDiv)
            toDoItems.fav = false
        }
    })

    /* Button to remove a to-do list item once finished, I did not implement a completed button since it felt redundant */
    removeButton.addEventListener("click", function(){
        paragraphElement.remove()
        removeButton.remove()
        itemDiv.remove()

        const indexTest = toDoItems.findIndex((value) => value.id === idForRemoval)
        toDoItems.splice(indexTest, 1)
        updateLocalStorage()
    })
}


toDoItems.forEach((toDoItems) => {
    if (toDoItems.fav) displayToDoFunction(toDoItems.name, toDoItems.currentDate, toDoItems.currentMonth, toDoItems.currentYear)
    
    else displayToDoFunction(toDoItems.name, toDoItems.currentDate, toDoItems.currentMonth, toDoItems.currentYear)
  })

console.log(toDoItems)


/* fikse favourite button */