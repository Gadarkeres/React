import React from 'react';
import Aleatorio from "./componentes/basicos/Aleatorio";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";
import Card from './componentes/layout/Card';
import './App.css';
import Familia from './componentes/basicos/Familia';
import FamiliaMembro from './componentes/basicos/FamiliaMembro';
import ListaAlunos from './componentes/repeticao/ListaAlunos';
import ListaProdutos from './componentes/repeticao/ListaProdutos'
import ParOuImpar from './componentes/condicional/ParOuImpar';
import DiretaPai from './componentes/comunicacao/DiretaPai';
import Input from './componentes/formulario/Input'





export default () => (
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className="Cards">

        <Card titulo=" #11 Componente controlado"  color="#AD3A">
                <Input/>

            </Card>

        <Card titulo=" #10 Comunicação Indireta"  color="#F23A">
                <DiretaPai/>

            </Card>
     
        <Card titulo=" #09 Comunicação Direta"  color="#F23A">
                <DiretaPai/>

            </Card>

        <Card titulo=" #08 Renderização condicional"  color="#F23A">
                <ParOuImpar numero = {20}/>

            </Card>
        
        <Card titulo=" #07 Desafio Produto" color="#A324">
                <ListaProdutos>
                    
                </ListaProdutos>

            </Card>

         <Card titulo=" #06 Repetição" color="#4324">
                <ListaAlunos>

                </ListaAlunos>

            </Card>

            <Card titulo="  #05 componente com filhos" color="#ca4b9b">
            <Familia>
                     <FamiliaMembro nome="Pedro" sobrenome = "Ferreira" />
                    <FamiliaMembro nome="Ana"  sobrenome = "Ferreira"  />
                    <FamiliaMembro nome="Gustavo" sobrenome = "Ferreira" />
                    
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
