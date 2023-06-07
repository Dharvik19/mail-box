import React,{useRef} from 'react';
import { Container } from 'react-bootstrap';
import classes from './SignUp.module.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/auth-slice';
const Login = ()=>{
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdrzN5DgBRldj4DMvfhhRmBm-giTbQDxs';
    const submitHandler = async (event)=>{
       event.preventDefault();
       const  enteredEmail = emailRef.current.value;
       const enteredPassword = passwordRef.current.value;
       
       const response = await fetch(url,{
        method : "POST",
        body: JSON.stringify({
            email : enteredEmail,
            password : enteredPassword,
            returSecureToken: true
        }),
        headers : {
            'Content-Type': 'application/json'    
        }

       })
       const transformedResponse = await response.json();

       if(response.ok){
        navigate('/home')
        dispatch(authActions.login({token:transformedResponse.idToken, email:transformedResponse.email}))
        console.log(transformedResponse);
        console.log(transformedResponse.email);
        console.log(transformedResponse.idToken);
       }else{
        let errorMessage = 'Authentication Failed!';
                if (transformedResponse.error.message) {
                    errorMessage = transformedResponse.error.message;
                }
                throw new Error(errorMessage);
       }
        
    }
    return(
        <Container >
            <div className={classes.signUpBox}>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label>Email</label>
                <input type='email' ref={emailRef}></input>
                <label>password</label>
                <input type='password'ref={passwordRef}></input>
                
                <button className={classes.button} type='submit'>Submit</button>
            </form>
            </div>
        </Container>
    )
}

export default Login;
