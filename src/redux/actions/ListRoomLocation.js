import api from '../../util/apiUtil'
import *as ActionType from '../types/ListRoomLocation'

//GET LIST ROOM BY LOCATION
export const getListRoomLocation = (locationId) => {
    return (dispatch) => {
        dispatch(actListRoomLocation_Request())
        api
            .get(`rooms?locationId=${locationId}`)
            .then(result => dispatch(actListRoomLocation_Success(result.data)))
            .catch(error => dispatch(actListRoomLocation_Error(error)))
    }
}

//UPLOAD IMAGE ROOM
export const uploadImageRoom = (roomId, file, locationId) => {
    return (dispatch) => {
        api
            .post(`rooms/upload-image/${roomId}`, file)
            .then(result => {
                dispatch(actUploadImageRoom(result.data))
                dispatch(getListRoomLocation(locationId))
            })
            .catch(error => console.log(error))
    }
}

//DELETE ROOM
export const deleteRoom = (roomId, locationId) => {
    return (dispatch) => {
        api
            .delete(`rooms/${roomId}`)
            .then(result => {
                dispatch(actDeleteRoom(result.data))
                dispatch(getListRoomLocation(locationId))
            })
            .catch(error => console.log(error))
    }
}

const actListRoomLocation_Request = () => {
    return {
        type: ActionType.LISTROOMLOCATION_REQUEST
    }
}
const actListRoomLocation_Success = (listRoom) => {
    return {
        type: ActionType.LISTROOMLOCATION_SUCCESS,
        listRoom
    }
}
const actListRoomLocation_Error = (error) => {
    return {
        type: ActionType.LISTROOMLOCATION_ERROR,
        error
    }
}

const actUploadImageRoom = (file) => {
    return {
        type: ActionType.UPLOAD_IMAGEROOM,
        file
    }
}

const actDeleteRoom = (room) => {
    return {
        type: ActionType.DELETE_ROOM,
        room
    }
}