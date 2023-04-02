const inputBox = document.querySelector(".todo-input")
const addBtn = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")


const createTodo = (e) => {
  // //stop window reset
  e.preventDefault()
  //create div
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")
  //create LI
  const todoItem = document.createElement("li") 
  todoItem.classList.add("todo-item")
  todoItem.innerText = inputBox.value
  //create check Buttons
  const checkBtn = document.createElement("button")
  checkBtn.classList.add("complete-btn")
  checkBtn.innerHTML = `<i class = " fas fa-check"</i>`
  //create trash Buttons
  const trashBtn = document.createElement("button")
  trashBtn.classList.add("trash-btn")
  trashBtn.innerHTML = `<i class = " fas fa-trash"</i>`
  //append childs
  todoDiv.appendChild(todoItem)
  todoDiv.appendChild(checkBtn)
  todoDiv.appendChild(trashBtn)
  todoList.appendChild(todoDiv)
  //clean input value
  inputBox.value = ""

}

const checkActived = (e) => {
  let item = e.target
  let todo = item.parentElement
  if(item.classList[0] == "complete-btn"){
    todo.classList.toggle("completed")
  } else if(item.classList[0] == "trash-btn"){
    todo.remove()
  }
}





/* Event listeners */
addBtn.addEventListener("click", createTodo)
todoList.addEventListener("click", checkActived)