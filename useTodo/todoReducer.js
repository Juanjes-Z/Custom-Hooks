export const todoRedcuer = (initialState = [], action) => {
  // console.log(action);
  switch (action.type) {
    case "add todo":
      return [...initialState, action.payload];

    case "remove todo":
      return initialState.filter((todo) => todo.id != action.payload);
    case "update done todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
