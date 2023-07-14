import produtos from '../../data/produtos'
import React from 'react'
import '../layout/produtos.css'
export default props =>{

    function getLinhas() {
        return produtos.map(produto =>{
            return(
                <tr key = {produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R${produto.valor.toFixed(2)}</td>
                </tr>
            )
        } )
    }
 
    return(
        <table>
             <caption>Produtos</caption>
            <thead>
                 <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>

            <tbody>
         {getLinhas()}
            </tbody>
        </table>
    )
}