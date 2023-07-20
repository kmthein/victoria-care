import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedDoctor: {
        name: "",
        specialty: "",
        schedule: [],
    }
}

const appointSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        makeAppointment(state, action) {
            state.selectedDoctor = action.payload;
        },
        cancelAppointment(state, action) {
            state.selectedDoctor = action.payload;
        }
    }
})

export const appointActions = appointSlice.actions;
export default appointSlice.reducer;