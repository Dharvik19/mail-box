import React, { useEffect, useState } from "react"; 
import EmailList from './EmailList';
import { useDispatch,useSelector } from 'react-redux';
import { Container } from "react-bootstrap";
const Inbox = ()=>{
    const mails = useSelector((state)=>state.mail.mails);
    const emailId = localStorage.getItem('email');
const regex = /[.@]/g;
const email = emailId.replace(regex, '');
    const [data, setData] =useState([])
    useEffect(()=>{
        async  function  fetchData(){
              const response = await fetch(`https://mailboxclient-7e135-default-rtdb.firebaseio.com/mails/${email}.json`);
              if(!response.ok){
                  throw new Error("cant fetch")
              }
      
              const data = await response.json();
              // data.filter((item)=> item.id === id)
              console.log(data.mails) ;            
              setData(data.mails);
          }   
         let interval =  setInterval(() => {
            fetchData();
          }, 2000);
          return () =>{
            clearInterval(interval);
          }
      },[])
    return (
        <Container>
            <h2>
                Inbox
            </h2>
            {/* need to create a seperate array for inbox in firebase and fetch it  */}
            {data?.map((item) => (
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
        </Container>
    )
}

export default Inbox;