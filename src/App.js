import React,{useEffect} from 'react';
import './App.css'
import { Route,Routes } from 'react-router-dom';
import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Header from './Components/Layout/header';
import SideBar from './Components/Layout/SideBar';
import { sendmaildata,getmaildata } from './Store/mail-actions';
import { useSelector,useDispatch } from 'react-redux';
import EmailDetails from './Components/Pages/EmailDetails';
import Inbox from './Components/Pages/Inbox';
import useHttp from './hooks/use-http';
let isInitial = true;
function App() {
  const mails = useSelector((state)=>state.mail);
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  const dispatch = useDispatch();
 
  const emailId = localStorage.getItem('email');
  const regex = /[.@]/g;
  const email = emailId.replace(regex, '');

  const sendRequest = useHttp();

  useEffect(()=>{
    sendRequest({method: "get", url: `https://mailboxclient-7e135-default-rtdb.firebaseio.com/mails/${email}.json`})
    console.log("using custom hook to get data")
  },[]);

  // useEffect(()=>{
  //   dispatch(getmaildata())
  // },[dispatch])
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (mails.changed) {
     dispatch(sendmaildata(mails))
    sendRequest({method:"Put", url: `https://mailboxclient-7e135-default-rtdb.firebaseio.com/mails/${email}.json`,allMails: mails})

    }
  }, [mails]);
  // console.log(mails);
  return (
    <>
    <Header/>
    <div className='mainContainer'> 
    <div className='sideBar'>
    {<SideBar />}
    </div>
    <div className='rightSection'>
    <Routes>
      <Route exact path='/' element={<Signup></Signup>}>  </Route>
      <Route  path='/login' element={<Login/>}></Route>
      <Route  path='/home' element={<Home/>}></Route>
      <Route path='/home/:id' element={<EmailDetails/>}></Route>
      <Route path='/inbox' element={<Inbox/>}></Route>
    </Routes>
    </div>
    
    </div>
    
    </>
    );
}

export default App;
