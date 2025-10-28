export const Task = (props) => {
    return(
        <div>
              <h1>Task Name = {props.taskName}</h1>
              <h2>Task Id = {props.id}</h2>
              <h3>Completed : {props.isCompleted ? "Yes" : "No"}</h3>
              <div>
                <button onClick={()=> props.deleteTask(props.id)}>Delete Task</button>
                <button onClick={() => props.completeTask(props.id)}>Update Task</button>
                <button onClick={() => props.updateTask(props.id)}>Edit Task</button>
              </div>
            </div>
    );
}