import api from '../../util/apiUtil'
import *as ActionType from '../types/Review'

//GET REVIEW BY ROOM
export const getReviewRoom = (id) => {
    return (dispatch) => {
        dispatch(actReviewRoom_Request())
        api
            .get(`reviews/byRoom?roomId=${id}`)
            .then(result => dispatch(actReviewRoom_Success(result.data)))
            .catch(error => dispatch(actReviewRoom_Error(error)))
    }
}

//CREATE REVIEW
export const createReview = (roomId, review) => {
    return (dispatch) => {
        api
            .post(`reviews?roomId=${roomId}`, review)
            .then(result => {
                dispatch(actCreateReview(result.data))
                dispatch(getReviewRoom(roomId))
            })
            .catch(error => console.log(error))
    }
}

//UPDATE REVIEW
export const updateReview = (id, review, roomId) => {
    return (dispatch) => {
        api
            .put(`reviews/${id}`, review)
            .then(result => {
                dispatch(actUpdateReview(result.data))
                dispatch(getReviewRoom(roomId))
            })
            .catch(error => console.log(error))
    }
}

//DELETE REVIEW
export const deleteReview = (userId, roomId) => {
    return (dispatch) => {
        api
            .delete(`reviews/${userId}`)
            .then(result => {
                dispatch(actDeleteReview(result.data))
                dispatch(getReviewRoom(roomId))
            })
            .catch(error => console.log(error))
    }
}

const actReviewRoom_Request = () => {
    return {
        type: ActionType.RIVIEWROOM_REQUEST
    }
}
const actReviewRoom_Success = (listReview) => {
    return {
        type: ActionType.RIVIEWROOM_SUCCESS,
        listReview
    }
}
const actReviewRoom_Error = (error) => {
    return {
        type: ActionType.RIVIEWROOM_ERROR,
        error
    }
}

const actCreateReview = (review) => {
    return {
        type: ActionType.CREATE_REVIEW,
        review
    }
}

const actUpdateReview = (review) => {
    return {
        type: ActionType.UPDATE_REVIEW,
        review
    }
}

const actDeleteReview = (review) => {
    return {
        type: ActionType.DELETE_REVIEW,
        review
    }
}