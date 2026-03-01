import Inputt from './components/TodoInput';
import './App.css'
import  { useState } from 'react';
import Lİsteleme from './components/TodoButon';
import { useEffect } from 'react';
  
function App() {
  
  const [Liste,SetListe]=useState(()=>{
    const kayitliPlanlar=localStorage.getItem("planlar");
    return kayitliPlanlar ? JSON.parse(kayitliPlanlar) : [];
  });
  
  const ekleListe=(plan) =>{
    SetListe([ ...Liste ,plan]);
  }

  const Silme=(index)=>{
    const  yeniListe=Liste.filter((_,i)=>i!==index);
    SetListe(yeniListe);

  }

  useEffect(()=>{
    localStorage.setItem("planlar",JSON.stringify(Liste));
  },[Liste]);

  return(
    
   <div className='app-container'> <Inputt  onAdd={ekleListe} />
   
<div className='list'>
      
    {Liste.map((plan,index)=>(
      <Lİsteleme key={index} text={plan}  onDelete={()=>Silme(index)} />
    ))} 
   </div> 
    </div> 
  );
}

export default App
