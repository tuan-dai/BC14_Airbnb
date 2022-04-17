import api from "../../util/apiUtil";
import *as ActionType from '../types/User'

// SIGN IN
export const signIn = (userInfo, history) => {
    return (dispatch) => {
        api
            .post('auth/login', userInfo)
            .then(result => {
                dispatch(actSignIn(result.data))
                window.location.reload()
                // Luu xuong localStorage
                localStorage.setItem('USER_LOGIN', JSON.stringify(result.data))

                // Chuyen sang trang dashboard
                const _userInfo = JSON.parse(localStorage.getItem('USER_LOGIN'))
                if (_userInfo.user.type === 'ADMIN') {
                    history.replace('/admin/dasboard')
                }
            })
            .catch(error => console.log(error))
    }
}

// SIGN UP
export const signUp = (userInfo) => {
    return (dispatch) => {
        api
            .post('auth/register', userInfo)
            .then(result => dispatch(actSignUp(result.data.content)))
            .catch(error => console.log(error))
    }
}

const actSignIn = (userInfo) => {
    return {
        type: ActionType.SIGNIN,
        userInfo
    }
}

const actSignUp = (userInfo) => {
    return {
        type: ActionType.SIGNUP,
        userInfo
    }
}