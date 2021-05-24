import display from './display';

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

export { clearInput, clear, show }