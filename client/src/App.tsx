
import { useEffect, useState } from 'react';
import './index.css'

function App() {
  const[products,setProducts]=useState([{name: 'product 1',price: 100.00},]);


  useEffect(()=>{
    fetch('http://localhost:5000/api/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[])


  function addProduct(){
    setProducts(prevState=> [...products, {name: 'product '+(prevState.length+1),price: (prevState.length*100+100)}])
  }

  return (
    
    <div className='app'>
      <h1 >Project</h1>
      <ul>
        {products.map(item=>
        (
          <li>{item.name}-{item.price}</li>
        ))
        }
        
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
    
  );
}

export default App
