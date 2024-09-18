import { useContext } from "react";
import { TodoItemsDContext } from "../Store/Todo-Items-Store";


const WelcomeM = () => {
  const TodoItemsD= useContext(TodoItemsDContext)
  return (
    <div>{
     TodoItemsD.length===0 && <h1>Enjoy🤩 YOUR DAY ☀️☀️</h1>}
    </div>
  )
}

export default WelcomeM;
