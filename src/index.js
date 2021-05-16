import Todo from './modules/todoGenerator';
import Branch from './modules/branchGenerator';

(function runTododo() {

    let taskForm = document.getElementById('task-form');
    let branchForm = document.getElementById('branch-form');


    let taskList = [];
    let branchList = [];

    // Form submit listener
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNew.task(taskForm);
        clearInput.taskForm(taskForm);
    });

    branchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNew.branch(branchForm);
        clearInput.branchForm(branchForm);
    });



    return { taskList, branchList };

})();


const clearInput = (function() {
    // Clear form
    let taskForm = function(form) {
        form.newTaskTitle.value = '';
    };

    let branchForm = function(form) {
        console.log(form)
        form.newBranchTitle.value = '';
    };

    return { taskForm, branchForm }

})();


const addNew = (function() {

    const tasks = document.querySelector('.task-list');
    const lastTask = tasks.lastChild;
    
    // Add new task to the list
    let task = function(form) {

        const newTask = document.createElement('li');
        newTask.setAttribute('class', 'task')

        // Check if there is last task to number it properly
        if (lastTask) {
            newTask.setAttribute('id', Number(lastTask.id) + 1)
        } else {
            newTask.setAttribute('id', '1')
        }

        // Create new task object


        const todo = new Todo(form.newTaskTitle.value, '12.03.2012', 'Very important');

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

    let branch = function(form) {
        const branchList = document.querySelector('.branch-list')
        const branch = new Branch(form.newBranchTitle.value);

        const newBranchTitle = document.createElement('p');

        newBranchTitle.textContent = branch.title;
        branchList.appendChild(newBranchTitle);


    };

    return { task, branch }
})();