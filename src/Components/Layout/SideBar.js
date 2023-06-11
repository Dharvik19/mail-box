import React from 'react';
import { uiActions } from '../../Store/ui-slice';
import { useDispatch } from 'react-redux';
const SideBar =()=>{

    const dispatch = useDispatch();
    const toggleCompose = ()=>{
        dispatch(uiActions.toggle())
    } 
 return(
    <>
    <h2>
        This is side bar
    </h2>
    <button onClick={toggleCompose}> Compose </button>
    </>
 )
}
export default SideBar;