import api from '../../util/apiUtil'
import *as ActionType from '../types/UserManagement'
import Swal from 'sweetalert2'

//GET USER PAGINATION
export const getUserPagination = () => {
    return (dispatch) => {
        dispatch(actUserPagination_Request())
        api
            .get('users/pagination')
            .then(result => dispatch(actUserPagination_Success(result.data)))
            .catch(error => dispatch(actUserPagination_Error(error)))
    }
}

//DELETE USER
export const deleteUser = (id) => {
    return (dispatch) => {
        api
            .delete(`users/${id}`)
            .then(result => {
                dispatch(actDeleteUser(result.data))
                dispatch(getUserPagination())
            })
            .catch(error => console.log(error))
    }
}

//ADD USER
export const addUser = (user, history) => {
    return (dispatch) => {
        api
            .post('users', user)
            .then(result => {
                dispatch(actAddUser(result.data))
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulation!',
                    text: 'Create User Successfully!',
                })
                history.push('/admin/user-management')
            })
            .catch(error => console.log(error))
    }
}

//UPDATE USER
export const updateUser = (id, user, history) => {
    return (dispatch) => {
        api
            .put(`users/${id}`, user)
            .then(result => {
                dispatch(actUpdateUser(result.data))
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulation!',
                    text: 'Update User Successfully!',
                })
                history.push('/admin/user-management')
            })
            .catch(error => console.log(error))
    }
}

const actUserPagination_Request = () => {
    return {
        type: ActionType.USERPAGINATION_REQUEST
    }
}
const actUserPagination_Success = (listUser) => {
    return {
        type: ActionType.USERPAGINATION_SUCCESS,
        listUser
    }
}
const actUserPagination_Error = (error) => {
    return {
        type: ActionType.USERPAGINATION_ERROR,
        error
    }
}

const actDeleteUser = (user) => {
    return {
        type: ActionType.DELETE_USER,
        user
    }
}

const actAddUser = (user) => {
    return {
        type: ActionType.ADD_USER,
        user
    }
}

const actUpdateUser = (user) => {
    return {
        type: ActionType.UPDATE_USER,
        user
    }
}