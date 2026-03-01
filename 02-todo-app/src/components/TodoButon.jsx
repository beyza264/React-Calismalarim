function Lİsteleme({text,onDelete}) {
 return(
   <div className="listeleme"> 
   <span>{text}</span>
    <button className="silme" onClick={onDelete}  cla   >  X</button>
   </div>
 );
}
export default Lİsteleme;