import { createSlice } from "@reduxjs/toolkit";

const initState = {
    profileData: {
        isAuth: false
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        setLogin: (state, action) => {
            const { payload } = action;
            state.profileData = {
                ...payload,
                isAuth: true
            }

        },
        setLogout: (state, action) => {
            state.profileData = {
                isAuth: false
            }

        },

    }


})
