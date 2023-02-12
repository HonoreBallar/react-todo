import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux";

function Footer() {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text !== "") {
            dispatch(addTask(text));
            setText("");
        }else{
            alert("Veuillez remplir le champ 😂");
        }
    }

    return ( 
        <div className="footer">
            <form onSubmit={handleSubmit} action="" method="post">
                <div className="mb-3">
                  <input type="text" 
                        className="form-control" onChange={(e)=>setText(e.target.value)} name="task" id="task" aria-describedby="helpId" value={text} placeholder="Ajouter une tâche" />
                    <small>Appuyer sur entrer pour ajouter la tâche</small>
                </div>
            </form>
            <p className="mt-4 text-center">&copy; Amounan Honore ~ amounahonore@gmail.com</p>
        </div>
     );
}

export default Footer;