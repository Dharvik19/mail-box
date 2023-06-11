import { mailActions } from "./mail-slice";

const emailId = localStorage.getItem('email');
const regex = /[.@]/g;
const email = emailId.replace(regex, '');


export const sendmaildata=(mail)=>{
    return async(dispatch)=>{
        const sendRequest= async()=>{
            const response = await fetch("https://mailboxclient-7e135-default-rtdb.firebaseio.com/mails.json",{
                method:"PUT",
                body: JSON.stringify(
                    {
                        mails:mail.mails
                    }
                ),
                headers : {
                    'Content-Type': 'application/json'    
                }
            })
            const data = await response.json();
            if(!response.ok){
                throw new Error("failed")
            }
        }
        try{
            await sendRequest();
        }catch(error){
            console.log(error);
        }
    }
}

export const getmaildata =()=>{
    return async(dispatch)=>{
        const fetchData= async ()=>{
            const response = await fetch("https://mailboxclient-7e135-default-rtdb.firebaseio.com/mails.json");
            if(!response.ok){
                throw new Error("cant fetch")
            }

            const data = await response.json();

            return data;
        }
        try{
                const rData = await fetchData();

                console.log(rData);
              dispatch(mailActions.replaceMailList({
                mails: rData.mails
            }));  
        }catch(error){
            console.log(error);
        }
    }   
}