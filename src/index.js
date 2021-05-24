import Todo from './modules/todoGenerator';
import Branch from './modules/branchGenerator';

const display = (function() {

    // Add new task to the list
    let task = function(task) {
        const tasks = document.querySelector('.task-list');
        const lastTask = tasks.lastChild;

        const newTask = document.createElement('li');
        if (task.priority === 'important') {
            newTask.classList.add('important');
        };

        newTask.classList.add('task');

        // Check if there is last task to number it properly
        if (lastTask) {
            newTask.setAttribute('id', Number(lastTask.id) + 1)
        } else {
            newTask.setAttribute('id', '0')
        };

        // Add necessary elements

        tasks.appendChild(newTask);
        const checkboxIcon = document.createElement('span');
        checkboxIcon.classList.add('checkbox-icon');
        newTask.appendChild(checkboxIcon);

        if (task.status === 'not done') {
            checkboxIcon.style.background = 'url(../img/checkbox.png) no-repeat';
        } else {
            checkboxIcon.style.background = 'url(../img/checkbox-checked.png) no-repeat';
        };
        checkboxIcon.style.backgroundSize = '18px';

        const taskTitlePara = document.createElement('p');
        taskTitlePara.textContent = task.title;
        newTask.appendChild(taskTitlePara);

        const taskDate = document.createElement('p');
        taskDate.classList.add('date');
        taskDate.textContent = task.date;
        newTask.appendChild(taskDate);

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
        form.taskTitle.value = '';
    };

    let branchForm = function(form) {
        form.branchTitle.value = '';
    };

    let taskEditForm = function(form) {
        form.taskTitle.value = '';
    }

    return { taskForm, branchForm, taskEditForm }

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


// Display tasks
const show = (function() {

    let taskDisplay = function(taskList) {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i]) {
                display.task(taskList[i]);
            };
        };
    };

    return { taskDisplay };

})();



(function runTododo() {

    // Task list with default branch - 0
    let taskList = {0: [],};
    let branchList = [];

    let activeTaskId;
    
    let activeBranchId = 0;
    let activeBranch;

    // Task form listener
    const taskForm = document.getElementById('task-form');
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = new Todo(taskForm.taskTitle.value, Number(activeBranchId), 'not done');
        display.task(task);
        clearInput.taskForm(taskForm);

        if (taskList[activeBranchId]) {
            taskList[activeBranchId].push(task);
        } else {
            taskList[activeBranchId] = [];
            taskList[activeBranchId].push(task);
        };
    });

    // Branch form listener
    const branchForm = document.getElementById('branch-form');
    branchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const branch = new Branch(branchForm.branchTitle.value);
        branchList.push(branch);
        display.branch(branch);
        clearInput.branchForm(branchForm);
    });

    //   Task edit form
    const taskEditForm = document.getElementById('task-edit-form');
    taskEditForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let editedTask = taskList[activeBranchId][activeTaskId];
        if (taskEditForm.taskTitle.value) {
            editedTask.title = taskEditForm.taskTitle.value;
        };
        editedTask.date = taskEditForm.taskDate.value;
        editedTask.status = taskEditForm.taskStatus.value;
        editedTask.priority = taskEditForm.taskPriority.value;
        modal.style.display = "none";
        clearInput.taskEditForm(taskEditForm);
        clear.taskDisplay();
        show.taskDisplay(taskList[activeBranchId]);
    });


    // Branch change listener
    const branches = document.querySelector('.branch-list');
    branches.addEventListener('click', (e) => {
            if (e.target.id) {

                // Deactivate style on previous branch
                if (activeBranch) {
                    activeBranch.classList.remove('active-branch');
                };
                clear.taskDisplay();

                // Set new current branch
                activeBranchId = e.target.id;
                if (taskList[activeBranchId]) {
                    show.taskDisplay(taskList[activeBranchId]);
                };

                activeBranch = e.target;
                activeBranch.classList.add('active-branch');

            };
        });

        
    const modal = document.querySelector(".modal");


    // Trash, checkbox and edit icon listener
    const tasks = document.querySelector('.task-list');
    tasks.addEventListener('click', (e) => {
        const target = e.target.classList[0];
        if (target === 'trash-icon') {
            let taskId = e.target.parentElement.parentElement.id;
            taskList[activeBranchId].splice(taskId, 1);
            clear.taskDisplay();
            show.taskDisplay(taskList[activeBranchId]);
        } else if (target === 'edit-icon') {
            modal.style.display = 'block';
            activeTaskId = e.target.parentElement.parentElement.id;
        } else if (target === 'checkbox-icon') {
            let clickedTaskId = e.target.parentElement.id;
            let currentTask = taskList[activeBranchId][clickedTaskId];
            if (currentTask.status === 'not done') {
                currentTask.status = 'done';
            } else {
                currentTask.status = 'not done';
            };
            clear.taskDisplay();
            show.taskDisplay(taskList[activeBranchId]);
        };
    });

    // Close modal
    let closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(e){
        if (e.target == modal){
          modal.style.display = "none"
        };
      };


})();
