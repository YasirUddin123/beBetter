// Now we are making sure the edit results page can successfully grab this reducer.
const editThisResult = (state = {}, action) => {
  // if the action.type is equal to 'SET_RESULT_TO_EDIT`, then we want to return the data.
    if (action.type === 'SET_RESULT_TO_EDIT') {
      return  action.payload;
    } else if (action.type === 'EDIT_PHYSICAL_RESULT') {
      return { ...state, physical_activity: action.payload }
    } else if (action.type === 'EDIT_DIET_RESULT') {
      return { ...state, diet: action.payload }
    } else if (action.type === 'EDIT_SLEEP_RESULT') {
      return { ...state, sleep: action.payload }
    } else if (action.type === 'EDIT_MOOD_RESULT') {
      return { ...state, mood: action.payload }
    } else if (action.type === 'EDIT_COMMENTS_RESULT') {
      return { ...state, comments: action.payload }
    } else if (action.type === 'CLEAR_RESULT') {
      return {};
    }
    return state;
  }

  export default editThisResult;

  // To actually edit the result, we need something to run that gets triggered by
  // the action.type 'EDIT_RESULT'
  // We need to make a saga function to handle this edit.
