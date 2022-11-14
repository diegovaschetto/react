import { createSlice } from "@reduxjs/toolkit";

export type TodoItemType = {
    item : string, 
    check : boolean
}

type TodosListType = {
    todosList: TodoItemType[];
};

const initialState: TodosListType = {
    todosList: [],
};

const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.todosList.push(action.payload);
        },
        reset: (state) => {
            state.todosList.length = 0;
        },
        isCheck : (state, action) => {
            state.todosList[action.payload].check = !state.todosList[action.payload].check
        }
    },
});

export const { addItem , reset , isCheck } = todos.actions;
export default todos.reducer;
