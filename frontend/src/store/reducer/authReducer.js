import { createSlice } from "@reduxjs/toolkit";

const initialUserData = localStorage.getItem('user');
const initialToken = localStorage.getItem('token');
const initialAdminData = localStorage.getItem('admin-token');

const initialState = {
    currentUser: initialUserData ? JSON.parse(initialUserData) : [],
    token: initialToken ? JSON.parse(initialToken) : "",
    currentAdmin: initialAdminData ? JSON.parse(initialAdminData) : [],
    isLoggedIn: initialUserData ? true : false,
    isAdminLoggedIn: initialAdminData ? true : false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        }, 
        logout(state, action) {
            state.currentUser = action.payload;
            state.isLoggedIn = false;
        },
        updateUser(state, action) {
            state.currentUser = action.payload;
        },
        updateAdmin(state, action) {
            state.currentAdmin = action.payload;
        },
        adminLogin(state, action) {
            state.currentAdmin = action.payload;
            state.isAdminLoggedIn = true;
        }, 
        adminLogout(state, action) {
            state.currentAdmin = action.payload;
            state.isAdminLoggedIn = false;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;