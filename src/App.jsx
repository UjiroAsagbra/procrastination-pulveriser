import Tasks from "./components/tasks"
import './components/css/app.css'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import FocusTimer from "./components/focustimer"
import RefreshTimer from "./components/refreshtimer"
import Task from "./components/task"

function App() {

  return (
    <BrowserRouter>
      <div >
      <h2 className="title">Focus Master</h2>
    <Routes>
      <Route path="1" element= {<FocusTimer/>}/>
      <Route path="2" element = {<RefreshTimer/>}/>
    </Routes>
      <Tasks/>
      <h2>HOW IT WORKS</h2>
      <p>1--Work for 10 minutes</p>
      <p>2-- Rest for 2 minutes</p>
      <p>3-- Repeat until task is completed</p>
       <p> 4-- Mark task as complete</p>
    </div>
    </BrowserRouter>
  )
}

export default App
