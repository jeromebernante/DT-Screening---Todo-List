const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskContainer = document.getElementById('taskContainer');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskCard = document.createElement('li');
  taskCard.classList.add('task-card');

  const taskCardText = document.createElement('span');
  taskCardText.textContent = taskText;
  taskCardText.classList.add('task-card-text');

  const deleteButton = document.createElement('span');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete-btn');

  taskCard.appendChild(taskCardText);
  taskCard.appendChild(deleteButton);
  taskContainer.appendChild(taskCard);

  taskInput.value = '';

  taskCard.addEventListener('click', function (e) {
    if (e.target === deleteButton) return;
    taskCardText.classList.toggle('completed');
  });


  deleteButton.addEventListener('click', function () {
    taskContainer.removeChild(taskCard);
  });
}


addTaskButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
