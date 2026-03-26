 import { useParams,Link } from "react-router-dom";
import {useState, useEffect,useCallback} from "react";
import axios from "axios";
 function UserDetay(){
  const {id} = useParams();
  const [user, setUser]=useState(null);
  const [loding, setLoding]=useState(true);
  const [hata,setHata]=useState(false);
  const verigetir= useCallback(async ()=>{
   setLoding(true);
   setHata(false);
   setUser(null);
   try{
    const res =await  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUser(res.data);
   } catch (err){
  console.error("detay hatası ",err);
  setHata(true);
   } finally{
    setLoding(false);
   }
},[id]);

  useEffect(()=>{ 
 verigetir();
 },[ verigetir]);    

  if (loding) return <h2> detaylar geliyor </h2>;
  if(hata){ return (<div><h2>hata</h2>
     <button onClick={()=>verigetir()} >yeniden dene </button></div> 
  );} 

  if (!user) return <h2> kullanıcı yok </h2>;

   return(
    <div style={{padding:"20px"}} >
   
         <div>
            <h1>{user.name} ({user.username})</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.address?.city}</p>
            <p>{user.address?.street}</p>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
         </div>
         <Link to={"/users"}> back to users </Link>
    </div>
   )
 }

 export default UserDetay;