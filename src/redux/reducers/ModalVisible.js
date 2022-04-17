import *as ActionType from '../types/ModalVisible'

const initialState = {
    modalVisible1: false,
    modalVisible2: false,
}

const ModalVisible_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.MODALVISIBLE1_SHOW: {
            return { ...state, modalVisible1: true }
        }
        case ActionType.MODALVISIBLE1_HIDE: {
            return { ...state, modalVisible1: false }
        }

        case ActionType.MODALVISIBLE2_SHOW: {
            return { ...state, modalVisible2: true }
        }
        case ActionType.MODALVISIBLE2_HIDE: {
            return { ...state, modalVisible2: false }
        }

        default:
            return { ...state }
    }
}
export default ModalVisible_Reducer