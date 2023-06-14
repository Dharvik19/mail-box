import React, { useState } from "react";
import { mailActions } from "../../Store/mail-slice";
import { useSelector,useDispatch } from "react-redux";
import classes from './EmailList.module.css'
import { NavLink } from "react-router-dom";
import EmailDetails from "./EmailDetails";
import {AiFillDelete} from 'react-icons/ai'
const EmailList = (props)=>{

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const toggleHandler=()=>{
        setShow((prevState)=> prevState = !prevState);
    }
    const {title,to,id,content} = props.item
    const deleteHandler=()=>{
        dispatch(mailActions.removeEmail(id))
    }
    return(
        <div style = {{position: 'relative'}}> 
            <li className={classes.container}>
                {/* <h4 onClick={toggleHandler}>{to}</h4> */}
                {<h4><NavLink to={`/home/${id}`}>{to}</NavLink></h4>}
                <h4>{title}</h4>
                <button id={classes.deleteButton}onClick={deleteHandler}><AiFillDelete/></button>
                {/* <div className={classes.content}>
                    {content}
                </div> */}
            </li>
            
               {show && <EmailDetails email = {props.item}/>}
            
        </div>
    )
}

export default EmailList;