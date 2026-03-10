import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import ProductList from './productList';
import ProductDetail from './productDetail';
 //Browserrouter  adres çubuğu değiştiğinde reacta haber veriyor
 //route ile uyan tek yolu routes götürür  , route adresi aç der routes iel adres açılır
 //route adres routes adres varsa açıyor browserrouter reacta haber veriyor 
 //:id de iki nokta oraya farklı bir değer gelebileceğini ifade ediyormuş 
 // <route path={"*""} element={<notfound/>} /> bu ise  yollardan hiçbiri eşleşmesze açılır
 
function App() {
   return( 
  <BrowserRouter>  
  <Routes>
    <Route path='/' element={<ProductList/>} />
    <Route path='/items/:id' element={<ProductDetail/>} />
     
  </Routes>
  </BrowserRouter>
   );
}

export default App;