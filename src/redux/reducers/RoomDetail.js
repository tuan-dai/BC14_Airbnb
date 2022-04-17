import *as ActionType from '../types/RoomDetail'

const initialState = {
    loading: false,
    room: null,
    roomId: '',
    keyword: '',
    error: null
}

const RoomDetail_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ROOMDETAIL_REQUEST: {
            state.loading = true
            state.room = null
            state.error = null
            return { ...state }
        }
        case ActionType.ROOMDETAIL_SUCCESS: {
            state.loading = false
            state.room = action.room
            state.error = null
            return { ...state }
        }
        case ActionType.ROOMDETAIL_ERROR: {
            state.loading = false
            state.room = null
            state.error = action.error
            return { ...state }
        }

        case ActionType.BOOKING_ROOM: {
            return { ...state, room: action.room }
        }

        case 'GET_ROOMID': {
            return { ...state, roomId: action.payload }
        }

        case ActionType.CREATE_ROOM: {
            return { ...state, room: action.room }
        }

        case ActionType.SEARCH_ROOM: {
            return { ...state, keyword: action.value }
        }

        case ActionType.UPDATE_ROOM: {
            return { ...state, room: action.room }
        }
        default:
            return { ...state };
    }
}
export default RoomDetail_Reducer
