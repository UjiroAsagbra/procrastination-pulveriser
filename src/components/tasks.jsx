import { useState, useEffect } from "react"
import Countdown from "./refreshtimer"
import NewTask from "./newTask"
import Task from "./task"
import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti';
import {useNavigate } from "react-router-dom";

const Tasks = () => {
  const [count, setCount] = useState(() => {
    const taskCount = localStorage.getItem("Count");
    return taskCount && !isNaN(taskCount) ? parseInt(taskCount, 10) : 0; 
  });

  const [inputText, setInputText] = useState("")
  const [task, setTask] = useState()
  const navigate = useNavigate()

  const handletask = (e) => {
    setInputText(e.target.value)
  }

  const handleAddTask = () => {
    setTask(inputText)
    setInputText("")
    navigate('/1')
  }
let done = new Audio('./sounds/done.mp3')

  const handleCompleted = ()=> {
    canvasConfetti()
    done.play()
    setTask("")
    counter()
    navigate('/')

  }

  const counter = ()=> {
    setCount((count) => count + 1)

  }

  useEffect(() => {
    localStorage.setItem("Count", JSON.stringify(count));
  }, [count]);

  /*const deleteItems = () =>{
    localStorage.clear();
    setCount(0)
    setTask("")
    navigate('/')
  }
*/

  return(
    <>
     {task ?
            <Task
              task={task}
              handleCompleted={handleCompleted}
              count={count}
            />:
            <NewTask
            inputText={inputText}
            handletask={handletask}
            handleAddTask={handleAddTask}/>
        }
<div className="counter">
{count === 1 ? (
  <p className="count">You have completed 1 task</p>
) : count > 1 ? (
  <p className="count">You have completed {count} tasks</p>
) : (
  <p className="count">Add a new task to begin</p>
)}

</div>
    </>
  )


}

  export default Tasks