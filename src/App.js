import logo from './logo.svg';
import img from './img.png';
import './App.css';

function Button(props){
  return <button className="btn"> {props.children}</button>;
}


function App() {
  return (
    <div className="App">
      <div className="">
        <img src={img} width="200" height="auto" />
      </div>
      <Button>Login</Button>
    </div>
  );
}

export default App;
