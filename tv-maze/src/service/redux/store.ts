import { configureStore } from "@reduxjs/toolkit";

import showsListSlice from "./showsList.slice";

export const store = configureStore({
    reducer: {
        showsListReducer: showsListSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
