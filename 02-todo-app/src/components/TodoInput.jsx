import { useState } from "react";
function Inputt({onAdd}){
 const[ınputValue, setInputValue]=useState("");

 function Ekle( ){
    if(ınputValue.trim()!==""){
       onAdd(ınputValue);
      setInputValue("");
      
 }
};
 return(
    <>
     <h1>Planlarım</h1>
     <div className="input-group">
     <input type="text" placeholder='Plan ekle' value={ınputValue} onChange={(e)=>setInputValue(e.target.value)} />
     <button onClick={Ekle}  >Ekle</button>
     </div>
    </>
 )
}

export default Inputt;