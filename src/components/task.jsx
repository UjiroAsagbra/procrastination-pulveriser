import { useEffect } from "react";
import { Link } from "react-router-dom";

const Task = ({ task = "No task assigned", handleCompleted = () => {} }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(250, 237, 217)";  // Set background to white

    return () => {
      document.body.style.backgroundColor = ""; // Reset on unmount (optional)
    };
  }, []);
  return (
    <div className="taskapp">
      <p className="task">{task}</p>

      <button onClick={handleCompleted} className="btn complete">
        Completed
      </button>
      
    </div>
  );
};

export default Task;
