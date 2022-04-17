import *as ActionType from '../types/UserManagement'

const initialState = {
    loading: false,
    listUser: null,
    keyword: '',
    error: null
}

const UserManagement_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.USERPAGINATION_REQUEST: {
            state.loading = true
            state.listUser = null
            state.error = null
            return { ...state }
        }
        case ActionType.USERPAGINATION_SUCCESS: {
            state.loading = false
            state.listUser = action.listUser
            state.error = null
            return { ...state }
        }
        case ActionType.USERPAGINATION_ERROR: {
            state.loading = false
            state.listUser = null
            state.error = action.error
            return { ...state }
        }

        case ActionType.SEARCH_USER: {
            return { ...state, keyword: action.value }
        }

        case ActionType.DELETE_USER: {
            return { ...state, user: action.user }
        }

        case ActionType.ADD_USER: {
            return { ...state, user: action.user }
        }

        case ActionType.UPDATE_USER: {
            return { ...state, user: action.user }
        }

        default:
            return { ...state }
    }
}

export default UserManagement_Reducer
