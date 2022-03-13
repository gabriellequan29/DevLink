import { combineReducers } from 'redux';
import alert from './alert';
import userReducer from './userReducers';


export default combineReducers({
    alert,
    auth: userReducer
});