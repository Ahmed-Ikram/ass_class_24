// Sample data for testing
let todos = [
    { id: 1, text: 'First Todo', editing: false },
    { id: 2, text: 'Practice whole work', editing: false },
    
  ];
  
  // Function to render todos
  function renderTodos() {
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = '';
  
    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';
      todoItem.innerHTML = `
        <div>${todo.editing ? `<input type="text" value="${todo.text}" id="edit-input-${todo.id}">` : todo.text}</div>
        <div>
          <button onclick="editTodo(${todo.id})">${todo.editing ? 'Save' : 'Edit'}</button>
          <button onclick="deleteTodo(${todo.id})">Delete</button>
        </div>
      `;
      todoListContainer.appendChild(todoItem);
    });
  }
  
  // Function to add a new todo
  function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const newTodoText = newTodoInput.value.trim();
  
    if (newTodoText !== '') {
      const newTodo = { id: todos.length + 1, text: newTodoText, editing: false };
      todos.push(newTodo);
      newTodoInput.value = '';
      renderTodos();
    }
  }
  
  // Function to edit a todo
  function editTodo(todoId) {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
      if (todos[todoIndex].editing) {
        const editInput = document.getElementById(`edit-input-${todoId}`);
        todos[todoIndex].text = editInput.value;
      }
      todos[todoIndex].editing = !todos[todoIndex].editing;
      renderTodos();
    }
  }
  
  // Function to delete a todo
  function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
    renderTodos();
  }
  
  // Function to delete all todos
  function deleteAll() {
    todos = [];
    renderTodos();
  }
  
  // Initial render
  renderTodos();
  