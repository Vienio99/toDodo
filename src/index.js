import Todo from './modules/todoGenerator';
import Branch from './modules/branchGenerator';

const display = (function() {

    // Add new task to the list
    let task = function(task) {
        const tasks = document.querySelector('.task-list');
        const lastTask = tasks.lastChild;

        const newTask = document.createElement('li');
        newTask.classList.add('task');

        // Check if there is last task to number it properly
        if (lastTask) {
            newTask.setAttribute('id', Number(lastTask.id) + 1)
        } else {
            newTask.setAttribute('id', '1')
        };

        // Add necessary elements

        tasks.appendChild(newTask);
        const checkboxIcon = document.createElement('span');
        checkboxIcon.classList.add('checkbox-icon');
        newTask.appendChild(checkboxIcon);
        
        const taskTitlePara = document.createElement('p');
        taskTitlePara.textContent = task.title;
        newTask.appendChild(taskTitlePara);

        const modifyIcons = document.createElement('div');
        modifyIcons.classList.add('modify-icons');

        newTask.append(modifyIcons);

        const editIcon = document.createElement('span');
        editIcon.classList.add('edit-icon');
        modifyIcons.appendChild(editIcon);


        const trashIcon = document.createElement('span');
        trashIcon.classList.add('trash-icon');
        modifyIcons.appendChild(trashIcon);
    };

    // Add new branch to the list
    let branch = function(branch) {
        const branchList = document.querySelector('.branch-list')
        const lastBranch = branchList.lastChild;


        const newBranch = document.createElement('button');
        newBranch.classList.add('branch');
        newBranch.textContent = branch.title;
        branchList.appendChild(newBranch);


        // Check if there is last branch to number it properly
        if (!lastBranch.id) {
            newBranch.setAttribute('id', 1);
        } else {
            newBranch.setAttribute('id', Number(lastBranch.id) + 1);
        };
    };
    return { task, branch }

})();


// Clear form
const clearInput = (function() {

    let taskForm = function(form) {
        form.newTaskTitle.value = '';
    };

    let branchForm = function(form) {
        form.newBranchTitle.value = '';
    };

    return { taskForm, branchForm }

})();

// Clear tasks display
const clear = (function() {
    const tasks = document.querySelector('.task-list');

    let taskDisplay = function() {
        while (tasks.firstChild) {
            tasks.removeChild(tasks.firstChild);
    }};

    return { taskDisplay };

})();


// Display task
const show = (function() {

    let taskDisplay = function(taskList) {
        for (let i = 0; i < taskList.length; i++)
            display.task(taskList[i]);
    };

    return { taskDisplay };

})();



(function runTododo() {

    // Task list with default branch - 0
    let taskList = {0: [],};

    let branchList = [];
    let currentBranchId = 0;
    let currentBranchElement;

    // Task form listener
    const taskForm = document.getElementById('task-form');
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = new Todo(taskForm.newTaskTitle.value, currentBranchId, 'Very important');

        if (taskList[currentBranchId]) {
            taskList[currentBranchId].push(task);
        } else {
            taskList[currentBranchId] = [];
            taskList[currentBranchId].push(task);
        };

        display.task(task);
        clearInput.taskForm(taskForm);
    });

    // Branch form listener
    const branchForm = document.getElementById('branch-form');
    branchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const branch = new Branch(branchForm.newBranchTitle.value);
        branchList.push(branch);
        display.branch(branch);
        clearInput.branchForm(branchForm);
    });

    // Branch change listener
    const branches = document.querySelector('.branch-list');
    branches.addEventListener('click', (e) => {
            if (e.target.id) {

                // Deactivate style on previous branch
                if (currentBranchElement) {
                    currentBranchElement.classList.remove('active-branch');
                };
                clear.taskDisplay();

                // Set new current branch
                currentBranchId = e.target.id;
                if (taskList[currentBranchId]) {
                    show.taskDisplay(taskList[currentBranchId]);
                };

                currentBranchElement = e.target;
                currentBranchElement.classList.add('active-branch');

            };
        });
})();
