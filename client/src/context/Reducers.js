const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFectching: true,
        error: false
      };

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFectching: false,
        error: false
      };

    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFectching: false,
        error: true
      };
    case 'UPDATE_START':
      // nothing will be changed here
      return {
        ...state,
        isFectching: true,
      };

    case 'UPDATE_SUCCESS':
      return {
        user: action.payload,
        isFectching: false,
        error: false
      };

    case 'UPDATE_FAILURE':
      return {
        user: state.user,
        isFectching: false,
        error: true
      };
    case 'LOGOUT':
      return {
        user: null,
        isFectching: false,
        error: false
      };

    default:
      return state;
  }
};

export default Reducer;