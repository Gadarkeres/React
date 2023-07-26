import Img2 from './assets/img2.jpg'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

//Imports de css 
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
