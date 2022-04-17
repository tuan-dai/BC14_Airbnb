import *as ActionType from '../types/User'

const initialState = {
    userInfo: ''
}

const User_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SIGNIN: {
            return { ...state, userInfo: action.userInfo }
        }

        case ActionType.SIGNUP: {
            return { ...state, userInfo: action.userInfo }
        }

        default:
            return { ...state }
    }
}
export default User_Reducer
