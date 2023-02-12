import { Provider } from "react-redux";
import { store } from "./redux";
import Footer from "./Footer";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {

    //mettre l'ensemble des composants dans un provider pour pouvoir utiliser redux
    return ( 
        <Provider store={store}>
            <div className="container mt-4 mb-2">
                <Header />
                <ToDoList  />
                <Footer />
            </div>
        </Provider>
     );
}

export default App;