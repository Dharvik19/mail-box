import React,{useRef,useState} from "react";
import { Container } from "react-bootstrap";
import JoditEditor from 'jodit-react'
import 'react-quill/dist/quill.snow.css';
import { useDispatch,useSelector } from 'react-redux';
import { mailActions } from "../../Store/mail-slice";
const Home =()=>{
    const dispatch = useDispatch();
    const mails = useSelector((state)=>state.mail.mails);
    const editorRef = useRef(null);
    const [content, setContent] = useState('');
    const [to, setTo] = useState('')
    const [title, setTitile] = useState('')
    const [mail, setMail] =useState(false);
    const mailToggle = () =>{
        setMail((prevState)=> prevState = !prevState);
    }
    const toChangeHandler=(e)=>{
        setTo(e.target.value);
    }
    const titleChangeHandler=(e)=>{
        setTitile(e.target.value);
    }
    const onChangeHandler = (newContent) => {
        setContent(newContent);
        console.log(content);
    }

    const onSubmit=()=>{
        const email ={
           to: to,
           title: title,
           content: content
        }
        dispatch(mailActions.addMail(email));
        console.log(mails);
    }
    return(
        <Container>
        <h2>Home Page</h2>
        <button onClick={mailToggle}>Compose</button>
       {mail && <Container>
            <div>
                <h2>to</h2>
                <input type = 'text' onChange={toChangeHandler}/>
            </div>
            <div>
            <h2>to</h2>
                <input type = 'text'  onChange={titleChangeHandler}/>
            </div>
        <JoditEditor
                ref={editorRef}
                value={content}
                tabIndex={1} 
                onBlur={newContent => setContent(newContent)} 
                onChange={onChangeHandler}
            />
            <button onClick={onSubmit}>Send Email</button>
        </Container>}
        </Container>

        
        
    )
}

export default Home;