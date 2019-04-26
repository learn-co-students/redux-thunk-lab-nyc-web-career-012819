export default function catsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CATS':
      return action.payload;
    case 'LOADING_CATS':
      return state;
    default:
      return state;
  }
}