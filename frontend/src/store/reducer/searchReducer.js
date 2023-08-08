import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    specialities: [],
    doctors: [],
    searchDoctor: [],
    searchSpecialty: [],
    filterBySpecialty : []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        allSpecialties(state, action) {
            state.specialities = action.payload;
        },
        searchBySpecialName(state, action) {
            state.searchSpecialty = action.payload;
        },
        filterBySpecialty(state, action) {
            state.filterBySpecialty = action.payload;
        },
        searchByDoctorName(state, action) {
            state.searchDoctor = action.payload;
        }
    }
})

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;