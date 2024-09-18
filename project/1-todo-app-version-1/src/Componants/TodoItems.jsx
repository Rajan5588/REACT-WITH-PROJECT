import { FiDelete } from "react-icons/fi";

function TodoItems({Name, Date1,OnDelete}){
   
function Dellet(){
    OnDelete(Name)
}

   return (
   
   <div className="container text-center">
        <div className="row Rk-row">
   <div className="col-6">{Name}
  </div>
  <div className="col-4">{Date1}
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-danger Rk-botton" onClick={Dellet}><FiDelete /></button>
  </div>
  </div>
  </div>
      );
   
  
  }
  export default TodoItems;