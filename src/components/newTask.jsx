const NewTask = ({inputText, handletask, handleAddTask}) => {
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