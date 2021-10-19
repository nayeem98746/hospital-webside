import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';
import useFirebase from '../../../hooks/Usefirebase';
import './Login.css'

const Login = () => {
    const { singInUsingGoogle} = useAuth()
    const {handleChangeRegister} = useFirebase()


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e =>{
        setPassword(e.target.value)
    }


    const handleRegistion = e => {
        handleChangeRegister(email,password)
        e.preventDefault()
    }


    return (
        <div className="login-from">
           <div>
               <form onSubmit={handleRegistion}>
                   <h2>Please Login</h2>
                   <label htmlFor="email">Email:</label>
                   <input 
                   type="email" 
                   onBlur={handleEmail}
                    id=""
                    required
                     placeholder="Your Email"/>
                   <br /><br />
                   <label htmlFor="password">Password:</label>
                   <input
                    type="Password"
                    onBlur={handlePassword}
                    name=""
                    id="" 
                    required
                    placeholder="password"/>
                   <br /><br />
                   <input onClick={handleRegistion} type="submit" value="Submit" />
               </form>
               <p>new to Patient ? <Link to="/register">Create Account</Link></p>
            <div>------------or---------------</div>
            <button 
            onClick={singInUsingGoogle} className="btn-warning rounded p-2"> Google Sing In</button>
           </div>
        </div>
    );
};

export default Login;