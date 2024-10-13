document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    if(description && dueDate) {
        addTask(description, dueDate)
    }   else {
        alert('Tienes que completar todos los campos')
    }
});

function addTask(description, dueDate) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add('task')

    const taskText = document.createElement('p');
    taskText.innerHTML = `Descripcion: ${description} </br> Fecha límite: ${dueDate}`;

    taskContainer.appendChild(taskText);

    const actionsContainer = document.createElement("p");
    const editButton = document.createElement("a");
    editButton.href = "#";
    editButton.textContent = "EDITAR";
    editButton.addEventListener('click', function() {
        editTask(taskContainer, description, dueDate)
    });


actionsContainer.appendChild(editButton)
taskContainer.appendChild(actionsContainer)

document.getElementById("tasks").appendChild(taskContainer);

}

function editTask(taskContainer, oldDescription, oldDueDate) {
    const newDescription = prompt('Indica la nueva descripción. Antigua:', oldDescription)
    const newDueDate = prompt('Indica nueva fecha. Antigua:', oldDueDate)

    taskContainer.querySelector("p").innerHTML = `Descripcion: ${newDescription} </br> Fecha límite: ${newDueDate}`;
}