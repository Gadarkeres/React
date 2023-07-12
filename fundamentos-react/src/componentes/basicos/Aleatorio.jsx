import React from 'react';

export default props => {
const min = props.min;
const max = props.max;
const aleatorio = parseInt(Math.random() * (mix - min) - max )


  return (  
    <div>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor Mínimo:</strong> {min}</p>
      <p><strong>Valor Máximo:</strong> {max}</p>
      <p><strong>Valor escolhido:</strong>{aleatorio}</p>
    </div>
  );
};
