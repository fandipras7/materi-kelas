import axios from "axios";
export const loginUser = (data) => async (dispatch) => {
  try {
    const result = axios.post("http://localhost:4000/v1/users/login", data);
    console.log(result);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: {} });
  } catch (error) {}
};
