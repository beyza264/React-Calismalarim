import { useState,useEffect} from 'react'
import FilmItem from './FilmItem';
function App(){
 const [filmAdi,SetFilmAdi]=useState("");
 const [filmLİstesi,SetFilmlistesi]=useState([]);

 useEffect(()=>{
  alert("film sitesine hoşgeldiniz");
 },[]);

 const FilmEkle=()=>{
  if(filmAdi!==""){
    SetFilmlistesi([...filmLİstesi,filmAdi]);
  SetFilmAdi("");
  } }
 const FilmSil=(index)=>{
  const yeniFilmListesi=filmLİstesi.filter((_,i)=>i!==index)
  SetFilmlistesi(yeniFilmListesi);
}

  return(
    <div className='app' >
      <h1>Film listesi</h1>
      <input type="text" placeholder='film arayın' value={filmAdi}  onChange={(e)=>SetFilmAdi(e.target.value)}/>
      <button onClick={FilmEkle}>Ekle</button>
      <ul>
      {filmLİstesi.length===0? <p>henüz film yok</p>: <p>{filmLİstesi.length}film var</p>}
      
      {filmLİstesi.map((film,index)=>(
        <FilmItem key={index} film={film} onSil={()=> FilmSil(index)} /> 
      ))}
    </ul> 
    </div>
  );

}
 export default App;