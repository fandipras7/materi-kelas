import { createNewDate } from "../../../helper/date";

// action creator untuk pengambilan data tanpa proses async
// export const addTodoList = (data) => {
//   const createdAt = createNewDate();
//   const result = {
//     name: data,
//     createdAt: createdAt,
//   };
//   return {
//     type: "ADD_TODO",
//     payload: result,
//   };
// };

// action creator untuk pengambilan data yang ada proses async
export const addTodoList = (data) => async (dispatch) => {
  dispatch({ type: "ADD_TODO_PENDING" });
  const createdAt = await createNewDate();
  const result = {
    name: data,
    createdAt: createdAt,
  };
  //   return {
  //     type: "ADD_TODO",
  //     payload: result,
  //   };
  dispatch({
    type: "ADD_TODO_SUCCESS",
    payload: result,
  });
};
