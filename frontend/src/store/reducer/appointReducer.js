import { createSlice } from "@reduxjs/toolkit";

const initialSelectDoctor = {
    name: "",
    specialty: "",
    schedule: [],
    schedule_days: [],
    doctor_fees: ""
}

const initialAppoint = {
    name: "",
    email: "",
    doctor: "",
    specialty: "",
    date: "",
    time: "",
    contact_no: "",
    prev_record: "",
    description: ""
}

const initialPayment = {
    amount: "",
    date: "",
    time: "",
    patient_id: "",
    patient_name: ""
}

const initialState = {
    selectedDoctor: initialSelectDoctor,
    currentAppoint: initialAppoint,
    paymentData: initialPayment
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
        },
        updateScheduleDay(state, action) {
            state.selectedDoctor = {...state.selectedDoctor, schedule_days: action.payload}
        },
        confirmAppointment(state, action) {
            state.currentAppoint = action.payload;
        },
        deleteAppointment(state, action) {
            state.currentAppoint = initialAppoint;
        },
        confirmPayment(state, action) {
            state.paymentData = action.payload;
        }
    }
})

export const appointActions = appointSlice.actions;
export default appointSlice.reducer;