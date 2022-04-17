import api from "../../util/apiUtil";
import { REVIEW_DETAIL } from '../types/ReviewDetail'

export const getReviewDetail = (id) => {
    return (dispatch) => {
        api
            .get(`reviews/${id}`)
            .then(result => dispatch(actGetReviewDetail(result.data)))
            .catch(error => console.log(error))
    }
}

const actGetReviewDetail = (reviewDetail) => {
    return {
        type: REVIEW_DETAIL,
        reviewDetail
    }
}