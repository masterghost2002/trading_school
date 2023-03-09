import { createSlice, configureStore } from "@reduxjs/toolkit";
const navSlice = createSlice({
    name:"navcolor",
    initialState:{color:"white"},
    reducers:{
        setNavColor(state, actions){
            state.color = actions.payload
        }
    }
});
export const navAction = navSlice.actions;
export const store = configureStore({
    reducer: navSlice.reducer
})