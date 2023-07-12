import React from 'react';
import Aleatorio from "./componentes/basicos/Aleatorio";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";
import Card from './componentes/layout/Card';

export default () => (
    <div id='app'>
        <h1>Fundamentos React</h1>

        <Card titulo = "Desafio Aleatório">
        <Aleatorio min={1} max={100} />
        </Card>
        <Card titulo = "Fragmento">
        <Fragmento />
        </Card>
        <Card titulo = "ComParametro">
        <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={9.3}
        />
        </Card>
        <Card titulo = "Primeiro">
        <Primeiro />
        
        </Card>


        
    </div>
);
