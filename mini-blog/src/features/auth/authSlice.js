import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    email: null,
    userRole: "guest"
}

const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers:{
        login(state, action){
            state.isAuth = true
            state.email = action.payload.email
            state.userRole = action.payload.role
        },

        logout(state, action){
            state.isAuth = false
            state.email = null
            state.userRole = "guest"
        }
    }
})

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;