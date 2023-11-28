import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import profileReduer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice"
import courseReducer from "../slices/courseSlice"
import viewCourseReducer from "../slices/viewCourseSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReduer,
    cart: cartReducer,
    course: courseReducer,
    viewCourse: viewCourseReducer,
})

export default rootReducer;