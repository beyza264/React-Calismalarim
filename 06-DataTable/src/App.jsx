import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import DataRow from './DataRow';

function App() {
  const [user, setUser]=useState([]);
   const[sonliste, setSonliste]=useState([]);
useEffect( ()=>{
   axios.get("https://63ef74474d5eb64db0c9ad89.mockapi.io/users")
      .then((res)=>{
       setUser(res.data);
      })
      .catch((err)=>{
        console.error("hata var",err);
      })

   },[])
       
   const HandleCityChange= (userId,newCity)=>{
   const updatlist=user.map((item)=>{
    if(item.id===userId){
      return{...item, city:newCity};
    }
    return item;
   }
   );
   setUser(updatlist);
   };

    console.log(user)

    return(
      <div>
    <table style={{border:"2px  solid black"}}  >
      <thead  style={{border:"2px  solid black"}}  >
        <tr style={{border:"2px  solid black"}} >
          <th style={{border:"2px  solid black"}} >avatar</th>
          <th style={{border:"2px  solid black"}} >Name</th>        
           <th  style={{border:"2px  solid black"}}>city</th>
            <th style={{border:"2px  solid black"}}>Birth day</th>
        </tr>
      </thead>
      <tbody style={{border:"2px  solid black"}} >
        {user.map((u)=>(        
        <DataRow key={u.id} u={u}  onCityChange={HandleCityChange} />   
        )
       )}
       
      </tbody>

    </table>
    <button onClick={()=> setSonliste([...user])} >listele</button>
    <div>
      <h3>sonuc</h3>
      {sonliste.map((s)=>(
        <p key={s.id} >{s.name} {s.surname} {s.city} {s.birthDate}</p>
      ))}
    </div>

  </div>  )
}



export default App
