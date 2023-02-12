import {useState, useEffect} from 'react'
import Spinner from './pinterest/Spinner'

const Test = () => {

    //  const Tasks = [
    //     {
    //         id: 1,
    //         task: 'Faire les exercices de maths',
    //         complete: true
    //     },
    //     {
    //         id: 2,
    //         task: 'Faire la gyms',
    //         complete: false
    //     },
    //     {
    //         id: 3,
    //         task: 'Regarder la télé',
    //         complete: true
    //     }
    // ];
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(
            (data) => {
            setIsLoaded(true);
            console.log(data)
            setItems(data);
            
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);


    if (error) {
        return <div>Error: { error.message}</div>
    }
    else if (!isLoaded) {
        return <Spinner />
    }
    return (
        <>
            <h3>Liste des users ({items.length})</h3>
            <ul>
                {items.map((item) => <li key={item.id}>#{item.id} {item.name} ¤ {item.email} -- {item.address.street} ** { item.company.name}</li>)}
            </ul>
           
        </>
    );
}

export default Test;