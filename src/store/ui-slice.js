import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLoggedIn: false,
        lang: 'uk'
    },
    reducers: {
        logInOut(st){
            st.isLoggedIn = !st.isLoggedIn
            console.log('Working on: ' + st.isLoggedIn)
        },
        setLang(st, act) {
            st.lang = act.payload
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice