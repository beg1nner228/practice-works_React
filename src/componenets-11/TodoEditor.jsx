export default function TodoEditor({ onAdd, inputValue, setInputValue }) {
  
  const handleInputChange = (event) => {
    setInputValue({ ...inputValue, "id": Date.now().toString(), "text": event.target.value });
  };

  const handleAddTask = () => {
    if (inputValue.text.trim() !== "") {
      onAdd(inputValue);
      setInputValue({"id": "", "text": "", "completed": false});
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
      <input
        type="text"
        value={inputValue.text}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}