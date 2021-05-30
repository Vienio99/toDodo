import Todo from './modules/todoGenerator'
import Branch from './modules/branchGenerator'
import display from './modules/display'
import { clear, clearInput, add } from './modules/helperFunctions';

(function runTododo () {
  // Task list with default branch - 0
  const taskList = { 0: [] }
  const branchList = []

  let activeTaskId

  let activeBranchId = 0
  let activeBranch

  // Task form listener
  const taskForm = document.getElementById('task-form')
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const task = new Todo(taskForm.taskTitle.value, Number(activeBranchId), 'not done')
    clearInput.taskForm(taskForm)

    add.task(taskList[activeBranchId], task)
    clear.taskDisplay()
    display.tasks(taskList[activeBranchId])
  })

  // Branch form listener
  const branchForm = document.getElementById('branch-form')
  branchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const branch = new Branch(branchForm.branchTitle.value)
    branchList.push(branch)
    display.branch(branch)
    clearInput.branchForm(branchForm)
  })

  //   Task edit form
  const taskEditForm = document.getElementById('task-edit-form')
  taskEditForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const editedTask = taskList[activeBranchId][activeTaskId]
    if (taskEditForm.taskTitle.value) {
      editedTask.title = taskEditForm.taskTitle.value
    };
    editedTask.date = taskEditForm.taskDate.value
    editedTask.status = taskEditForm.taskStatus.value
    editedTask.priority = taskEditForm.taskPriority.value
    modal.style.display = 'none'
    clearInput.taskEditForm(taskEditForm)
    clear.taskDisplay()
    display.tasks(taskList[activeBranchId])
  })

  // Branch change listener
  const branches = document.querySelector('.branch-list')
  branches.addEventListener('click', (e) => {
    if (e.target.id) {
      // Deactivate style on previous branch
      if (activeBranch) {
        activeBranch.classList.remove('active-branch')
      };
      clear.taskDisplay()

      // Set new current branch
      activeBranchId = e.target.id
      console.log(taskList[activeBranchId])
      if (taskList[activeBranchId]) {
        display.tasks(taskList[activeBranchId])
      } else {
        taskList[activeBranchId] = []
      };

      activeBranch = e.target
      activeBranch.classList.add('active-branch')
    };
  })

  const modal = document.querySelector('.modal')

  // Trash, checkbox and edit icon listener
  const tasks = document.querySelector('.task-list')
  tasks.addEventListener('click', (e) => {
    const target = e.target.classList[0]
    let clickedTaskId = e.target.parentElement.id
    console.log(clickedTaskId)
    if (target === 'trash-icon') {
      clickedTaskId = e.target.parentElement.parentElement.id
      taskList[activeBranchId].splice(clickedTaskId, 1)
    } else if (target === 'edit-icon') {
      modal.style.display = 'block'
      activeTaskId = e.target.parentElement.parentElement.id
    } else if (target === 'checkbox-icon') {
      const currentTask = taskList[activeBranchId][clickedTaskId]
      if (currentTask.status === 'not done') {
        currentTask.status = 'done'
      } else {
        currentTask.status = 'not done'
      };
    };
    clear.taskDisplay()
    display.tasks(taskList[activeBranchId])
  })

  // Close modal
  const closeBtn = document.querySelector('.close-btn')
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = 'none'
    };
  }
})()
