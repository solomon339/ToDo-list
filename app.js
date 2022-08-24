let todos = []

function addTask() {
    const task = document.getElementById('task').value
    todos.push({ task: task, completed: false})
    displayTodos()
    document.getElementById('task').value = ''
}

// crud

function editTask() {}

function deleteTask() {}

function displayTodos() {
    let el = ''
    todos.forEach(function (todo) {
        el += `<div><p>${todo.task}</p></div>`
    })
    document.getElementById('tasks').innerHTML = el
}

displayTodos()


// let el = document.createElement('div')
// el.innerHTML = `<p>${todo.task}</p>`