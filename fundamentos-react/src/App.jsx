import React from 'react';
import Aleatorio from "./componentes/basicos/Aleatorio";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";
import Card from './componentes/layout/Card';
import './App.css';
import Familia from './componentes/basicos/Familia';
import FamiliaMembro from './componentes/basicos/FamiliaMembro'




export default () => (
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="  #05 componente com filhos" color="#ca4b9b">
                 <Familia>
                 sobrenome="Silva"
                     <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo" />
                 </Familia>

            </Card>

            <Card titulo="  #04 Desafio Aleatório" color="#090">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo=" #03 Fragmento" color="#a52a2a">
                <Fragmento />
            </Card>

            <Card titulo=" #02 ComParametro" color="#daa520">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>

            <Card titulo=" #01 Primeiro" color="#43163d">
                <Primeiro />

            </Card>

        </div>



    </div>
);
