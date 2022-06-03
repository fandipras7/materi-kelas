import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoList } from "../../configs/redux/action/todoAction";

const Todo = () => {
  const { todo, isLoading } = useSelector((state) => state.todo);
  const [todoList, setTodoList] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    // const dataTodoLost = {
    //   nama: todoList,
    //   createdAt: new Date().toString(),
    // };
    // dispatch({ type: "ADD_TODO", payload: dataTodoLost });
    dispatch(addTodoList(todoList));
    setTodoList("");
  };
  // console.log(stateGlobal);
  return (
    <div>
      <div className="row">
        <input
          value={todoList}
          onChange={(e) => {
            setTodoList(e.target.value);
          }}
          type="text"
          style={{ width: "400px" }}
        />
        <button className="btn btn-primary" style={{ width: "100px" }} onClick={handleAddTodo}>
          {isLoading ? "Loading..." : "Simpan"}
        </button>
        {/* <p>{JSON.stringify(stateGlobal)}</p> */}
      </div>
      {/* {todo.length > 0 ? (
        <ul>
          {todo.map((item, index) => (
            <li key={index}>
              {item.name}--{item.createdAt}
            </li>
          ))}
        </ul>
      ) : (
        <h4>Data Not Found</h4>
      )} */}

      {todo.length > 0 && (
        <ul>
          {todo.map((item, index) => (
            <li key={index}>
              {item.name}--{item.createdAt}
            </li>
          ))}
        </ul>
      )}
      {todo.length < 1 && <h4>Page Not Found</h4>}
    </div>
  );
};

export default Todo;
