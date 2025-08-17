import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "../features/taskSlice";

function TodoApp() {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (task.trim() !== "") {
      dispatch(addTask(task));
      setTask("");
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div>
      <h3 className="text-center mt-3 text-bg-primary p-2 text-danger font-weight-bold">TodoApp</h3>
      <input
        type="text"
        placeholder="Enter a task"
        className="form-control mt-3"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Add Task
      </button>
      <ul className="list-group mt-3">
        {todos.map((todo) => (
          <li
            className="list-group-item"
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
            <button
              className="btn btn-success ms-3 float-end"
              onClick={() => dispatch(toggleTask(todo.id))}
            >
              Toggle
            </button>
            <button
              className="btn btn-danger ms-3 float-end"
              onClick={() => dispatch(removeTask(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
