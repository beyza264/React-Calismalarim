import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/* import { useState,useEffect } from 'react' 
import './App.css'

 function App(){
  const[filmAdi,setFilmAdi]=useState("");
  const[filmListesi,setFilmListesi]=useState([]);
 
  useEffect(()=>{
    alert("film sitesine hoşgeldiniz");
  },[]);

  const FilmEkle=()=>{
    if(filmAdi!==""){
      setFilmListesi([...filmListesi,filmAdi]);
    setFilmAdi("");
    }
  }
  const FilmSil=(index)=>{
    const yeniFilmListesi=filmListesi.filter((_, i) => i !== index);
    setFilmListesi(yeniFilmListesi);
  }
  return(
    <div className='app'>
      <h1>Film listesi</h1>
       <input type='text' placeholder='film adını yaz ' value={filmAdi} onChange={(e)=> setFilmAdi(e.target.value)}></input>
      <button onClick={FilmEkle} >Ekle</button>
     {filmListesi.length===0 ? <p>henüz film yok</p> : <p>{filmListesi.length} film var</p>}
      <ul>
        {filmListesi.map((film,index)=>(
          <li key={index}>{film}
          <button onClick={() => FilmSil(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App */