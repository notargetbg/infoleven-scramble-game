const DEFAULT_STATE = {
    answers: [],
    currentResult: null
  };

const game = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SAVE_ANSWER':
        return {...state, ...{answers: [...state.answers, action.payload]}};   

    case 'SAVE_RESULT':
    return {...state, ...{currentResult: action.payload}};   
         
    case 'RESET_GAME':
    return DEFAULT_STATE;

    default:
      return state;
  }
};

export default game;