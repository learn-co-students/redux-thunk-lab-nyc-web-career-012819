export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(responseJSON => responseJSON.images)
      .then(cats => {
        dispatch({ type: 'ADD_CATS', payload: cats })
      });
  }
}