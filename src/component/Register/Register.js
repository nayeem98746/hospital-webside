import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

const Register = () => {
    const {user, singInUsingGoogle} = useAuth()
    return (
        <div className="login-form">
            <div>
                <h2>Register:Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email"/><br /><br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an  account ? <Link to="/login">Login</Link></p>
                <div>------------or------------</div>
                <button onClick={singInUsingGoogle} className="btn-warning rounded p-2">  Google sign in</button>
            </div>
        </div>
    );
};

export default Register;