{/* <div class="task-item" data-task-id="1">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
                <label for="task-1"></label>
            </form>
            <span class="task-item__text">
                Посмотреть новый урок по JavaScript
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
            Удалить
        </button>
    </div>
</div>
 */}

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
let tasksList = document.querySelector('.tasks-list')
for (i = 0; i < tasks.length; i++) {
    let taskItem = document.createElement('div')
    taskItem.className = 'task-item'
    taskItem.dataset.taskId = tasks[i].id
    let taskItemMainContainer =  document.createElement('div')
    taskItemMainContainer.className = 'task-item__main-container'
    let taskItemMainContent =  document.createElement('div')
    taskItemMainContent.className = 'task-item__main-content'
    let checkboxForm = document.createElement('form')
    checkboxForm.className = 'checkbox-form'
    let checkboxFormCheckbox = document.createElement('input')
    checkboxFormCheckbox.className = 'checkbox-form__checkbox'
    checkboxFormCheckbox.setAttribute('type', 'checkbox')
    checkboxFormCheckbox.id = `task-${tasks[i].id}`
    let labelForTasks = document.createElement('label')
    labelForTasks.setAttribute('for', `task-${tasks[i].id}`)
    let taskItemText = document.createElement('span')
    taskItemText.className = 'task-item__text'
    taskItemText.textContent = tasks[i].text
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