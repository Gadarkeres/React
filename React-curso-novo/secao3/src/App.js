import Img2 from './assets/img2.jpg'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Children from './components/Children';
import ExecuteFunction from './components/ExecuteFunction';
import UserDetails from './components/UserDetails';

//Imports de css 
import './App.css';

function App() {
const cars =[
  {id: 1, brand: "Ferrari", color: "Vermelho", NewCar: true, km: 0},
  {id: 2, brand: "BMW", color: "Preto", NewCar: true, km: 0},
  {id: 3, brand: "Renault", color: "Vinho", NewCar: false, km: 34321},
  {id: 4, brand: "Fiat", color: "Branco", NewCar: false, km: 2243},

];

function showMessage (){
  console.log("Evento do componente pai!")
}

const Pessoas = [
  {id:1, nome: "Matheus", idade: 25,},
  {id:2, nome: "Rafael", idade: 12},
  {id:3, nome: "Junior", idade: 42},
  {id:4, nome: "Lucas", idade: 15},
  {id:5, nome: "Daniela", idade: 22},
]


  return (
    <div className="App">
     <h1>Avançando em React</h1>
     {/*imagem em public */}
     <div>
      <img src="/img1.jpg" alt="Foto da planta"/>
     </div>
     {/*imagem em assets*/}
     <div>
     <img src={Img2} alt="Paisagem do mar" />
     </div>
    <ListRender/>
    <ConditionalRender/>
    <ShowUsername name = "Missy" />
    <CarDetails brand ="VW" km={100000} color ="Azul" newCar = {false}/> 
    {/*reaproveitando componentes*/}
    <CarDetails brand= "Ford" km={0} color="Vermelho" newCar = {true}/>
    <CarDetails brand= "BMW" km={0} color="Preto" newCar = {true}/>
    {/* loop array de objetos */}

    {cars.map((car) => (
    <CarDetails key={car.id} brand={car.brand} color={car.color}  newCar={car.NewCar} km ={car.km}/>

    ))}
    {/*Fragment */}
    <Fragment  propFragment = "teste" />
    {/*Children, container */}
   <Children MyValue = "teste">
    <p>oi</p>
   </Children>
   <Children MyValue = "teste2">
    <p>Olá</p>
   </Children>
   {/*Executar função */}
   <ExecuteFunction MyFunction ={showMessage}/>

       {/*State lift */}
      {Pessoas.map((pessoa)=> (
       <UserDetails key={pessoa.id} nome ={pessoa.nome} idade ={pessoa.idade}/>
      ))}
      
         
    </div>

  );
}

export default App;
