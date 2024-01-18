import React,  { useState } from 'react';
import { fetchData, postData } from '../HttpService/HttpService'
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {


  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


    const [emailid, setEmailid] = useState ([])
    const [password, setPassword] = useState ([])
  
    const handleInputEmail = (event) => {
      setEmailid(event.target.value)
  }
  
    const handleInputPassword= (event) => {
    setPassword(event.target.value)
  }
  
    const handlePostData = async (e) => {
    //   e.preventDefault();
    // if (!emailid.trim() || !password.trim() ) {
    //     alert('Please fill in all required fields.');
    //     return;
    // }

      var data = {
        // username: "",
        // passwords: ""
        'username': emailid,
        'passwords':  password,
      }
    
       try {
         const result = await postData("/token", data)
         console.log(result)
       } catch (error) {
         console.error('Error', error);
       }
       navigate('/Organization');
    //    alert("Submitted")
     }

     const navigate = useNavigate();
  return (
    <div className='container-fluid'>
    <div className="row">
    <div className=" col-md-6 col">
      <div className='logined'>
      <img src='/images/signlogo.png'/>
      <h2>Sign In</h2>
      <p>Fill Your Information And Start Your Bussiness <br/>  With Us </p>

      <label htmlFor="input1">Email</label>
                <input type="text" className="form-control" id='username' onChange={handleInputEmail} required/>

      <label htmlFor="input1">Password</label>
                {/* <input type="password" className="form-control" id='passwords' onChange={handleInputPassword} required/> */}

                <input
        type={showPassword ? 'text' : 'password'}
        className="form-control"
        id="passwords"
        onChange={handleInputPassword}
        required
        
      />

      <label>
        <input
          type="checkbox"
          onChange={handleTogglePasswordVisibility}
        />
       
      </label>

                <button className='Tbtn' onClick= { handlePostData} style={{textDecoration: 'none', color: '#fff'}} type='submit'>Next</button>
        <div className='logp'>
            <p> Already have an Account? <Link to="/Signup"> Sign Up </Link> </p>
        </div>           
      </div>
    
    </div>
    <div className="col-md-6 col">
        <div className='loginimg'>
    < img src='/images/image blur.png' />
    <div className='logimg2'>
    <img src='/images/Vectors.png' style={{ width: '50px', height: '50px' }} />
    <p> Your time is limited, so don't waste it living someone <br/> else's life.  Don't be trapped by dogma </p>
    </div>
        <div>

        </div>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Login;
