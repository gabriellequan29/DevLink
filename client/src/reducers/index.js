import { combineReducers } from 'redux';
import alert from './alert';
import userReducer from './userReducers';
import profileReducer from './profileReducer';
import postReducer from './postReducer';


export default combineReducers({
    alert,
    auth: userReducer,
    profile : profileReducer,
    post: postReducer
});

