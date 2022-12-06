import { createSlice } from "@reduxjs/toolkit";

export type ShowsList = {
    [key: string]: number;
};

export type ShowsListType = {
    showsList: Partial<ShowsList>
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
