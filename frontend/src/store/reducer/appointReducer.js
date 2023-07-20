import { createSlice } from "@reduxjs/toolkit";

const initialSelectDoctor = {
    name: "",
    specialty: "",
    schedule: [],
}

const initialState = {
    selectedDoctor: initialSelectDoctor
}

const appointSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        makeAppointment(state, action) {
            state.selectedDoctor = action.payload;
        },
        cancelAppointment(state, action) {
            state.selectedDoctor = initialSelectDoctor;
        },
        updateSpecialty(state, action) {
            state.selectedDoctor = {...state.selectedDoctor, specialty: action.payload}
        }
    }
})

export const appointActions = appointSlice.actions;
export default appointSlice.reducer;