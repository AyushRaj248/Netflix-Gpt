import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptPage: false,
        searchShows: []
    },
    reducers: {
        changeGptPageVisibilty: (state) => {
            state.showGptPage = !state.showGptPage
        },
        addSearchedShows: (state,action) => {
            state.searchShows= action.payload
        }
    },
});

export const { changeGptPageVisibilty,addSearchedShows } = gptSlice.actions;

export default gptSlice.reducer;
