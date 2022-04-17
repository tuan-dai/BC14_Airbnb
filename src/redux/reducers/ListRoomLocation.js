import *as ActionType from '../types/ListRoomLocation'

const initialState = {
    loading: false,
    listRoom: null,
    room: null,
    file: null,
    error: null
}

const ListRoomLocation_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LISTROOMLOCATION_REQUEST: {
            state.loading = true
            state.listRoom = null
            state.error = null
            return { ...state }
        }
        case ActionType.LISTROOMLOCATION_SUCCESS: {
            state.loading = false
            state.listRoom = action.listRoom
            state.error = null
            return { ...state }
        }
        case ActionType.LISTROOMLOCATION_ERROR: {
            state.loading = false
            state.listRoom = null
            state.error = action.error
            return { ...state }
        }

        case ActionType.UPLOAD_IMAGEROOM: {
            return { ...state, file: action.file }
        }

        case ActionType.DELETE_ROOM: {
            return { ...state, room: action.room }
        }

        default:
            return { ...state };
    }
}
export default ListRoomLocation_Reducer