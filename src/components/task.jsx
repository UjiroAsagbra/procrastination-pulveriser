import ToggleTimers from "./timer"


const Task = ({task, handleCompleted}) => {
  return (
    <div className="taskapp">
    <ToggleTimers/>
    <p className="task">{task}</p>
    <button onClick={handleCompleted} className="btn complete">Completed</button>
    </div>
  )
}

export default Task