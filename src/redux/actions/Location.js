import api from '../../util/apiUtil'
import *as ActionType from '../types/Location'
import Swal from 'sweetalert2'

//GET LOCATION
export const getLocation = () => {
    return (dispatch) => {
        dispatch(actGetLocation_Request())
        api
            .get('locations')
            .then(result => dispatch(actGetLocation_Success(result.data)))
            .catch(error => dispatch(actGetLocation_Error(error)))
    }
}

//CREATE LOCATION
export const createLocation = (location, history) => {
    return (dispatch) => {
        api
            .post('locations', location)
            .then(result => {
                dispatch(actCreateLocation(result.data))
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulation!',
                    text: 'Create Location Successfully!',
                })
                history.push('/admin/location-management')
            })
            .catch(error => console.log(error))
    }
}

//UPDATE LOCATION
export const updateLocation = (locationId, location, history) => {
    return (dispatch) => {
        api
            .put(`locations/${locationId}`, location)
            .then(result => {
                dispatch(actUpdateLocation(result.data))
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulation!',
                    text: 'Update Location Successfully!',
                })
                history.push('/admin/location-management')
            })
            .catch(error => console.log(error))
    }
}

//DELETE LOCATION 
export const deleteLocation = (locationId) => {
    return (dispatch) => {
        api
            .delete(`locations/${locationId}`)
            .then(result => {
                dispatch(actDeleteLocation(result.data))
                dispatch(getLocation())
            })
            .catch(error => console.log(error))
    }
}

//UPLOAD PHOTO LOCATION
export const uploadPhotoLocation = (locationId, file) => {
    return (dispatch) => {
        api
            .post(`locations/upload-images/${locationId}`, file)
            .then(result => {
                dispatch(actUploadPhotoLocation(result.data))
                dispatch(getLocation())
            })
            .catch(error => console.log(error))
    }
}


const actGetLocation_Request = () => {
    return {
        type: ActionType.LOCATION_REQUEST
    }
}
const actGetLocation_Success = (location) => {
    return {
        type: ActionType.LOCATION_SUCCESS,
        location
    }
}
const actGetLocation_Error = (error) => {
    return {
        type: ActionType.LOCATION_ERROR,
        error
    }
}

const actCreateLocation = (location) => {
    return {
        type: ActionType.CREATE_LOCATION,
        location
    }
}

const actUpdateLocation = (location) => {
    return {
        type: ActionType.UPDATE_LOCATION,
        location
    }
}

const actDeleteLocation = (location) => {
    return {
        type: ActionType.DELETE_LOCATION,
        location
    }
}

const actUploadPhotoLocation = (file) => {
    return {
        type: ActionType.UPLOADPHOTO_LOCATION,
        file
    }
}