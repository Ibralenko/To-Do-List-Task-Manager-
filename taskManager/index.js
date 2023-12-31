const tasksContainer = document.querySelector('.tasks');
const inputTask = document.getElementById('task');
const clearBtn = document.querySelector('.delete-btn')
const error = document.querySelector('.error');
const form = document.forms.taskDesk;
const hiddenEl = document.querySelector('.grey')
const myNodelist = document.getElementsByTagName("li");
const todoView = document.getElementById('todoView')
const checkbox = document.querySelectorAll('checkbox')
const toDolist = [];

function createTask() {
    let taskList = document.createElement('li')
    taskList.textContent = inputTask.value;
    tasksContainer.append(taskList);
    const check = document.createElement("input");
    check.type = "checkbox"
    check.classList.add('checkbox');
    taskList.append(check);
}

function addTask() {
    if (inputTask.value === '') {
        return error.textContent = `Введите задачу`
    }{
        hiddenEl.classList.add('hidden');
        error.textContent = ``;
        clearBtn.removeAttribute('disabled');
        localStorage.setItem('tasks', tasksContainer.innerHTML);
        createTask()
    }
    form.reset()
}


function showTask() {
    tasksContainer.innerHTML = localStorage.getItem('tasks');
}
showTask()


function removeAttrDis() {
    if (localStorage.getItem('tasks') !== null) {
        return clearBtn.removeAttribute('disabled')
    }
}

function removeHidden() {
    if (localStorage.getItem('tasks') !== null) {
        return hiddenEl.classList.add('hidden')
    }
}

function clearTasks() {
    localStorage.removeItem('tasks');
    tasksContainer.textContent = '';
    hiddenEl.classList.remove('hidden');
}


removeAttrDis()
removeHidden()