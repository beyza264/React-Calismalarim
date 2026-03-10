import { productsData } from './data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from './productDetail';
function ProductList(){
 const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const filtreProdects = productsData
    .filter((product) => {
      const isimUyuyormu = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const kategoriUyuyormu = selectedCategory === "All" || product.category === selectedCategory;
      const stokUyuyormu = !onlyInStock || product.inStock;
      return isimUyuyormu && kategoriUyuyormu && stokUyuyormu;
    })
    .sort((a, b) => {
      if (sortBy === "lowToHigh") {
        return a.price - b.price;
      }
      if (sortBy === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className='app-container'>
      <header>
        <h1>Product List App</h1>
         
        
        <div className='filter-wrapper'>
              <label className="stock-filter">
            <input
              type="checkbox"
              checked={onlyInStock}
              onChange={(e) => setOnlyInStock(e.target.checked)}
            />
            Sadece Stoktakiler
          </label>

          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sırala</option>
            <option value="lowToHigh">Fiyat: Düşükten Yükseğe</option>
            <option value="highToLow">Fiyat: Yüksekten Düşüğe</option>
          </select>

        
 
          <div className='search-container'>
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">Hepsi</option>
            <option value="elektronik">Elektronik</option>
            <option value="Aksesuar">Aksesuar</option>
            <option value="Giyim">Giyim</option>
          </select>
        </div>
      </header>

      <main className='product-grid'>
        {filtreProdects.length > 0 ? (
          filtreProdects.map((product) => (
            <div key={product.id} className='product-card' >
                <Link  to={`/items/${product.id}`} >
                 <div className='image-container'>
                <img src={product.image} alt={product.name} />
                <span className={`stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`} >
                  {product.inStock ? "stokta var " : "tükendi"}
                </span>
              </div>
                        
                        <div className='product-info'>
                <div className='info-header'>
                  <h3>{product.name}</h3>
                  <span className='price'>{product.price.toLocaleString()} TL</span>
                </div>
                <span className='category'>{product.category}</span>
              </div>
                   <button>Detay gör</button>
                </Link>
            </div>
          ))
        ) : (
          <div className="no-products">
            <h3>Aradığınız kriterlere uygun ürün bulunamadı. </h3>
            <p>Lütfen filtreleri temizleyerek tekrar deneyin.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductList;