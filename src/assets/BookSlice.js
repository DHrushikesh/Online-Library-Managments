import { createSlice } from "@reduxjs/toolkit";
import BookData from "./BookData";

const bookslice = createSlice({
        name : "Books",
        initialState:{
            items : BookData,
        },
        reducers:
            {
                AddBook:(state,action)=>{
                    state.items.push(action.payload)
                }
            }
})

export const {AddBook} = bookslice.actions;
export default bookslice.reducer