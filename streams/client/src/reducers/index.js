import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //renamed as formReducer
import authReducer from './authReducers';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer,
});