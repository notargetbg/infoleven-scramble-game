const DEFAULT_STATE = {
		answers: [],
		currentResult: null,
		shouldStartGame: false,
		hasGameStarted: false,
		shouldShowModal: false
	};

const game = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case 'SAVE_ANSWER':
			return {...state, ...{answers: [...state.answers, action.payload]}};   

		case 'SAVE_RESULT':
			return {...state, ...{currentResult: action.payload}};   
				 
		case 'RESET_GAME':
			return DEFAULT_STATE;

		case 'START_GAME':
			return {...state, ...{shouldStartGame: true}};

		case 'END_GAME':
		return {...state, ...{hasGameStarted: false}};

		case 'GAME_STARTED':
			return {...state, ...{shouldStartGame: false, hasGameStarted: true}};

		case 'SHOW_MODAL':
			return {...state, ...{shouldShowModal: true}};

		case 'HIDE_MODAL':
			return {...state, ...{shouldShowModal: false}};

		default:
			return state;
	}
};

export default game;