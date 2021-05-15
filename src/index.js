import Todo from './modules/todoGenerator';
import Branch from './modules/branchGenerator';

(function runTododo() {

    const tasks = document.querySelector('.task-list');
    const branch = document.getElementById('current-branch');
    const lastTask = tasks.lastChild;

    let taskForm = document.getElementById('task-form');
    let branchForm = document.getElementById('branch-form')

    let taskList = [];

    // Form submit listener
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNewTask();
        clearTaskForm();
    });

    branchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNewBranch();
        clearBranchForm();
    });

    // Add new task to the list
    let addNewTask = function() {

        const newTask = document.createElement('li');
        newTask.setAttribute('class', 'task')

        // Check if there is last task to number it properly
        if (lastTask) {
            newTask.setAttribute('id', Number(lastTask.id) + 1)
        } else {
            newTask.setAttribute('id', '1')
        }

        // Create new task object

        const todo = new Todo(taskForm.newTaskTitle.value, '12.03.2012', 'Very important');
        taskList.push(todo);

        // Add necessary elements

        tasks.appendChild(newTask);
        const checkboxIcon = document.createElement('span');
        checkboxIcon.setAttribute('class', 'checkbox-icon')
        newTask.appendChild(checkboxIcon);
        
        const newTaskTitle = document.createElement('p');
        newTaskTitle.textContent = todo.title;
        newTask.appendChild(newTaskTitle);

        const modifyIcons = document.createElement('div');
        modifyIcons.setAttribute('class', 'modify-icons');

        newTask.append(modifyIcons);

        const editIcon = document.createElement('span');
        editIcon.setAttribute('class', 'edit-icon')
        modifyIcons.appendChild(editIcon);


        const trashIcon = document.createElement('span');
        trashIcon.setAttribute('class', 'trash-icon')
        modifyIcons.appendChild(trashIcon);


    };

    let addNewBranch = function() {
        const branchList = document.querySelector('.branch-list')
        const branch = new Branch(branchForm.newBranchTitle.value);

        const newBranchTitle = document.createElement('div');
        const newBranchPara = document.createElement('p');

        const branchIcon = document.createElement('span');
        branchIcon.setAttribute('class', 'branch-icon');
        newBranchTitle.appendChild(branchIcon);

        newBranchPara.textContent = branch.title;
        newBranchTitle.appendChild(newBranchPara);
        branchList.appendChild(newBranchTitle);


    };

    // Clear form
    let clearTaskForm = function() {
        taskForm.newTaskTitle.value = '';
    };

    let clearBranchForm = function() {
        branchForm.newBranchTitle.value = '';
    };


})();
