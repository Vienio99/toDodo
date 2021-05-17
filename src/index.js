import Todo from './modules/todoGenerator';
import Branch from './modules/branchGenerator';

const addNew = (function() {

    // Add new task to the list
    let task = function(task) {
        const tasks = document.querySelector('.task-list');
        const lastTask = tasks.lastChild;
        const newTask = document.createElement('li');

        newTask.setAttribute('class', 'task')

        // Check if there is last task to number it properly
        if (lastTask) {
            newTask.setAttribute('id', Number(lastTask.id) + 1)
        } else {
            newTask.setAttribute('id', '1')
        };

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
        const lastBranch = branchList.lastChild;
        const newBranch = document.createElement('button');
        
        if (lastBranch) {
            newBranch.setAttribute('id', Number(lastBranch.id) + 1)
        } else {
            newBranch.setAttribute('id', 1);
        };

        newBranch.setAttribute('class', 'branch');

        newBranch.textContent = branch.title;
        branchList.appendChild(newBranch);


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

const clear = (function() {
    const tasks = document.querySelector('.task-list');

    let taskList = function() {
        while (tasks.firstChild) {
            tasks.removeChild(tasks.firstChild);
            console.log('done');
    }};

    return { taskList };
})();

const show = (function() {

    let taskList = function(taskList) {
        for (let i = 0; i < taskList.length; i++)
            addNew.task(taskList[i]);
    };

    return { taskList };
})();



(function runTododo() {

    const taskForm = document.getElementById('task-form');
    const branchForm = document.getElementById('branch-form');


    let taskList = {};
    let branchList = [];

    let currentBranchId;
    let currentBranchElement;

    // Form submit listener
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = new Todo(1, taskForm.newTaskTitle.value, currentBranchId, 'Very important');
        if (!taskList[currentBranchId]) {
            taskList[currentBranchId] = [];
        }
        taskList[currentBranchId].push(task);
        addNew.task(task);
        clearInput.taskForm(taskForm);
    });

    branchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const branch = new Branch(1, branchForm.newBranchTitle.value);
        branchList.push(branch);
        addNew.branch(branch);
        clearInput.branchForm(branchForm);
    });

    // Branch change listener
    const branches = document.querySelector('.branch-list');
    if (branches) {
        branches.addEventListener('click', (e) => {
            if (e.target.id) {

                // Disactivate style on previous branch
                if (currentBranchElement) {
                    currentBranchElement.removeAttribute('class');
                };
                clear.taskList();

                // Set new current branch
                currentBranchId = e.target.id;
                if (taskList[currentBranchId]) {
                    show.taskList(taskList[currentBranchId]);
                    console.log(taskList[currentBranchId])
                };

                currentBranchElement = e.target;
                currentBranchElement.setAttribute('class', 'active-branch');

            };
        });
    };
})();
