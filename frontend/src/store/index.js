import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import searchReducer from './reducer/searchReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        search: searchReducer
    }
})

export default store;