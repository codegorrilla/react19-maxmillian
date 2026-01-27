import { useState } from "react";
export default function NewTask({ onAdd, onDelete }) {
  const [enteredTask, setEnteredTask] = useState("");
  const [error, setError] = useState(false);

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      console.log("You must enter a task title");
      setError(true);
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
    setError(false);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex justify-start flex-col">
        <input
          type="text"
          className="w-64 p-2 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        {error && <p>the task should not be empty.</p>}
      </div>

      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
