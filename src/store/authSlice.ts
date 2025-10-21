import { createSlice } from '@reduxjs/toolkit'
import {AuthApi} from "../utilities/Api/AuthApi.ts";

const initialState = {
    loading: false,
    user_id: "",
    token: "",
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth/login',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
            AuthApi.pending,
            (state)=>{
            state.loading = true
            })
            .addCase(
                AuthApi.fulfilled,
                (state, action) => {
                    state.loading = false
                    state.user_id = action.payload.user_id
                    state.token = action.payload.token
                    state.isAuthenticated = true
                }
            )
            .addCase(
                AuthApi.rejected,
                (state) => {
                    state.loading = false
                    state.isAuthenticated = false
                }
            )
    }
})

export default authSlice.reducer
