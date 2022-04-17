import *as ActionType from '../types/Location'

const initialState = {
    loading: false,
    listLocation: null,
    location: null,
    keyword: '',
    error: null
}

const Location_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOCATION_REQUEST: {
            state.loading = true
            state.listLocation = null
            state.error = null
            return { ...state }
        }
        case ActionType.LOCATION_SUCCESS: {
            state.loading = false
            state.listLocation = action.location
            state.error = null
            return { ...state }
        }
        case ActionType.LOCATION_ERROR: {
            state.loading = false
            state.listLocation = null
            state.error = action.error
            return { ...state }
        }

        case ActionType.SEARCH_LOCATION: {
            return { ...state, keyword: action.payload }
        }

        case ActionType.DELETE_LOCATION: {
            return { ...state, location: action.location }
        }

        case ActionType.UPLOADPHOTO_LOCATION: {
            return { ...state, location: action.file }
        }
        default:
            return { ...state };
    }
}
export default Location_Reducer