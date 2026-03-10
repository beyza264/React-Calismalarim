import { productsData } from "./data"; 
import { useParams,Link } from "react-router-dom";
 function ProductDetail(){
  const {id}=useParams();
   const product = productsData.find((p)=> p.id===Number(id));
   if(!product){
    return(
      <div style={{padding:'20px'}} >
         <h2>ürün bulunamadı</h2>
         <Link to={"/"}> listeye geri dön </Link>
      </div>
    );  
   }
 return (  
    <div className="product-detail-container">
      <Link to={"/"} style={{display:"block"}} >Lİsteye geri dön</Link>
    <div>
      <img src={product.image} alt={product.name} />
     <div className="detail-info">
      <span>{product.category}</span>
      <h1>{product.name}</h1>
      <p>{product.price.toLocaleString()}TL </p>
       
       <div>
        {product.inStock? "stokta var":"tükendi"}
       </div>

      </div> 
    </div>
    </div>
 );
}

export default ProductDetail;