import React from "react"; 
import EmailList from './EmailList';
import { useDispatch,useSelector } from 'react-redux';
const Inbox = ()=>{
    const mails = useSelector((state)=>state.mail.mails);
    return (
        <>
            <h2>
                Inbox
            </h2>
            {/* need to create a seperate array for inbox in firebase and fetch it  */}
            {mails?.map((item) => (
          <EmailList
            key={item.id}
            item={{
                id: item.id,
                to: item.to,
                title: item.title,
                content:item.content
            }}
          />
        ))}
        </>
    )
}

export default Inbox;