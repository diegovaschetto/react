import { createSlice } from "@reduxjs/toolkit"

export type CounterStateType = {
    value:number
}

const initialState:CounterStateType = {
    value:0
}

export const counterSlice = createSlice({name: "counter", initialState , reducers:{
    increment: (state)=>{
        state.value++
    },
    decrement: (state)=>{
        state.value--
    },
    reset: (state)=>{
        state= initialState
    }
}})

export const {increment,decrement,reset} = counterSlice.actions
export default counterSlice.reducer