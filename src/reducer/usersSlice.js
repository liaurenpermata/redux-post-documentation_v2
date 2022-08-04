import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name:'Dude Hehehe'},
    {id:'1', name:'Dude Hihihi'},
    {id:'2', name:'Dude Hohoho'}
]

const usersSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer