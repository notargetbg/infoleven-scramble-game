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

export const startGame = () => ({
	type: 'START_GAME'
});

export const endGame = () => ({
	type: 'END_GAME'
});

export const gameStarted = () => ({
	type: 'GAME_STARTED'
});

export const showModal = () => ({
	type: 'SHOW_MODAL'
});

export const hideModal = () => ({
	type: 'HIDE_MODAL'
});