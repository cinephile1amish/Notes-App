import React from "react";
// import DescriptionIcon from '@mui/icons-material/Description';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from "react-router-dom";


export function Header(){
    const navigate = useNavigate();
    return(
        <header className="headHome">
            <button onClick={() => navigate("/home")}>
            <h1>
                <EditNoteIcon />Karm
            </h1>
            </button>
        </header>
    )
}