const inputBox = document.querySelector(".todo-input")
const addBtn = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")





const addTodo = (e) => {
  e.preventDefault()
  //create Div
  let todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")
  //create li
  let todoItem = document.createElement("li")
  todoItem.classList.add("todo-item")
  todoItem.innerText = inputBox.value
  saveLocalStorage(inputBox.value)
  //create complete button
  let completeBtn = document.createElement("button")
  completeBtn.classList.add("complete-btn")
  completeBtn.innerHTML = `<i class ="fas fa-check"></i>`
  //create trash button
  let trashBtn = document.createElement("button")
  trashBtn.classList.add("trash-btn")
  trashBtn.innerHTML = `<i class ="fas fa-trash"></i>`
  //append
  todoDiv.appendChild(todoItem)
  todoDiv.appendChild(completeBtn)
  todoDiv.appendChild(trashBtn)
  todoList.appendChild(todoDiv)

  //clean input box value
  inputBox.value = ""

}

// completed or deleted a li

const listButtonCheck = (e) => {
  let item = e.target
  if(item.classList[0] == "complete-btn"){
    item.parentElement.classList.toggle("completed")
  } else if(item.classList[0] == "trash-btn"){
    item.parentElement.remove()
    deleteLocalStorage(item.parentElement)
  }
}

//save data to localStorage

const saveLocalStorage = (data) => {
  let todo
  if(localStorage.getItem("todos") === null){
    todo = []
  } else{
    todo = JSON.parse(localStorage.getItem("todos"))
  }

  todo.push(data)
 localStorage.setItem("todos", JSON.stringify(todo))

}



const domContent = (e) => {
  let todo = JSON.parse(localStorage.getItem("todos"))
  todo.forEach(item => {
    todoList.innerHTML +=  `<div class="todo">
    <li class="todo-item">${item}</li>
    <button class="complete-btn"><i class ="fas fa-check"></i></button>
    <button class="trash-btn"><i class ="fas fa-trash"></i></button>
 </div>`
  });
}





const deleteLocalStorage = (data) => {
  let todo = JSON.parse(localStorage.getItem("todos"))
  let itemIndex = todo.indexOf(data.innerText)
  todo.splice(itemIndex, 1)
  localStorage.setItem("todos", JSON.stringify(todo))
}




//EventLiseners
addBtn.addEventListener("click", addTodo)
todoList.addEventListener("click", listButtonCheck)
document.addEventListener("DOMContentLoaded", domContent)






















































































// const inputBox = document.querySelector(".todo-input")
// const addBtn = document.querySelector(".todo-btn")
// const todoList = document.querySelector(".todo-list")
// const filterTodo = document.querySelector(".filter-todo")


// const createTodo = (e) => {
//   // //stop window reset
//   e.preventDefault()
//   //create div
//   const todoDiv = document.createElement("div")
//   todoDiv.classList.add("todo")
//   //create LI
//   const todoItem = document.createElement("li") 
//   todoItem.classList.add("todo-item")
//   todoItem.innerText = inputBox.value
//   saveLocaStorage(inputBox.value)
//   //create check Buttons
//   const checkBtn = document.createElement("button")
//   checkBtn.classList.add("complete-btn")
//   checkBtn.innerHTML = `<i class = " fas fa-check"</i>`
//   //create trash Buttons
//   const trashBtn = document.createElement("button")
//   trashBtn.classList.add("trash-btn")
//   trashBtn.innerHTML = `<i class = " fas fa-trash"</i>`
//   //append childs
//   todoDiv.appendChild(todoItem)
//   todoDiv.appendChild(checkBtn)
//   todoDiv.appendChild(trashBtn)
//   todoList.appendChild(todoDiv)
//   //clean input value
//   inputBox.value = ""

// }

// const checkActived = (e) => {
//   let item = e.target
//   let todo = item.parentElement
//   if(item.classList[0] == "complete-btn"){
//     todo.classList.toggle("completed")
//   } else if(item.classList[0] == "trash-btn"){
//     todo.remove()
//     deleteLocaStorage(todo)
//   }

// }



// const saveLocaStorage = (value) => {
//   let todo
//   if(localStorage.getItem("todos") === null){
//     todo = []
//   } else{
//     todo = JSON.parse(localStorage.getItem("todos"))
//   }
//   todo.push(value)
//   localStorage.setItem("todos", JSON.stringify(todo))

//   console.log();
// }



// const updateDom = (e) => {
//   todo = JSON.parse(localStorage.getItem("todos"))
//   todo.forEach(item => {
//     const todoDiv = document.createElement("div")
//   todoDiv.classList.add("todo")
//   //create LI
//   const todoItem = document.createElement("li") 
//   todoItem.classList.add("todo-item")
//   todoItem.innerText = item
//   //create check Buttons
//   const checkBtn = document.createElement("button")
//   checkBtn.classList.add("complete-btn")
//   checkBtn.innerHTML = `<i class = " fas fa-check"</i>`
//   //create trash Buttons
//   const trashBtn = document.createElement("button")
//   trashBtn.classList.add("trash-btn")
//   trashBtn.innerHTML = `<i class = " fas fa-trash"</i>`
//   //append childs
//   todoDiv.appendChild(todoItem)
//   todoDiv.appendChild(checkBtn)
//   todoDiv.appendChild(trashBtn)
//   todoList.appendChild(todoDiv)
    
//   });
// }



// const deleteLocaStorage = (value) => {
//   let todo
//   if(localStorage.getItem("todos") === null){
//     todo = []
//   } else{
//     todo = JSON.parse(localStorage.getItem("todos"))
//   }
//  let index = todo.indexOf(value.innerText)
//   todo.splice(index, 1)
//   localStorage.setItem("todos", JSON.stringify(todo))

// }





// /* Event listeners */
// addBtn.addEventListener("click", createTodo)
// todoList.addEventListener("click", checkActived)
// document.addEventListener("DOMContentLoaded", updateDom)

