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
    <div className="product-detail-container"  style={{padding:"40px"}} >
      <Link to={"/"} style={{display:"block", marginBottom:"20px"}} >Lİsteye geri dön</Link>
    <div style={{display:"flex" , gap:"40px" , alignItems:"start" }} >
      <img src={product.image} alt={product.name} style={{width:"400px", borderRadius:"10px"}}  />
     <div className="detail-info">
      <span style={{textTransform:"uppercase", color:"#888"}} >{product.category}</span>
      <h1 style={{fontSize:"40px", margin:"10px 0 "}} >{product.name}</h1>
      <p style={{fontSize:"24px" , fontWeight:"bold", color:"#2c3e50"}} >{product.price.toLocaleString()}TL </p>
       
       <div style={{
         padding:"10px",
         backgroundColor:product.inStock ?"#e6fffa" : "#fff5f5",
         color:product.inStock ? "#2a9c2a" : "#c53030",
         borderRadius:"5px",
         marginTop:"10px"
       }} >
        {product.inStock? "stokta var":"tükendi"}
       </div>

      </div> 
    </div>
    </div>
 );
}

export default ProductDetail;