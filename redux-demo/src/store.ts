import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./redux/counter/counter.slice";
import todosReducer from "./redux/todos/todo.slice"

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        todos : todosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
