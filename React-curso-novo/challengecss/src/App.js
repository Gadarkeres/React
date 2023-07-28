
import './App.css';
import Car from './components/Car';

function App() {
  const myCars = [
    {name: "Fusca", km: 10000, color:"Branca"},
    {name: "Polo", km: 0, color:"Preto"},
    {name: "Onix", km: 12000, color:"Cinza"},
  ]
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container" >
        {myCars.map((car) =>
        <Car nome={car.name} km={car.km} cor={car.color}/>
        )}
      </div>
    </div>
  );
}

export default App;
