import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    axios.get('https://cfbcursosapireactexemplo1.brcampos.repl.co')
      .then(res => {
        const dadosCarros = res.data;
        setCarros(dadosCarros);
      });
  }, []);

  return (
    <div>
      <ul>
        {carros.map((carro)  => {
          <li key={carro.id} >{carro.marca}</li> 
        })}
      </ul>
    </div>
  );
}

export default App;
