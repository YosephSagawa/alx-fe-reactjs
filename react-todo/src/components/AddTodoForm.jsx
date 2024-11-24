import React from "react";

const AddTodoForm = () => {
  return (
    <div>
      {" "}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodoForm;
