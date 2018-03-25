let userID = 0;
export const addUser = (name, score) => ({
  type: 'ADD_USER',
  payload: {
    id: userID++,
    name,
    score
  }
});

export const saveAnswer = (text) => ({
  type: 'SAVE_ANSWER',
  payload: text
});

export const saveResult = (result) => ({
  type: 'SAVE_RESULT',
  payload: result
});

export const resetGame = () => ({
  type: 'RESET_GAME'
});