import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts]=useState();
  const [loding, setLoding]=useState(true);
 useEffect( ()=>{
   fetch('https://fakestoreapi.com/products')
     .then((Response) => Response.json())
     .then((data)=> {
      setProducts(data);
      setLoding(false);
     })
     .catch((error)=> {
      console.log.error("hata",error);
      setLoding(false);
     } );
   },[]); 
    if(loding) {
      return ( <h2>ürünler yğkleniyor</h2> );
    }
   return (
  <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>fetch ile apı çekme</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
              <img src={product.image} alt={product.title} style={{ height: '120px', objectFit: 'contain', marginBottom: '10px' }} />
              <h4 style={{ fontSize: '14px', height: '40px', overflow: 'hidden' }}>{product.title}</h4>
              <p style={{ fontWeight: 'bold' }}>{product.price} TL</p>
              <button style={{ cursor: 'pointer', padding: '5px 10px' }}>Detaya Git</button>
          </div>
        ))}
      </div>
    </div>
  );
      
}

export default App;
