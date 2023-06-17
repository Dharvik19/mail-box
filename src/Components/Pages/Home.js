import React,{useEffect, useRef,useState} from "react";
import { Container } from "react-bootstrap";
import JoditEditor from 'jodit-react'
import 'react-quill/dist/quill.snow.css';
import { useDispatch,useSelector } from 'react-redux';
import { mailActions } from "../../Store/mail-slice";
import {AiOutlineArrowRight} from 'react-icons/ai'
import classes from './Home.module.css'
import EmailList  from './EmailList';
// const Home =()=>{
//     const dispatch = useDispatch();
//     const mails = useSelector((state)=>state.mail.mails);
//     const isVisible = useSelector((state)=>state.ui.isVisible)
//     const editorRef = useRef(null);
//     const [content, setContent] = useState('');
//     const [to, setTo] = useState('')
//     const [title, setTitile] = useState(''  )
    
    
//     const toChangeHandler=(e)=>{
//         setTo(e.target.value);
//     }
//     const titleChangeHandler=(e)=>{
//         setTitile(e.target.value);
//     }
//     const onChangeHandler = (e) => {
//         // setContent(newContent);
//         // console.log(content);
//         setContent(e.target.value);
//     }

//     const onSubmit=()=>{
//         // const email ={
//         //    to: to,
//         //    title: title,
//         //    content: content
//         // }
//         dispatch(mailActions.addMail({to, title, content}));
//         console.log(mails);
//     }
//     return(
//         <Container style={{backgroundColor:"red",margin:"0 15%",width:"1200px"}}>
//         <h2>Home Page</h2>
//        {isVisible && <Container >
//             <div>
//                 <h2>to</h2>
//                 <input type = 'text' onChange={toChangeHandler}/>
//             </div>
//             <div>
//             <h2>to</h2>
//                 <input type = 'text'  onChange={titleChangeHandler}/>
//             </div>
//         {/* <JoditEditor
//                 ref={editorRef}
//                 value={content}
//                 tabIndex={1} 
//                 onBlur={newContent => setContent(newContent)} 
//                 onChange={onChangeHandler}
//             /> */}  
//             <textarea onChange={onChangeHandler} rows="4" cols="50"></textarea>
//             <button onClick={onSubmit}>Send Email</button>
//         </Container>}

//         {mails.map((item)=>{
//             <div>{item.to}</div>
//         })}
//         </Container>

        
        
//     )
// }

// const emailId = localStorage.getItem('email');
// const regex = /[.@]/g;
// const email = emailId.replace(regex, '');
// const Home=()=>{
//    const totalMails =  useSelector((state)=>state.mail.totalMails)
//    const mails = useSelector((state)=>state.mail.mails);
//     const toRef = useRef('');
//     const titleRef = useRef('');
//     const contentRef = useRef('');
//    const isVisible = useSelector((state)=>state.ui.isVisible)
//     const dispatch = useDispatch();
//     const [search,setSearch] = useState('');
//     const onSubmit =(e)=>{
//       e.preventDefault();
//       if(toRef.current.value==="" || titleRef.current.value===""|| contentRef.current.value===""){
//        window.alert("please fill all fileds")
//        return;
//       }
//        const emailContent={
//            id: Math.random().toString(36),
//            to: toRef.current.value,
//            title: titleRef.current.value,
//            content: contentRef.current.value
//        }
//        console.log(emailContent);
//      dispatch(mailActions.addMail(emailContent));
//    }

//     console.log(mails);
//     return(
//         <Container style={{position:"relative",padding:"0 5px", height:"100%"}}>
//             <h2 style={{marginTop:"2rem"}}>Emails</h2>
//             {isVisible && <Container style={{width:"700px"}} className={classes.composeMail} >
//            <form onSubmit={onSubmit}>
//                 <label>to:</label>
//                 <input type="text" ref={toRef}></input>
//                 <label>title:</label>
//                 <input type="text" ref={titleRef}></input>
//                 <label>Body:</label>
//                 <textarea ref={contentRef}></textarea>
//                 <div className={classes.button}>
//                 <button type='submit'>Send </button>
//                 <AiOutlineArrowRight style={{position:"absolute",right:"6%"}}/>
//                 </div>
//             </form>
//             </Container>}
//            {totalMails===0  &&  <h3 style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}>No emails to show!</h3>}
//             <ul className={classes.listContainer}style={{height:"80%",overflowY:"scroll"}}>
//         {mails.map((item) => (
//           <EmailList
//             key={item.id}
//             item={{
//                 id: item.id,
//                 to: item.to,
//                 title: item.title,
//                 content:item.content
//             }}
//           />
//         ))}
        
//       </ul>

//         </Container>
//     )
// }

// export default Home;


// const emailId = localStorage.getItem('email');
// const regex = /[.@]/g;
// const email = emailId.replace(regex, '');
const Home=()=>{
   const totalMails =  useSelector((state)=>state.mail.totalMails)
   const mails = useSelector((state)=>state.mail.mails);
    const toRef = useRef('');
    const titleRef = useRef('');
    const contentRef = useRef('');
   const isVisible = useSelector((state)=>state.ui.isVisible)
    const dispatch = useDispatch();
    const [search,setSearch] = useState('');
    const onSubmit =(e)=>{
      e.preventDefault();
      if(toRef.current.value==="" || titleRef.current.value===""|| contentRef.current.value===""){
       window.alert("please fill all fileds")
       return;
      }
       const emailContent={
           id: Math.random().toString(36),
           to: toRef.current.value,
           title: titleRef.current.value,
           content: contentRef.current.value
       }
       console.log(emailContent);
     dispatch(mailActions.addMail(emailContent));
   }
    
    
    return(
        <Container style={{padding:"0 5px", height:"100%"}}>
            <h2 style={{marginTop:"2rem"}}>Emails</h2>
            {isVisible && <Container style={{width:"700px"}} className={classes.composeMail} >
           <form onSubmit={onSubmit}>
                <label>to:</label>
                <input type="text" ref={toRef}></input>
                <label>title:</label>
                <input type="text" ref={titleRef}></input>
                <label>Body:</label>
                <textarea ref={contentRef}></textarea>
                <div className={classes.button}>
                <button type='submit'>Send </button>
                <AiOutlineArrowRight style={{position:"absolute",right:"6%"}}/>
                </div>
            </form>
            </Container>}
            <ul className={classes.listContainer}style={{height:"80%",overflowY:"scroll"}}>
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
        
      </ul>
{Number(totalMails)}
        </Container>
    )
}

export default Home;