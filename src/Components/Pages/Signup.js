import React,{useRef} from 'react';
import { Container } from 'react-bootstrap';
import classes from './SignUp.module.css'
import { NavLink } from 'react-router-dom';
const Signup = ()=>{
    

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confoimPasswordRef = useRef('');
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdrzN5DgBRldj4DMvfhhRmBm-giTbQDxs';
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
            <h2>SignUp</h2>
            <form onSubmit={submitHandler}>
                <label>Email</label>
                <input type='email' ref={emailRef}></input>
                <label>password</label>
                <input type='password'ref={passwordRef}></input>
                <label>Confirm Password</label>
                <input type='password'ref={confoimPasswordRef}></input>
                <button className={classes.button} type='submit'>Submit</button>
                <NavLink className={classes.NavLink} to='/login'>Already have an account? login</NavLink>
            </form>
            </div>
        </Container>
    )
}

export default Signup;
