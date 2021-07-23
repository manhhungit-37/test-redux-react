const initialHobby = {
  list: [],
  activeHobbyId: null
}

const hobbyReducer = (state = initialHobby, action) => {
  switch(action.type) {
    case 'ADD_HOBBY': {
      const newHobbyList = [...state.list, action.payload];
      return {
        ...state,
        list: newHobbyList,
      }
    }

    case 'SET_ACTIVE_HOBBY': {
      return {
        ...state,
        activeHobbyId: action.payload,
      }
    }

    default: {
      return state;
    }
  }
}

export default hobbyReducer;