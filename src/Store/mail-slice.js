import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mails:[]
}

const mailSlice = createSlice({
    name:'mail',
    initialState: initialState,
    reducers:{
        addMail(state,action){
            const newMail = action.payload;
            state.mails.push({...newMail})
            
        },
    }
})

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;