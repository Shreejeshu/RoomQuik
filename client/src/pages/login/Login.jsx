import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import "./login.css";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });    

    const {user, loading, error, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e)=>{    
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value })); //using previous value
        //set the password = password.value //creating variable password and setting values 
    }
                                   
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"}); //updating loading state
        try{
            const res = await axios.post("/auth/login", credentials);
            console.log(res.data, "type", typeof res.data);
            dispatch({type:"LOGIN_SUCCESS", payload: res.data.details })
            alert("Login success")
            navigate("/");
        }
        catch(err){
            dispatch({type:"LOGIN_FAILURE", payload:err.response.details});
            alert("Login failed")
        }
    } 

    console.log("logged in");

    return (
        <div className="login" >
          <div className="lContainer" id="ss">
          <br /> 
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="lInput"/>
            
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className="lInput"
            />
            <button disabled={loading} onClick={handleClick} className="lButton">
              Login 
            </button>
            <p className='text-white'>Click here to</p> <a className='mb-5' href="http://localhost:3000/register">Register</a>
            {error && <span>{error.message}</span>}
            <a id='dd' href="http://localhost:3007/login">Admin Login</a>
          </div>
          <div>
  
        </div>
        </div>

        
      );
    };

export default Login;
