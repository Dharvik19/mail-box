import React,{useRef} from "react";
import { Container } from "react-bootstrap";
import JoditEditor from 'jodit-react'
import 'react-quill/dist/quill.snow.css';
import { useDispatch,useSelector } from 'react-redux';
import { mailActions } from "../../Store/mail-slice";
import { addExpenseFetching } from "../../Store/mail-actions";
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

const emailId = localStorage.getItem('email');
const regex = /[.@]/g;
const email = emailId.replace(regex, '');
const Home=()=>{
   const totalMails =  useSelector((state)=>state.mail.totalMails)
   const mails = useSelector((state)=>state.mail.mails);
    const toRef = useRef('');
    const titleRef = useRef('');
    const contentRef = useRef('');
   const isVisible = useSelector((state)=>state.ui.isVisible)
    const dispatch = useDispatch();
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
        console.log(email);
      dispatch(mailActions.addMail(emailContent));
    }
    
    
    return(
        <Container style={{backgroundColor:"grey", height:"100vh"}}>
            <h3>Emails</h3>
        <Container style={{height:"auto",width:"700px",margin:"20px",position:'absolute',right:"0",bottom:"0",padding:"10px 20px",zIndex:"3000"}}>
           {isVisible && <form onSubmit={onSubmit}>
                <label>to:</label>
                <input type="text" ref={toRef}></input>
                <label>title:</label>
                <input type="text" ref={titleRef}></input>
                <textarea ref={contentRef}></textarea>
                <button type='submit'>Send</button>
            </form>}
            </Container>
            <ul style={{backgroundColor:"red",padding:"0",height:"90%",overflowY:"scroll"}}>
        {mails.map((item) => (
          <EmailList
            key={item.id}
            item={{
                id: item.id,
                to: item.to,
                title: item.title
            }}
          />
        ))}
      </ul>

        </Container>
    )
}

export default Home;