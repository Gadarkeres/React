import './App.css';
// 1- import react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//components
import  Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import About from './pages/About'
import Product from './pages/Product';

const Products = [
  {id:1, name:'capa de chuva', price: 25},
  {id:2, name:'teclado', price: 100},
  {id:1, name:'roteador wifi', price: 200},

]


function App() {

  return (
    <div className="App">
      <h1>React router</h1>
    
      <BrowserRouter>
      <Navbar/>
      {/* // links com react router */}
      <Routes>
        <Route path="/" element={<Home Products= {Products} />} />
        <Route path='/About' element={<About/>} />
        {/* rota dinamica */}
      <Route path='/Product/:id' element={<Product/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
