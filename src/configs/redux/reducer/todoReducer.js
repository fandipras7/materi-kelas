const initialState = {
  todo: [],
  isLoading: false,
};

const todosReducer = (state = initialState, action) => {
  if (action.type === "ADD_TODO_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "ADD_TODO_SUCCESS") {
    return {
      ...state,
      todo: [...state.todo, action.payload],
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default todosReducer;
