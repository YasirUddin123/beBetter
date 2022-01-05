const physicalActivityReducer = (state = [], action) => {
    switch (action.type) {
    case 'SET_PHYSICAL_ACTIVITY':
        return action.payload;
    default:
        return state;
    }
};

export default physicalActivityReducer;
