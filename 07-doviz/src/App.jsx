import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
function App() {
  const[miktar ,setMiktar]=useState("");
   const[cevrilecekParaBirimi,setCevrilecekParaBirimi]=useState('USD');
   const[hangiparaolucak,setHangiparaolucak]=useState('TRY');
   const [kurlar ,setKurlar]=useState({});
   const[sonuc, setSonuc]=useState(0);
   const[gecmis,setGecmis]=useState([]);
  useEffect( ()=>{
     axios.get("http://api.exchangeratesapi.io/v1/latest?access_key=5c59e1693dc96355c0b72761c725fbae")
    .then( (res)=>{
      setKurlar(res.data.rates)
    }     )
   .catch(
     (err)=>{
      console.error("hata var ",err)
     }
   )      
    
  },[] )

 const hesapla=()=>{
  if(kurlar&&miktar>0){
    const hesaplanan= (miktar/kurlar[cevrilecekParaBirimi])*kurlar[hangiparaolucak];
    const sonucekranabasma= hesaplanan.toFixed(2);
      setSonuc(sonucekranabasma);
      const tarih=new Date().toLocaleString();
      const yenikayit=`(${tarih}) : ${miktar} ${cevrilecekParaBirimi}=${sonucekranabasma}${hangiparaolucak}`;
     setGecmis([yenikayit, ...gecmis]);
    console.log(`${miktar} ${cevrilecekParaBirimi}=${sonucekranabasma} ${hangiparaolucak}`);
  } else{
    alert('lütfen geçerli miktar giriniz');
  }
 };
  return(
    <div>
      <h1>Döviz Çevirici Uygulaması</h1>
      <div className='box'>
          <input type='number' placeholder='miktar giriniz' value={miktar} onChange={(e)=> setMiktar(e.target.value)} />  
          <select value={cevrilecekParaBirimi} onChange={(e)=>setCevrilecekParaBirimi(e.target.value)} > 
            {kurlar&& Object.keys(kurlar).map((birim)=>(
              <option value={birim}> {birim}</option> 
            ))}
          
          
           </select>
           <span> {'>>>'} </span>
          
            <select value={hangiparaolucak} onChange={(e)=> setHangiparaolucak(e.target.value)} >
              {kurlar&&Object.keys(kurlar).map((birim)=>(
                     <option value={birim}> {birim}</option>
              )        )}
              
           </select>
          <button onClick={hesapla} >Çevir</button>
            </div> 
            <div>
              <h2>sonuc:  {sonuc} {hangiparaolucak}</h2>
            </div>
            <div className='history' >
              <h3>geçmiş aramalar</h3>
              <ul>
                {gecmis.map((kayit,index)=>(
                  <li key={index} > {kayit}</li>
                ))}
              </ul>
            </div>
            
            </div>
  )
}

export default App
