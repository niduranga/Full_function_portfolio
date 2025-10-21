import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface ILoginInfo {
    loginInfo: object
}
export const AuthApi = createAsyncThunk(
    'auth/logi',
    async ({loginInfo}: ILoginInfo) => {
        return axios.get('/sanctum/csrf-cookie').then(
            async () => {
                try {
                    const response = await axios.post('/api/login', loginInfo)
                    if (response.status === 200) {
                        return response.data
                    }
                }
                catch (error) {
                    console.log(error)
                }
            }
        )
})
