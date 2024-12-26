import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export function TaskInput(props){
    const [inputTask, setInputTask] = useState("");

    function handleChange(event){
        const newTask = event.target.value;
        setInputTask(newTask);
    }
    return(
        <div>
            <div className="form">
                <input 
                    onChange={handleChange}
                    type="text"
                    value={inputTask}
                />
                <Zoom in={true}>
                    <Fab onClick={() => {
                        props.onAdd(inputTask);
                        setInputTask("");
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </div>
        </div>
    )
}