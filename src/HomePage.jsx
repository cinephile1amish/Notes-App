import { Header } from './Header'
import { ToNotes } from './notes/ToNotes'
import { ToTasks } from './tasks/ToTasks'
import NotesIcon from '@mui/icons-material/Notes';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { useNavigate } from "react-router-dom";



export function HomePage(){
    const navigate = useNavigate();
    return(
        <>
            <div className='HomeNav'>
            <button  onClick={() => navigate("/notes")}>
                <NotesIcon />To Notes 
            </button>
            <button  onClick={() => navigate("/tasks")}>
                <ChecklistIcon />To Tasks
            </button>
            </div>
        </>
    )
}