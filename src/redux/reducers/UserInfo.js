import *as ActionType from '../types/UserInfo'

const initialState = {
    loading: false,
    userInfo: null,
    file: null,
    error: null
}

const UserInfo_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.USERINFO_REQUEST: {
            state.loading = true
            state.userInfo = null
            state.error = null
            return { ...state }
        }
        case ActionType.USERINFO_SUCCESS: {
            state.loading = false
            state.userInfo = action.userInfo
            state.error = null
            return { ...state }
        }
        case ActionType.USERINFO_ERROR: {
            state.loading = false
            state.userInfo = null
            state.error = action.error
            return { ...state }
        }

        case ActionType.UPLOAD_PHOTO: {
            return { ...state, file: action.file }
        }
        default:
            return { ...state, }
    }
}
export default UserInfo_Reducer