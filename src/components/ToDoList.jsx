const ToDoList = ({ todos, deleteTodo, editTodo }) => {

  return (
    <>
      <h2>ToDo List:</h2>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.task}</h3>
            <p>- {todo.description}</p>
            <h4>Completed? {todo.completed ? "Yes" : "No"}</h4>
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ToDoList;
