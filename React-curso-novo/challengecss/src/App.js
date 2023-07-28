
import './App.css';

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
        <Car nome={car.name} km={km.car} cor={color.car}/>
        )}
      </div>
    </div>
  );
}

export default App;
