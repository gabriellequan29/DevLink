import { combineReducers } from 'redux';
import userReducer from './userReducers';
import profileReducer from './profileReducer';
import postReducer from './postReducer';


export default combineReducers({
    auth: userReducer,
    profile : profileReducer,
    post: postReducer
});

