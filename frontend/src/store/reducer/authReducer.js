import { createSlice } from "@reduxjs/toolkit";

const initialUserData = localStorage.getItem('token');

const initialState = {
    currentUser: initialUserData ? JSON.parse(initialUserData) : [],
    isLoggedIn: initialUserData ? true : false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        }, 
        logout(state, action) {
            state.currentUser = action.payload;
            state.isLoggedIn = false;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;