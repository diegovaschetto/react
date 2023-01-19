import { createSlice } from "@reduxjs/toolkit";
import { getDBWatchigData } from "../firebase/firebase.db";

export type ShowsList = {
    [key: string]: number;
};

export interface WatchingTrend {
    [key: string]: ShowsList;
}

export type ShowsListType = {
    showsList: Partial<ShowsList>;
    watching: { [key: string]: number };
    watchingTrend: WatchingTrend;
};

const initialState: ShowsListType = {
    showsList: {},
    watching: (await getDBWatchigData(true)) || {},
    watchingTrend: (await getDBWatchigData(false)) || {},
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
        },
        watchingTrend: (state, action) => {
            state.watchingTrend = action.payload;
        },
    },
});

export const { retrieveShows, watchingShows, watchingTrend } = showsListReducer.actions;
export default showsListReducer.reducer;
