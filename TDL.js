function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.innerHTML = taskInput.value + '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    var li = button.parentNode;
    var taskList = document.getElementById('taskList');
    taskList.removeChild(li);
}
