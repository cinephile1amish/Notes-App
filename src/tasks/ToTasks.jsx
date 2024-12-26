import { useState } from "react"
import { TaskInput } from "./TaskInput"
import {TaskItem} from "./TaskItem"

export function ToTasks(){
    const [tasks, setTasks] = useState([]);

    function addTask(newTask){
        setTasks(prevValue => {
            return [...prevValue, newTask];
        });
    }

    function delTask(id){
        setTasks(prevItems => {
            return prevItems.filter((task, index) => {
              return index !== id;
            });
          });
    }

    return(
        <div className="container">
            <div>
                <TaskInput onAdd={addTask}/>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <TaskItem 
                        key={index}
                        id={index}
                        text={task}
                        onChecked={delTask}
                    />
                ))}
            </div>
        </div>
    )
}