import Todo from './modules/todoGenerator';
import Branch from './modules/branchGenerator';

(function runTododo() {

    const tasks = document.querySelector('.task-list');
    const branch = document.getElementById('current-branch');
    let form = document.getElementById('task-form');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const lastTask = tasks.lastChild;
        console.log(lastTask)
        // Create task and append it to the list
        const newTask = document.createElement('li');
        newTask.setAttribute('class', 'task')

        if (lastTask) {
            newTask.setAttribute('id', Number(lastTask.id) + 1)
        } else {
            newTask.setAttribute('id', '1')
        }


        const todo = new Todo(form.newTaskTitle.value, '12.03.2012', 'Very important');
        tasks.appendChild(newTask);
        const icon = document.createElement('span');
        icon.setAttribute('class', 'icon')
        newTask.appendChild(icon);

        
        const newTaskPara = document.createElement('p');
        newTaskPara.textContent = todo.title;
        newTask.appendChild(newTaskPara);





        form.newTaskTitle.value = '';
    });


})();
