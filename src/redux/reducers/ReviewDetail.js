import { REVIEW_DETAIL } from '../../redux/types/ReviewDetail'

const initialState = {
    reviewDetail: null,
}

const ReviewDetail_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEW_DETAIL: {
            return { ...state, reviewDetail: action.reviewDetail }
        }

        default:
            return { ...state }
    }
}
export default ReviewDetail_Reducer