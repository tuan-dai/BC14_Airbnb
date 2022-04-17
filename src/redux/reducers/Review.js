import *as ActionType from '../types/Review'

const initialState = {
    loading: false,
    listReview: null,
    review: null,
    error: null,
}

const Review_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.RIVIEWROOM_REQUEST: {
            state.loading = true
            state.listReview = null
            state.error = null
            return { ...state }
        }
        case ActionType.RIVIEWROOM_SUCCESS: {
            state.loading = false
            state.listReview = action.listReview
            state.error = null
            return { ...state }
        }
        case ActionType.RIVIEWROOM_ERROR: {
            state.loading = false
            state.listReview = null
            state.error = action.error
            return { ...state }
        }

        case ActionType.CREATE_REVIEW: {
            return { ...state, review: action.review }
        }

        case ActionType.UPDATE_REVIEW: {
            return { ...state, review: action.review }
        }

        case ActionType.DELETE_REVIEW: {
            return { ...state, review: action.review }
        }
        default:
            return { ...state };
    }
}

export default Review_Reducer
