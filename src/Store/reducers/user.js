const user = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
        return [ ...state, {
                id: action.payload.id,
                name: action.payload.name,
                score: action.payload.score
            }
        ];
    default:
      return state;
  }
}

export default user;