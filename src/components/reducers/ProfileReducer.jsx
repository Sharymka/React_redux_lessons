const initialState = {
  language: {
    english: false,
    russian: false,
    french: false,
    german: false,
  },
};

function changeState(state, action) {
  const newState = { ...state };
  newState.language[action.type.value] = action.type.check;

  return newState;
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type.value) {
    case 'english':
    case 'russian':
    case 'french':
    case 'german':
      return changeState(state, action);
    default:
      return state;
  }
};
