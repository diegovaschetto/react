import { createSlice } from "@reduxjs/toolkit";

export type TodoItemType = {
    key: number;
};

type ShowsListType = {
    showsList: any;
};

const initialState: ShowsListType = {
    showsList: {},
};

const showsListReducer = createSlice({
    name: "showsListReducer",
    initialState,
    reducers: {
        retrieveShows: (state, action) => {
            state.showsList = action.payload;
        },
    },
});

export const { retrieveShows } = showsListReducer.actions;
export default showsListReducer.reducer;
