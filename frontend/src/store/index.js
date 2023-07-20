import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import searchReducer from './reducer/searchReducer';
import appointReducer from './reducer/appointReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        search: searchReducer,
        appoint: appointReducer
    }
})

export default store;