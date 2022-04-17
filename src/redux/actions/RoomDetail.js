import api from '../../util/apiUtil'
import *as ActionType from '../types/RoomDetail'
import Swal from 'sweetalert2'
import openNotificationWithIcon from '../../_component/Notification'

//GET ROOM DETAIL
export const getRoomDetail = (id) => {
    return (dispatch) => {
        dispatch(actRoomDetail_Request())
        api
            .get(`rooms/${id}`)
            .then(result => dispatch(actRoomDetail_Success(result.data)))
            .catch(error => dispatch(actRoomDetail_Error(error)))
    }
}

//BOOKING ROOM
export const bookingRoom = (room, id) => {
    return (dispatch) => {
        api
            .post('rooms/booking/', room)
            .then(result => {
                dispatch(actBookingRoom(result.data))
                dispatch(getRoomDetail(id))
                openNotificationWithIcon('success', 'Booking room successfully')
            })
            .catch(error => console.log(error))
    }
}

//CREATE ROOM
export const createRoom = (room, history) => {
    return (dispatch) => {
        api
            .post('rooms', room)
            .then(result => {
                dispatch(actCreateRoom(result.data))
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulation!',
                    text: 'Create room Successfully!',
                })
                history.push('/admin/location-management')
            })
            .catch(error => console.log(error))
    }
}

//UPDATE ROOM
export const updateRoom = (id, room, history) => {
    return (dispatch) => {
        api
            .put(`rooms/${id}`, room)
            .then(result => {
                dispatch(actUpdateRoom(result.data))
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulation!',
                    text: 'Update room information successfully!',
                })
                history.push('/admin/location-management')
            })
            .catch(error => console.log(error))
    }
}

const actRoomDetail_Request = () => {
    return {
        type: ActionType.ROOMDETAIL_REQUEST
    }
}
const actRoomDetail_Success = (room) => {
    return {
        type: ActionType.ROOMDETAIL_SUCCESS,
        room
    }
}
const actRoomDetail_Error = (error) => {
    return {
        type: ActionType.ROOMDETAIL_ERROR,
        error
    }
}

const actBookingRoom = (room) => {
    return {
        type: ActionType.BOOKING_ROOM,
        room
    }
}

const actCreateRoom = (room) => {
    return {
        type: ActionType.CREATE_ROOM,
        room
    }
}

const actUpdateRoom = (room) => {
    return {
        type: ActionType.UPDATE_ROOM,
        room
    }
}