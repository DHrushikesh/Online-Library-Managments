import {configureStore } from "@reduxjs/toolkit"
import booksdetails from "./BookSlice"

const appstore = configureStore({
    reducer : {
        books : booksdetails,
    }
})

export default appstore