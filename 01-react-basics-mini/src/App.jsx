import { useState,useEffect} from 'react'
import FilmItem from './FilmItem';
function App(){
 const [filmAdi,setFilmAdi]=useState("");
 const [filmLİstesi,setFilmlistesi]=useState([]);

 useEffect(()=>{
  alert("film sitesine hoşgeldiniz");
 },[]);    //sonuna eklenen köşeli parantez sayfa ilk açılınca sadece çalısır mesaj 

 const FilmEkle=()=>{
  if(filmAdi!==""){
    setFilmlistesi([...filmLİstesi,filmAdi]);  //yeni film ismini ekliyoruz listeye 
  setFilmAdi("");   
  } }
 const FilmSil=(index)=>{
  const yeniFilmListesi=filmLİstesi.filter((_,i)=>i!==index)
  setFilmlistesi(yeniFilmListesi);
}

  return(
    <div className='app' >
      <h1>Film listesi</h1>
      <input type="text" placeholder='film arayın' value={filmAdi}  onChange={(e)=>setFilmAdi(e.target.value)}/>
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