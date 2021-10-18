import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';
import useFirebase from '../../../hooks/Usefirebase';
import './Login.css'

const Login = () => {
    const { singInUsingGoogle} = useAuth()
    const {handleRegister} = useFirebase()


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = e =>{
        setPassword(e.target.value)
    }





    return (
        <div className="login-from">
           <div>
               <form onSubmit="">
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
                   <input onClick={handleRegister} type="submit" value="Submit" />
               </form>
               <p>new to Patient ? <Link to="/register">Create Account</Link></p>
            <div>------------or---------------</div>
            <button 
            onClick={singInUsingGoogle} className="btn-warning"> Google Sing In</button>
           </div>
        </div>
    );
};

export default Login;