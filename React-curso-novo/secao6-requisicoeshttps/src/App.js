
import './App.css';
import { useState, useEffect } from 'react';
const url = "http://localhost:3000/products"
import { useFetch } from './hooks/useFetch';

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

const {data:items} = useFetch(url);

  // 1 - resgatando dados
 // useEffect(() => {
  // async function fetchData() {
    //  const resposta = await fetch(url);
     
   //   const data = await resposta.json();
     
  //   setProducts(data);
  //  }

  //  fetchData();
   
  }, []);

  // 2 add de produtos

  const HandleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
          "Contente-Type" : "application/json"
      },
      body: JSON.stringify(product),
    });

    // 3 carregamento

    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct ]);

    setName('')
    setPrice('')
  };

  return (
    <div className="App">
    <h1>Lista de produtos</h1>
    <ul>
     {items.map((product) => (
      <li key={product.id}>
     {product.name} - R$:{product.price}
      </li>
     ))}
    </ul>
    <div className="add-product">
      <form onSubmit={HandleSubmit}>
      <label>
        Nome: 
        <input type="text" value={name} name='name'  onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          Preço:
          <input type="text" value={price} name='price'  onChange={(e) => setPrice(e.target.value)}/>
        </label>
        <input type="submit" value="Criar" />
     

      </form>
    </div>
    </div>
  );
}

export default App;
