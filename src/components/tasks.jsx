import { useState, useEffect } from "react"
import Countdown from "./timer"
import NewTask from "./newTask"
import Task from "./task"
import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti';

const Tasks = () => {
  const [count, setCount] = useState(() => {
    const taskCount = localStorage.getItem("Count");
    return taskCount && !isNaN(taskCount) ? parseInt(taskCount, 10) : 0; // Default to 0 if invalid
  });
  const [inputText, setInputText] = useState("")
  const [task, setTask] = useState()
  

  const handletask = (e) => {
    setInputText(e.target.value)
  }

  const handleAddTask = () => {
    setTask(inputText)
    setInputText("")

  }
let done = new Audio('./sounds/done.mp3')

  const handleCompleted = ()=> {
    canvasConfetti()
    done.play()
    setTask("")
    counter()

  }

  const counter = ()=> {
    setCount((count) => count + 1)

  }

  useEffect(() => {
    localStorage.setItem("Count", JSON.stringify(count));
  }, [count]);

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

      
    
    </>
  )


}

  export default Tasks