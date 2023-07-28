import MyComponent from './Components/MyComponent';
import './App.css';
import { useState } from 'react';
import Title from './Components/Title';

function App() {
  const n = 9
  const [name] = useState ("Matheus")

  const redTitle = true
  return (
    <div className="App">
      <h1>React com CSS </h1>
      <MyComponent/>
      {/*css inline dinamitco */}
      <h2 style={ name === 'Matheus' ? {background: 'gray'} : null}>TESTE CSS INLINE CONDICIONAL</h2>

      {/*classe dinamicas */}
     <h2 className={redTitle ? "red-title" : 'title' }>Este Titulo vai ter classe dinamica</h2>
     {/* css Modules */}

     <Title></Title>

    </div>
  );
}

export default App;
