export const robot = (store) => (next) => (action) => {
  if (typeof action === "function") {
    console.log(action);

    return action(store.dispatch, store.getState);
  }
  console.log("состояние из middleware", store.getState());
  const currentState = next(action);
  console.log("состояние из middleware next", store.getState());
  return currentState;
};
