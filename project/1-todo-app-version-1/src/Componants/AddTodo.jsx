import { useRef } from "react";
import { IoAdd } from "react-icons/io5";
function AddTodo({OnchangeB}){

  
  const  todoNameElement=useRef();
  const  todoDateElement=useRef();

 function OnClickB(e){
  let todoName=todoNameElement.current.value;
  let todoDate=todoDateElement.current.value;
  e.preventDefault();
    OnchangeB(todoName,todoDate)
    todoNameElement.current.value=''
    todoDateElement.current.value=''
  }
     return (
      <div className="container text-center">
          <form className="row Rk-row"
          onSubmit={OnClickB} >
          <div className="col-6">
            <input  ref={ todoNameElement} type="text" id="" placeholder="Enter Tode Here.."  />
          </div>
          <div className="col-4">
            <input ref={ todoDateElement}  type="date"  id=""  />
          </div>
          <div className="col-2">
          <button type="submit" className="btn btn-success Rk-botton" ><IoAdd /></button>
          </div>
        </form>
     </div>

     )
}

export default AddTodo;