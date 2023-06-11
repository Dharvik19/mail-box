import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
    name:'mail',
    initialState: {
        mails:[],
        totalMails:0,
        changed:false
    },
    reducers:{
        replaceMailList(state, action){
            state.mails = action.payload.mails;
        },
        addMail: (state, action) => {
            const newEmail = action.payload;
            state.mails.push({
                id:newEmail.id,
                to: newEmail.to,
                title: newEmail.title,
                content: newEmail.content
            })
           state.totalMails++;
           state.changed = true;
          },
          removeEmail:(state,action)=>{
            const id = action.payload;
            state.mails = state.mails.filter((item)=>item.id!== id);
            state.totalMails--;
            state.changed = true;
          }
        
    }
})

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;