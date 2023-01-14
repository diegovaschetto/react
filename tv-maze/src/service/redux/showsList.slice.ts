import { createSlice } from "@reduxjs/toolkit";

export type ShowsList = {
    [key: string]: number;
};

export type ShowsListType = {
    showsList: Partial<ShowsList>;
    watching: { [key: string]: number };
    watchingTrend: any;
};

const initialState: ShowsListType = {
    showsList: {},
    watching: JSON.parse(localStorage.getItem("watching")!) || {},
    watchingTrend: JSON.parse(localStorage.getItem("watchingTrend")!) || {},
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
        watchingTrend: (state, action) => {
            state.watchingTrend = action.payload;
            localStorage.setItem("watchingTrend", JSON.stringify(action.payload));
        },
    },
});

export const { retrieveShows, watchingShows, watchingTrend } = showsListReducer.actions;
export default showsListReducer.reducer;
