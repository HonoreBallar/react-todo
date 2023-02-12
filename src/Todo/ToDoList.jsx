import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function ToDoList() {

    // useSelector permet de recuperer les donnes dans redux
    const tasks = useSelector(state => state.todo);

    return ( 
        <>
            <div className="appContent">
                <ul className="list-group list-group-flush">
                    {
                        tasks.length > 0 &&
                        tasks.map((task) => (
                            <ListItem key={task.id} task={task}/>
                        ))
                    }
                    {
                        tasks.length === 0 && <li className="list-group-item"><h2 className="text-muted">Pas de tâches actuellement 😀</h2></li>
                    }
                </ul>
            </div>
        </>
     );
}

export default ToDoList;