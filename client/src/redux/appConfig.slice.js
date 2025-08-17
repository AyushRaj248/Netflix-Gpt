import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: "appConfig",
    initialState: {
        Language: "en",
        isDark: true,
        isLoggedIn: false,
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.Language = action.payload
        },
        changeTheme: (state) => {
            state.isDark = !state.isDark
        },
        changeUserStatus: (state) => {
            state.isLoggedIn = !isLoggedIn
        }
    },
});

export const { changeLanguage, changeTheme, changeUserStatus } = appConfigSlice.actions;

export default appConfigSlice.reducer;
