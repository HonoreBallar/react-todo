import { configureStore, createSlice } from "@reduxjs/toolkit";

//Créer une tranche de store
const todoSlice = createSlice({
    name: 'todo',
    //l'etat initiale de la tranche du store
    initialState: [
    ],
    // reducers permet de faire les interations avec le store(les données)
    //une fonction(etat,action)
    reducers: {
        addTask: (state, action) => {
            //action => {type: "todo/addTask", payload(les informations necessaires): "Allez faire les courses"} =>dispatcher 
            const newTask = {
                id: Date.now(),
                done: false,
                libelle: action.payload
            }

            //on peut modifier le state directement avec redux et redux gère le state en arrière plan
            state.push(newTask);
        },
        toggleTask: (state, action) => {

            const task = state.find(t => t.id === action.payload)
            task.done = !task.done;
        },
        deleteTask: (state, action) => {

            state = state.filter(t => t.id !== action.payload);
            return state;
        }

    }
});

//les actions creators : les fonctions qui aident à creer des objets action
// redux crée des actions creators à partir des reducers dans le slice 

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;

//creer le store globale
export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})