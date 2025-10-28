import {useState} from 'react';
import {Task} from "../components/Task.jsx";
import {UserStatus} from "../components/UserStatus.jsx";


export const Todo = () => {

    const [taskList, changeTaskList] = useState([]);
    const [input, changeInput] = useState();

    const handleInput = (event) => {
        changeInput(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
            taskName: input,
            isCompleted: false
        }
        console.log(taskList);
        changeTaskList([...taskList, task]);
    }

    const deleteTask = (taskId) => {
        changeTaskList(taskList.filter((element) =>
            taskId !== element.id
        ));
    }

    const updateTask = (taskId) => {
        changeTaskList(taskList.map((element) =>
            element.id === taskId ? {...element, taskName: input} : element
        ))
    }

    const completeTask = (taskId) => {
        changeTaskList(taskList.map((element) =>
            element.id === taskId ? {...element, isCompleted: true} : element
        ))
    }

    return (
        <div>
            {<UserStatus/>}
            <button onClick={addTask}> Add Task</button>
            <input type='text' onChange={handleInput}></input>
            <h1> {input} </h1>
            <div>
                {taskList.map((element) => {
                    return <Task
                        taskName={element.taskName}
                        id={element.id}
                        isCompleted={element.isCompleted}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                        completeTask={completeTask}
                    />

                })}
            </div>
        </div>
    );
}