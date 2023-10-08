import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import  './register.css'


    const Registerr = () => {
        const [creden, setCreden] = useState({
            username: undefined,
            email:undefined,
            password: undefined,
        });     

        const navigate = useNavigate();

        const handleChange = (e)=>{    
            setCreden(prev=>({...prev, [e.target.id]: e.target.value })); //using previous value
            //set the password = password.value //creating variable password and setting values 
        }



        const handleClick = async (e) => {
            e.preventDefault();
            // dispatch({type:"LOGIN_START"}); //updating loading state
            try{
                const res = await axios.post("/auth/register", creden);
                console.log(res.data, "type", typeof res.data);
                // dispatch({type:"LOGIN_SUCCESS", payload: res.data.details })
                alert("register successful")
                navigate("/login");
            }
            catch(err){
                // dispatch({type:"LOGIN_FAILURE", payload:err.response.details});
                alert("register failed")
            }
        } 
    
  return (
 
    <div className="register">
    <div className="lConta" id='ss'>
      <input
        type="text"
        placeholder="username"
        id="username"
        onChange={handleChange}
        className="lInput"
      />
      <br /> <br />
       <input
        type="text"
        placeholder="Email"
        id="email"
        onChange={handleChange}
        className="lInput"
      />
      <br /> <br />
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={handleChange}
        className="lInput"
      />
      <br /> <br />
      <button onClick={handleClick} className="lButton">
        register
      </button>

      <h6 className='text-white'> Already have an account?</h6> <a  href="http://localhost:3000/login">Login</a>
     
    </div>
  </div>
  )
}

export default Registerr