// Get required elements
const todoList = document.querySelector('.todo-list ul');
const input = document.querySelector('.input-container input');
const filters = document.querySelectorAll('.filters .filter');
const clearCompletedBtn = document.querySelector('.clear-completed');

// Function to create a new todo item
function createTodo() {
  const todoText = input.value;

  if (todoText.trim() !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <label>${todoText}</label>
      <button class="delete">X</button>
    `;
    todoList.appendChild(li);
    input.value = '';
    updateItemCount();
  }
}

// Function to delete a todo item
function deleteTodo() {
  const listItem = this.parentNode;
  todoList.removeChild(listItem);
  updateItemCount();
}

// Function to update item count
function updateItemCount() {
  const itemCount = todoList.getElementsByTagName('li').length;
  const itemsLeft = document.querySelector('.filters span');
  itemsLeft.textContent = `${itemCount} item${itemCount === 1 ? '' : 's'} left`;
}

// Function to clear completed todos
function clearCompleted() {
  const completedItems = todoList.querySelectorAll('li.completed');
  completedItems.forEach(item => {
    todoList.removeChild(item);
  });
  updateItemCount();
}


input.addEventListener('keydown', (event) => {   //adding new item to to do
  if (event.key === 'Enter') {
    createTodo();
  }
});

todoList.addEventListener('click', (event) => {   //delete a todo item

  if (event.target.classList.contains('delete')) {
    deleteTodo.call(event.target);
  }
});


filters.forEach(filter => {  // listeners to filter todos
  filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
  });
});

//event listener to clear completed todos
clearCompletedBtn.addEventListener('click', clearCompleted);