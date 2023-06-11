import React from "react";
import { mailActions } from "../../Store/mail-slice";
import { useSelector,useDispatch } from "react-redux";
import classes from './EmailList.module.css'
const EmailList = (props)=>{

    const dispatch = useDispatch();

    const {title,to,id} = props.item
    const deleteHandler=()=>{
        dispatch(mailActions.removeEmail(id))
    }
    return(
        <div>
            <li className={classes.container}>
                <h4>{to}</h4>
                <p>{title}</p>
                <button onClick={deleteHandler}>Delete</button>
            </li>
        </div>
    )
}

export default EmailList;