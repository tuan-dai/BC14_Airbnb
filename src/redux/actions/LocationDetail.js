import api from '../../util/apiUtil'
import *as ActionType from '../types/LocationDetail'

//GET Location DETAIL
export const getLocationDetail = (locationId) => {
    return (dispatch) => {
        dispatch(actLocationDetail_Request())
        api
            .get(`locations/${locationId}`)
            .then(result => dispatch(actLocationDetail_Success(result.data)))
            .catch(error => dispatch(actLocationDetail_Error(error)))
    }
}


const actLocationDetail_Request = () => {
    return {
        type: ActionType.LOCATIONDETAIL_REQUEST
    }
}
const actLocationDetail_Success = (location) => {
    return {
        type: ActionType.LOCATIONDETAIL_SUCCESS,
        location
    }
}
const actLocationDetail_Error = (error) => {
    return {
        type: ActionType.LOCATIONDETAIL_ERROR,
        error
    }
}
