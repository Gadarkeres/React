
import './App.css';
import Myform from './components/Myform';
function App() {
  return (
    <div className="App">
        <h2>Formularios</h2>
        <Myform user ={{name: "Josias", email: "josias@gmail.com"}}/>
    </div>
  );
}

export default App;
