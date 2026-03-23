import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function UserList(){
 const [user, setUser]=useState([]);
const [loding, setLoding]=useState(true);
const [search , setSearch]=useState("");
const[hata,setHata]=useState(false);

const getusers =useCallback(async ()=>{
  setLoding(true);
  setHata(false);
  try{
    const res =await   axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(res.data);
  }
  catch(err){
  console.error("liste çekme HATA",err);
  setHata(true);
  } finally{
    setLoding(false);
  }
},[] )
const filtreleme= user.filter(
  (u)=>{
    return(
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    );
  });
 useEffect(()=> {
   getusers();

 },[getusers]);
  
 if (loding){
    return   <h2>ürünler yükleniyor </h2> }
  if(hata) return(
    <div>
      <h2>hata</h2>
      <button onClick={getusers}>yeniden dene</button>
    </div>
  )
 return ( 

  <div>

    <h1>kullanıcı listesi</h1>

  <input type="text" placeholder="isim veya email ile ara" value={search} onChange={(e)=>setSearch(e.target.value)}  />
    
 

     { filtreleme.map((u)=> (
      <div key={u.id} style={{padding:"15px",marginBottom:"10px", border:"1px solid #ddd",borderRadius:"8px"}} >
          <h3>{u.name}</h3>
        <p> E-mail: {u.email}</p>
      <p> Şehir {u.address.city}</p>
        <p>Şirket Adı: {u.company.name}</p>
        <Link to={`/users/${u.id}`} >
          <button> detaya git </button>
        </Link>
        
      </div>
     ) )}   
     {filtreleme.length===0&& <p>kullanıcı yok </p>}
</div>
 );
}

export default UserList;