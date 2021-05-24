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

    // Display tasks

    let tasks = function(taskList) {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i]) {
                task(taskList[i]);
            };
        };
    };

    return { tasks, branch }

})();

export default display;