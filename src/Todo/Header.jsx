import { useSelector } from "react-redux";

function Header() {
    const tasks = useSelector(state => state.todo);

    const undoneTask = tasks.filter(t=> t.done === false)

    return ( 
        <>
            <div className="header">
                <h1 className="mt-2">React Todo List</h1>
                <p className="mt-4">Tâches à faire : <b>{undoneTask.length}</b></p>
            </div>
        </>
     );
}

export default Header;