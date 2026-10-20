import { useEffect, useState } from "react";

const ToDoForm = ({ addTodo, isEditForm, handleConfirm, handleCancel, selectedTodo }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  // useEffect to set the task/description inputs based on if we're editting
  useEffect(() => {
    if(selectedTodo){
        setTaskName(selectedTodo.task)
        setDescription(selectedTodo.description)
    } else {
        setTaskName("")
        setDescription("")
    }
  },[selectedTodo])

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      task: taskName,
      description,
      completed: false,
    };

    addTodo(newTask);

    setTaskName("");
    setDescription("");
  };

  return (
    <>
      <h2>Enter your ToDo Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task: </label>
          <input
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        {isEditForm ? (
          <div>
            <button type="button" onClick={() => handleConfirm(taskName,description)}>Confirm</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button>Add Todo</button>
        )}
      </form>
    </>
  );
};

export default ToDoForm;