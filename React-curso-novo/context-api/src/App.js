
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Navbar from './pages/Navbar';
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Product' element={<Product/>} />
    </Routes>
       
     </BrowserRouter>
    </div>
  );
}

export default App;
