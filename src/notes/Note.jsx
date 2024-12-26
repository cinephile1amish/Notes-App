import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Zoom in={true}>
      <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}>
        <CancelIcon />
        </Fab>
    </div>
    </Zoom>
  );
}

export default Note;