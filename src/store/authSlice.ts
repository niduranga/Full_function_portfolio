import { createSlice } from '@reduxjs/toolkit'
import {AuthApi} from "../utilities/Api/AuthApi.ts";

interface IAdmin {
    loading: boolean,
    username: string,
    userEmail: string,
    user_id: string,
    token: string,
    isAuthenticated: boolean
}

interface IAdminPayload {
    status: number
    user_name: string,
    user_email: string,
    user_id: string,
    token: string
}

const initialState: IAdmin = {
    loading: false,
    username: "",
    userEmail: "",
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
                    const payload = action.payload
                    setPayloadFroReduxStore(state, payload)
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

const setPayloadFroReduxStore = (state:IAdmin, payload:IAdminPayload) => {
    console.log(payload)
    if (payload) {
        state.loading = false
        state.isAuthenticated = true
        state.username = payload.user_name
        state.userEmail = payload.user_email
        state.user_id = payload.user_id
        state.token = payload.token;
    }
}
export default authSlice.reducer
