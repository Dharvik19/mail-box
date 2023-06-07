import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token')
const email = localStorage.getItem('email')

const initialState = {
    token: token,
    email: email,
    isLoggedIn: !!token
}
const authSlice = createSlice({
    name:'Auth',
    initialState: initialState,
    reducers:{
        login(state,action){
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.email = action.payload.email;
            localStorage.setItem('token',state.token);
            localStorage.setItem('email', state.email);
        },
        logout(state){
            state.isLoggedIn = false;
            localStorage.removeItem('token')
            localStorage.removeItem('email')
        }
    }
})
export const authActions = authSlice.actions;
export default authSlice.reducer;