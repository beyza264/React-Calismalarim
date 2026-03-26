import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Veri çekme hatası:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Ürünler yükleniyor...</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>axios ile apı çekme</h1>
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