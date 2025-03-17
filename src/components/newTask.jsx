import { useEffect } from "react";

const NewTask = ({inputText, handletask, handleAddTask}) => {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(250, 237, 217)";  // Set background to white

    return () => {
      document.body.style.backgroundColor = ""; // Reset on unmount (optional)
    };
  }, []);
return(
  <div className="new">
  <input
    type="text"
      placeholder="Enter Task"
      className="input"
      value={inputText}
      onChange={handletask}
      />
      
       <button
    onClick={handleAddTask}
    className="btn"
    >Start Task</button>
  </div>
)
}

export default NewTask