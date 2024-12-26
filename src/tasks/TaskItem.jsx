import CancelIcon from '@mui/icons-material/Cancel';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export function TaskItem(props){
    return(
        <div className='task'>
            <Zoom in={true}>
                <h3 onClick={() => { props.onChecked(props.id); }}>
                    {props.text} 
                    <Zoom in={true}>
                        <Fab>
                            <CancelIcon />
                        </Fab>
                    </Zoom>
                </h3>
                
            </Zoom>
        </div>
    )
}