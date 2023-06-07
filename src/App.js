import React,{useEffect} from 'react';
import { Route,Routes } from 'react-router-dom';
import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Header from './Components/Layout/header';
import { SendMailData,FetchMailData } from './Store/mail-actions';
import { useSelector,useDispatch } from 'react-redux';
let isInitial =true;
function App() {
  const mails = useSelector((state)=>state.mail.mails);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(FetchMailData());
  },[dispatch]);
  useEffect(()=>{
    if(isInitial){
      isInitial = false;
      return;
    }
    dispatch(SendMailData(mails))
  },[mails, dispatch]);
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Signup></Signup>}>  </Route>
      <Route  path='/login' element={<Login/>}></Route>
      <Route  path='/home' element={<Home/>}></Route>
    </Routes>
    </>
    );
}

export default App;
