import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : "hello",
    status: '',
    error: '',
}


const AuthReducer = createSlice({
    name: 'AuthReducer',
    initialState,
    reducers: {
        getUserDataFromAsyncStorage: (state, action)=>{
            state.userData = action.payload
            console.log('getUserDataFromAsyncReducer is working')
        },
        removeUserDataFromAsyncStorage: (state, action)=>{
            state.userData = {}
        },
    }
})

export const {getUserDataFromAsyncStorage, removeUserDataFromAsyncStorage} = AuthReducer.actions
export default AuthReducer.reducer