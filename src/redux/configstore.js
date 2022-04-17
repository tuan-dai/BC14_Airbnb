import { combineReducers } from "redux";
import User_Reducer from '../redux/reducers/User'
import UserManagement_Reducer from '../redux/reducers/UserManagement'
import UserInfo_Reducer from "./reducers/UserInfo";
import Review_Reducer from "./reducers/Review";
import ReviewDetail_Reducer from "./reducers/ReviewDetail";
import RoomDetail_Reducer from "./reducers/RoomDetail";
import Location_Reducer from "./reducers/Location";
import ListRoomLocation_Reducer from "./reducers/ListRoomLocation";
import LocationDetail_Reducer from "./reducers/LocationDetail";
import Quantity_Reducer from "./reducers/Quantity";

const rootReducer = combineReducers({
    User_Reducer,
    UserManagement_Reducer,
    UserInfo_Reducer,
    Review_Reducer,
    ReviewDetail_Reducer,
    RoomDetail_Reducer,
    Location_Reducer,
    ListRoomLocation_Reducer,
    LocationDetail_Reducer,
    Quantity_Reducer,
})
export default rootReducer