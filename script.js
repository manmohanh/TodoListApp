const todoInput = document.getElementById('todoInput')
const addButton = document.getElementById('addButton')
const ulList = document.getElementById('todoList')

addButton.addEventListener('click',addTodo)
todoInput.addEventListener('keypress',function(e){
  if(e.key === 'Enter'){
    addTodo()
  }
})

function addTodo(){
  const todoText = todoInput.value.trim()
  if(todoText !== ''){
    const li = document.createElement('li')
    li.textContent = todoText
    ulList.appendChild(li)
    todoInput.value = ''
  }
}