import { createSlice } from "@reduxjs/toolkit";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebase.init";

export type TodoItemType = {
    key:number;
};

type ShowsListType = {
    showsList: any;
};

const initialState: ShowsListType = {
    showsList : {},
};

const showsListReducer = createSlice({
    name: "showsListReducer",
    initialState,
    reducers: {
        retrieveShows: (state, action) => {
            state.showsList = action.payload
        },
    },
});

export const { retrieveShows } = showsListReducer.actions;
export default showsListReducer.reducer;
