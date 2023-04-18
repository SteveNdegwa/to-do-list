
const Task = (props) => {
  return (
    <div className="task">
    <h2 style={{color: props.complete? "green" :"black"}} className="taskHeader">{props.taskName}</h2>
    {!props.complete && <button className="updateBtn" onClick={()=> props.update(props.taskId)}>Done</button>}
    <button
      className="removeBtn"
      onClick={() => props.deleteTask(props.taskId)} >x</button>
  </div>
  )
}

export default Task