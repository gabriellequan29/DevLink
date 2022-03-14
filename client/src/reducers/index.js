import { combineReducers } from 'redux';
import alert from './alert';
import userReducer from './userReducers';
import profileReducer from './profileReducer';


export default combineReducers({
    alert,
    auth: userReducer,
    profile : profileReducer
});