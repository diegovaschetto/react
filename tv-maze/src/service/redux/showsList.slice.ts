import { createSlice } from "@reduxjs/toolkit";

export type ShowsList = {
    [key: string]: number;
};

export type ShowsListType = {
    showsList: Partial<ShowsList>;
    watching: { [key: string]: number };
};

const initialState: ShowsListType = {
    showsList: {},
    watching: JSON.parse(localStorage.getItem("watching")!) || {},
};

const showsListReducer = createSlice({
    name: "showsListReducer",
    initialState,
    reducers: {
        retrieveShows: (state, action) => {
            state.showsList = action.payload;
        },
        watchingShows: (state, action) => {
            state.watching = action.payload;
            localStorage.setItem("watching", JSON.stringify(action.payload));
        },
    },
});

export const { retrieveShows, watchingShows } = showsListReducer.actions;
export default showsListReducer.reducer;
