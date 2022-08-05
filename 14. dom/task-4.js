const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript"
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока"
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока"
  }
]
let createNewTask = document.querySelector('.create-task-block')
createNewTask.addEventListener("submit", (event) => {
  event.preventDefault()
  let newTask = {
    id: String(Date.now()),
    completed: false
  }
  let allTextInTasks = []
  tasks.forEach(item => {
    allTextInTasks.push(item.text)
  })
  newTask.text = event.target.elements.taskName.value
  let errorMessageBlock = document.createElement('span')
  if (document.querySelector('.error-message-block')) {
    errorMessageBlock = document.querySelector('.error-message-block')
  } else {
  errorMessageBlock.className = 'error-message-block'
  }
  createNewTask.append(errorMessageBlock)
  if (!newTask.text) {
    errorMessageBlock.textContent = 'Название задачи не должно быть пустым'
  } else if(allTextInTasks.includes(newTask.text)) {
    errorMessageBlock.textContent = 'Задача с таким названием уже существует.'
  } else {
    errorMessageBlock.remove()
    tasks.push(newTask)
    viewTask(newTask)
  }
})

let tasksList = document.querySelector('.tasks-list')
for (i = 0; i < tasks.length; i++) {
  viewTask(tasks[i])
}

function viewTask(task) {
  let taskItem = document.createElement('div')
  taskItem.className = 'task-item'
  taskItem.dataset.taskId = task.id
  let taskItemMainContainer =  document.createElement('div')
  taskItemMainContainer.className = 'task-item__main-container'
  let taskItemMainContent =  document.createElement('div')
  taskItemMainContent.className = 'task-item__main-content'
  let checkboxForm = document.createElement('form')
  checkboxForm.className = 'checkbox-form'
  let checkboxFormCheckbox = document.createElement('input')
  checkboxFormCheckbox.className = 'checkbox-form__checkbox'
  checkboxFormCheckbox.setAttribute('type', 'checkbox')
  checkboxFormCheckbox.id = `task-${task.id}`
  let labelForTasks = document.createElement('label')
  labelForTasks.htmlFor = `task-${task.id}`
  let taskItemText = document.createElement('span')
  taskItemText.className = 'task-item__text'
  taskItemText.textContent = task.text
  let deleteButton = document.createElement('button')
  deleteButton.className = 'task-item__delete-button default-button delete-button'
  deleteButton.dataset.deleteTaskId = '5'
  deleteButton.textContent = 'Удалить'
  tasksList.append(taskItem)
  taskItem.append(taskItemMainContainer)
  taskItemMainContainer.append(taskItemMainContent)
  taskItemMainContent.prepend(checkboxForm)
  checkboxForm.prepend(checkboxFormCheckbox)
  checkboxForm.append(labelForTasks)
  taskItemMainContent.append(taskItemText)
  taskItemMainContent.after(deleteButton)
  
}
