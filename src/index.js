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
            newTask.setAttribute('id', '0')
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


// Display tasks
const show = (function() {

    let taskDisplay = function(taskList) {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i]) {
                display.task(taskList[i]);
                console.log(taskList[i])
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

        const task = new Todo(taskForm.newTaskTitle.value, Number(activeBranchId), 'Very important');
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
        const branch = new Branch(branchForm.newBranchTitle.value);
        branchList.push(branch);
        display.branch(branch);
        clearInput.branchForm(branchForm);
    });

    //   Task edit form
    const editTaskForm = document.getElementById('edit-task-form');
    editTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let editedTask = taskList[activeBranchId][activeTaskId]
        console.log(editedTask.title)
        editedTask.title = editTaskForm.editTaskName.value;
        console.log(editedTask.title)
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
    let modal = document.querySelector(".modal");


    // Trash and edit icon listener
    const tasks = document.querySelector('.task-list');
    tasks.addEventListener('click', (e) => {
        if (e.target.classList[0] === 'trash-icon') {
            let taskId = e.target.parentElement.parentElement.id;
            taskList[activeBranchId].splice(taskId, 1);
            clear.taskDisplay();
            show.taskDisplay(taskList[activeBranchId]);
        } else if (e.target.classList[0] === 'edit-icon'){
            modal.style.display = 'block';
            activeTaskId = e.target.parentElement.parentElement.id;
        }
    });

    // Close modal
    let closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        clear.taskDisplay();
        show.taskDisplay(taskList[activeBranchId]);
    });

    window.onclick = function(e){
        if (e.target == modal){
          modal.style.display = "none"
          clear.taskDisplay();
          show.taskDisplay(taskList[activeBranchId]);
        };
      };

})();
