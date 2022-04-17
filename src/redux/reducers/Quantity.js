const initialState = {
    adult: 0,
    child: 0,
    infant: 0
}

const Quantity_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADULT': {
            if (action.payload) {
                state.adult += 1
            } else {
                if (state.adult > 0) {
                    state.adult -= 1
                }
            }
            return { ...state }
        }
        case 'CHILD': {
            if (action.payload) {
                state.child += 1
            } else {
                if (state.child > 0) {
                    state.child -= 1
                }
            }
            return { ...state }
        }
        case 'INFANT': {
            if (action.payload) {
                state.infant += 1
            } else {
                if (state.infant > 0) {
                    state.infant -= 1
                }
            }
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default Quantity_Reducer
