import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
    name:'mail',
    initialState: {
        mails:[],
        totalMails: 0,
        changed:false,
    },
    reducers:{
        replaceMailList(state, action){
            state.mails = action.payload.mails;
            state.totalMails = action.payload.totalMails;
        },
        addMail: (state, action) => {
            const newEmail = action.payload;
            state.mails.push({
                id:newEmail.id,
                to: newEmail.to,
                title: newEmail.title,
                content: newEmail.content,
                read: newEmail.read
            })
           state.totalMails++;
           state.changed = true;
          },
          removeEmail:(state,action)=>{
            const id = action.payload;
            state.mails = state.mails.filter((item)=>item.id!== id);
            state.totalMails--;
            state.changed = true;
          },
          readMails:(state,action)=>{
            state.totalMails--;
            state.mails.read= true;
          }
        
    }
})
 
export const mailActions = mailSlice.actions;
export default mailSlice.reducer;