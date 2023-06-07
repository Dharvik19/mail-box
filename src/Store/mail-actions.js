import { mailActions } from "./mail-slice";

const emailId = localStorage.getItem('email');
const regex = /[.@]/g;
const email = emailId.replace(regex, '');

export const FetchMailData =() =>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response = await fetch(`https://mailboxclient-7e135-default-rtdb.firebaseio.com/MailData/${email}.json`)
            if(!response.ok){
                throw new Error("getting failed ")
            }
            const data = await response.json();
            return data;
        }
        try{
          const userMails = await  fetchData();
          console.log(userMails);
        }catch(error){

        }
    }
}
export const SendMailData = (MailData) => {
    return async() => {
        const postMailDetails = async() => {
            const response = await fetch(`https://mailboxclient-7e135-default-rtdb.firebaseio.com/MailData/${email}.json`,{
                method:"PUT",
                body:JSON.stringify(MailData)
            });

            if(!response.ok){
                throw new Error('Posting data is failed');
            }
        }
        try{
            await postMailDetails();
        }catch(err){
            console.log(err.message);
        }
    }
}