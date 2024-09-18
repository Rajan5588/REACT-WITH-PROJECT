import { useContext } from "react";
import TodoItems from "./TodoItems";
import { TodoItemsDContext } from "../Store/Todo-Items-Store";

let TodoItemsV = ({ OnDelete }) => {
    const  ItemsTodo= useContext(TodoItemsDContext)
    
  return (
    <>
      {ItemsTodo.map((I) => {
        return (
          <TodoItems
            key={I.Name}
            Name={I.Name}
            Date1={I.Date1}
            OnDelete={OnDelete}
          />
        );
      })}
    </>
  );
};

export default TodoItemsV;
