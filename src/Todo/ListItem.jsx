import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "./redux";

function ListItem({task}) {

    const dispatch = useDispatch();

    const handleClick = (id)=>{
        if (window.confirm('Voulez vous vraiment supprimé 🥵')) {
            dispatch(deleteTask(id))
        }
    }

    return ( 
        <>
            <li className="list-group-item">
                <div className="form-check">
                    <input
                        onChange={() => dispatch(toggleTask(task.id))}
                        className="form-check-input" type="checkbox" value="" id={`${task.id}_${task.libelle}`} defaultChecked={task.done} />
                    <label className="form-check-label h5" htmlFor={`${task.id}_${task.libelle}`}>
                        {task.libelle}
                    </label>
                    <small onClick={ ()=>handleClick(task.id) }
                        className="ml-2 btn btn-info btn-sm text-white">X</small>
                </div>
            </li>
        </>
     );
}

export default ListItem;