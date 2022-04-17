import *as ActionType from '../types/LocationDetail'

const initialState = {
    loading: false,
    location: null,
    error: null
}

const LocationDetail_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOCATIONDETAIL_REQUEST: {
            state.loading = true
            state.location = null
            state.error = null
            return { ...state }
        }
        case ActionType.LOCATIONDETAIL_SUCCESS: {
            state.loading = false
            state.location = action.location
            state.error = null
            return { ...state }
        }
        case ActionType.LOCATIONDETAIL_ERROR: {
            state.loading = false
            state.location = null
            state.error = action.error
            return { ...state }
        }

        default:
            return { ...state };
    }
}
export default LocationDetail_Reducer
