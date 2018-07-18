import { FETCH_TRIVIA, FETCH_TRIVIA_SUCCESS, FETCH_TRIVIA_FAIL } from './types';

const initialState = {
  _loading: false,
  error: "",
  results: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    case FETCH_TRIVIA:
    return {
        ...state,
        _loading: true
    };
    case FETCH_TRIVIA_SUCCESS:
    return {
        ...state,
        results: { ...action.payload },
        _loading: false
    };
    case FETCH_TRIVIA_FAIL:
    return {
        ...state,
        _loading: false,
        error: action.payload
    };
  
    default:
      return state;
      break;
  }

};