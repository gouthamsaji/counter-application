import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    // actions
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0
        },
        changeRange:(state,action)=>{
            state.value+=action.payload
        }
    }
})

// actions needed for component
export const {increment,decrement,reset,changeRange} = counterSlice.actions

// reducer needed to update store
export default counterSlice.reducer