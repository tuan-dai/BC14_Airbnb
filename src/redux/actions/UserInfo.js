import api from "../../util/apiUtil"
import *as ActionType from '../types/UserInfo'
import { getUserPagination } from "./UserManagement"

//GET USER INFO
export const getUserInfo = (id) => {
    return (dispatch) => {
        dispatch(actUserInfo_Request())
        api
            .get(`users/${id}`)
            .then(result => dispatch(actUserInfo_Success(result.data)))
            .catch(error => dispatch(actUserInfo_Error(error)))
    }
}

//UPLOAD PHOTO
export const uploadPhoto = (file, id) => {
    return (dispatch) => {
        api
            .post('users/upload-avatar', file)
            .then(result => {
                dispatch(actUpload_Photo(result.data))
                dispatch(getUserInfo(id))
                dispatch(getUserPagination())
            })
            .catch(error => console.log(error))
    }
}

const actUserInfo_Request = () => {
    return {
        type: ActionType.USERINFO_REQUEST
    }
}
const actUserInfo_Success = (userInfo) => {
    return {
        type: ActionType.USERINFO_SUCCESS,
        userInfo
    }
}
const actUserInfo_Error = (error) => {
    return {
        type: ActionType.USERINFO_ERROR,
        error
    }
}

const actUpload_Photo = (file) => {
    return {
        type: ActionType.UPLOAD_PHOTO,
        file
    }
}