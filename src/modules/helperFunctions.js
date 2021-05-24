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




// Add task to the list

// Display tasks
const add = (function() {

    let task = function(branch, task) {
        branch.push(task);
    };

    return { task };

})();

export { clearInput, clear, add }