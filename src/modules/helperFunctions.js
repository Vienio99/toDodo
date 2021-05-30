// Clear form
const clearInput = (function () {
  const taskForm = function (form) {
    form.taskTitle.value = ''
  }

  const branchForm = function (form) {
    form.branchTitle.value = ''
  }

  const taskEditForm = function (form) {
    form.taskTitle.value = ''
  }

  return { taskForm, branchForm, taskEditForm }
})()

// Clear tasks display
const clear = (function () {
  const tasks = document.querySelector('.task-list')

  const taskDisplay = function () {
    while (tasks.firstChild) {
      tasks.removeChild(tasks.firstChild)
    }
  }

  return { taskDisplay }
})()

// Add task to the list

// Display tasks
const add = (function () {
  const task = function (branch, task) {
    branch.push(task)
  }

  return { task }
})()

export { clearInput, clear, add }
