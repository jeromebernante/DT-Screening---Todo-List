const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskContainer = document.getElementById('taskContainer');


function createTaskCard(taskText) {
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

  addCardListeners(taskCard, taskCardText, deleteButton);

  return taskCard;
}

function addCardListeners(taskCard, taskCardText, deleteButton) {
  taskCard.addEventListener('click', function (e) {
    if (e.target === deleteButton) return;
    taskCardText.classList.toggle('completed');
  });

  deleteButton.addEventListener('click', function () {
    taskContainer.removeChild(taskCard);
  });
}


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskCard = createTaskCard(taskText);
  taskContainer.appendChild(taskCard);

  taskInput.value = '';
}


addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
