import { useState } from "react";

function DataRow({u, onCityChange}){
    const[isEditing,setIsediting]=useState(false);
    const [cityvalue, setCityvalue]=useState(u.city)
  return(
     <tr style={{gap:"20px",border:"2px solid black"}} >
        <td style={{border:"2px  solid black"}} > <img src={u.avatar} alt="avatar" style={{width:"50px",  borderRadius:"50%" }} /></td>
      <td style={{border:"2px  solid black"}} > {u.name} {u.surname}</td>

     <td onClick={()=> setIsediting(true) } style={{border:"2px  solid black"}} > 
        {isEditing ?(
        <input  type="text" value={cityvalue}  onChange={(e)=>setCityvalue(e.target.value)} 
         onBlur={()=>{setIsediting(false);
             onCityChange(u.id, cityvalue);
         }}
         autoFocus
        />
    ):(
        <span>{cityvalue}</span>
    ) }
     </td>

      <td style={{border:"2px  solid black"}} >{u.birthDate}</td>
      
   </tr>
  )
}

export default DataRow;