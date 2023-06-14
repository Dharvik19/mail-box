import React, { useEffect, useState } from "react"
import { resolvePath, useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { NavLink } from "react-router-dom";
const EmailDetails =(props)=>{
const {id} = useParams();
const [data,setdata] = useState(undefined);
const mails = useSelector((state)=>state.mail.mails);
const [data2,setData2] = useState([]);
useEffect(()=>{
    setdata(props.email)
}
,[]);
// useEffect(()=>{
//     setData2(mails);
// })
let email=[];
useEffect(()=>{
  async  function  fetchData(){
        const response = await fetch("https://mailboxclient-7e135-default-rtdb.firebaseio.com/mails.json");
        if(!response.ok){
            throw new Error("cant fetch")
        }

        const data = await response.json();
        // data.filter((item)=> item.id === id)
        console.log(data.mails) ;            
        setData2(data.mails);
    }   
    fetchData();
},[])
// email.filter((item)=>{item.id === id})
// console.log(email);
    return(
        <Container style={{}}> 
            {data && <div>
            <h1>from: {props.email.to}</h1>
            <h3>title: {props.email.title}</h3>
            <h3>Body: {props.email.content}</h3>
            </div>
            }

<div>
      {data2?.filter((element)=>element.id === id).map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.to}</h2>
            <h2>{element.title}</h2>
            <h2>{element.content}</h2>
          </div>
        );
      })}
    </div>
        </Container>
        // <Container>
        //     {data2 ? <h2>{data}</h2> : <p>:pading</p>}
        // </Container>
    )
}
export default EmailDetails 