const dietReducer = (state = [], action) => {
    switch (action.type) {
    case 'SET_DIET':
        return action.payload;
    default:
        return state;
    }
};

export default dietReducer;
