import Todo from './modules/todoGenerator';
import Branch from './modules/branchGenerator';

(function runTododo() {

    const taskForm = document.getElementById('task-form');
    const branchForm = document.getElementById('branch-form');


    let taskList = [];
    let branchList = [];

    // Form submit listener
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = new Todo(taskForm.newTaskTitle.value, '12.03.2012', 'Very important');
        taskList.push(task);
        addNew.task(task);
        clearInput.taskForm(taskForm);
        console.log(taskList);
    });

    branchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const branch = new Branch(branchForm.newBranchTitle.value);
        branchList.push(branch);
        addNew.branch(branch);
        clearInput.branchForm(branchForm);
        console.log(branchList);
    });

})();

// Clear form
const clearInput = (function() {

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
    let task = function(task) {

        const newTask = document.createElement('li');
        newTask.setAttribute('class', 'task')

        // Check if there is last task to number it properly
        if (lastTask) {
            newTask.setAttribute('id', Number(lastTask.id) + 1)
        } else {
            newTask.setAttribute('id', '1')
        }

        // Add necessary elements

        tasks.appendChild(newTask);
        const checkboxIcon = document.createElement('span');
        checkboxIcon.setAttribute('class', 'checkbox-icon')
        newTask.appendChild(checkboxIcon);
        
        const taskTitlePara = document.createElement('p');
        taskTitlePara.textContent = task.title;
        newTask.appendChild(taskTitlePara);

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

    let branch = function(branch) {
        const branchList = document.querySelector('.branch-list')


        const branchTitlePara = document.createElement('p');

        branchTitlePara.textContent = branch.title;
        branchList.appendChild(branchTitlePara);


    };

    return { task, branch }
})();