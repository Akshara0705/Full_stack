const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const taskText = input.value.trim();
    if (taskText) {
        addTask(taskText);

        input.value = '';
    } else {
        alert('Please enter a task!');
    }
});

function addTask(taskText) {
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function () {
        taskSpan.classList.toggle('completed');
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function (){
        todoList.removeChild(li);
    });

    li.appendChild(taskSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
}
