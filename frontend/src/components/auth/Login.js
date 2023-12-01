import React, {  useState } from 'react'
import classes from './Auth.module.css'
import {PiUserCircleThin} from 'react-icons/pi'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import {FcGoogle} from 'react-icons/fc'
import {IoLogoFacebook} from 'react-icons/io'
const LoginPage = () => {


  const[enteredEmail,setenteredEmail]=useState('admin@gmail.com')
  const[enteredPassword,setenteredPassword]=useState('Admin@123')
  const[hasError,sethasError]=useState(false);
  const[isTouched,setisTouched]=useState(false)
  
const validDataHandler=()=>{
if(enteredEmail.length<=0 || enteredPassword.length<=0 ){
  console.log("ndjjbfd")
  sethasError(true);
  return;  
}
}
    const emailChangeHandler=(e)=>{
      
    setenteredEmail(e.target.value)
    setisTouched(true)
    }
    const passwordChangeHandler=(e)=>{
      
      setenteredPassword(e.target.value)
      setisTouched(true)
      }
    const emailBlurHandler=()=>{
      setisTouched(true)
    }
    const PasswordBlurHandler=()=>{
      setisTouched(true);
     
    }

    const validEmail=(enteredEmail)=>{
      if(enteredEmail.length<=0){
        return false;
       
      }
      return(enteredEmail.includes('@') &&enteredEmail.includes('.com'))
    }
    const validPassword=(enteredPassword)=>{
      return(enteredPassword.length<5? false:true)
    }

    let validForm = false;
  if (validEmail(enteredEmail) && validPassword(enteredPassword)) { // Call the functions
    validForm = true;
   
  }
  const formSubmitHandler=(e)=>{
e.preventDefault();
if(!validForm){
    sethasError(true);
    return;
}
  }

  return (
    <section className={classes.container}>
    <div  className={classes.SignupBox}>
    <div className={classes.signupheading}><span><PiUserCircleThin style={{fontSize:'3rem',marginTop:10,color: '#7367F0'}}/></span> <span>User Login</span></div>
    <form className={classes.credentialBox} onSubmit={formSubmitHandler}>
       
            <div className={classes.inputFields}>
            <span className={classes.inputtitle}>email</span>
            <input
            placeholder='Email'
            value={enteredEmail}
            className={classes.inputBox}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            />
              { isTouched && !validEmail(enteredEmail) && <p style={{color:'red'}}>Enter valid email</p>}
            </div>

            <div className={classes.inputFields}>
            <span className={classes.inputtitle}>Password</span>
            <input
            className={classes.inputBox}
            placeholder='Password'
            value={enteredPassword}
            type='password'
            onChange={passwordChangeHandler}
            onBlur={PasswordBlurHandler}
            />
            { isTouched && !validPassword(enteredPassword) && <p style={{color:'red'}}>password length can't be less than 5</p>}
            </div>
            { hasError &&  <p style={{color:'red'}}>Enter valid credentials</p>}
            <button className={classes.submitBtn} onClick={validDataHandler} disabled={hasError} ><Link to="/dashboard" style={{color:'white',textDecoration:'none'}}>Login </Link></button>
            <p  style={{color:'white'}}>Or</p>
              
    <div className={classes.signupOtions}>
<button className={classes.signupBtn} disabled={!validForm} ><FcGoogle style={{fontSize:30}} />Google</button>
<button  className={classes.signupBtn} disabled={!validForm}><IoLogoFacebook  style={{fontSize:30,color:'blue'}}/>Facebook</button>
    </div>
            
    </form>
    <div>

    <p style={{color:'white',marginTop:40,textAlign:'center'}}>New user ? <span > <Link to="/signup" style={{color:'green'}}>Signup now</Link></span></p>
    </div>
    </div>
    </section>
  )
}

export default LoginPage