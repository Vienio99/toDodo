import Todo from './modules/todoGenerator';
import Branch from './modules/branchGenerator';

(function runTododo() {

    const newBranch = new Branch('My branch');
    const todo = new Todo('Clean house', 'Clean upper and lower floor', '12.03.2012', 'Very important');

    const tasks = document.getElementById('tasks');
    const branch = document.getElementById('branch');

    branch.textContent = newBranch.title;

    // Create task and append it to the list
    const newTask = document.createElement('li');
    newTask.setAttribute('class', 'task')
    newTask.textContent = todo.description;
    tasks.appendChild(newTask);
})();

