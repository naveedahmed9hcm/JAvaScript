import React,  { useState } from 'react';
import { fetchData, postData } from '../HttpService/HttpService'
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";

const Signupsnd = () => {

 const [showPassword, setShowPassword] = useState(false);
 
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

    const [person, setPerson] = useState ('')
    const [emailid, setEmailid] = useState ('')
    const [password, setPassword] = useState ('')
    const [number, setNumber] = useState ('')
    const [passwordError, setPasswordError] = useState('');
     const [emailError, setEmailError] = useState('');


     const [getid, setGetid] = useState([]);
    const handleInputPerson = (event) => {
        setPerson(event.target.value)
  }
  
  //   const handleInputEmail = (event) => {
  //     setEmailid(event.target.value)
  // }

    const handleInputEmail = (event) => {
    const enteredEmail = event.target.value;
    setEmailid(enteredEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (!emailRegex.test(enteredEmail)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };
  
  //   const handleInputPassword= (event) => {
  //   setPassword(event.target.value)
  // }

  const handleInputPassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  
    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  }

  const handleInputnumber= (event) => {
    setNumber(event.target.value)
  }
 
    const handlePostData = async (e) => {
      // e.preventDefault();
      // if (!person.trim() || !number || /^\s*$/.test(person)) {
      //     alert('Please fill in all required fields.');
      //     return;
      // }
      
  if (!emailid.trim() ) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

      var data = {
            'organisationname': sessionStorage.getItem("OrganizationName"),
            'country': sessionStorage.getItem("Country"),
            'noofemployees': sessionStorage.getItem("EmployeeCount"),
            'nameofowner': person,
            'email': emailid,
            'passwords': password,
            'phoneno': number
          }

          // sessionStorage.setItem('organizationid', organisationid)
          sessionStorage.setItem('nameofowner', person)
          sessionStorage.setItem('email', emailid)
          sessionStorage.setItem('phoneno', number)
          
          
    console.log("data", data);
       try {
         const result = await postData("/OrganisationInformation/CreateOrganisationInformation", data)
         
          sessionStorage.setItem('organisationid', result.Response.organisationid)
          console.warn(result.Response.organisationid)
         
        } catch (error) {
          console.error('Error', error);
        }
    
        navigate('/Pricing');
           alert("Submitted")
      }
     
  return (
    <div className='container-fluid'>
    <div className="row">
    <div className="col-md-6">
      <div className='logined'>
      <img src='/images/signlogo.png'/>
      <h2>Sign Up</h2>
      <p>Fill Your Information And Start Your Bussiness <br/>  With Us </p>

      <label htmlFor="input1">Contact Person</label> 
            <input type="text" className="form-control" id='nameofowner' placeholder='Ex, Ahmed Khaled' style={{height: "35px"}} onChange={handleInputPerson}  required/>

      <label htmlFor="input1" style={{marginTop: '10px'}}> Phone Number </label> 
      <input type="text" className="form-control" id='phoneno' placeholder='Ex, 123456789' style={{height: "35px"}} onChange={handleInputnumber} required/>

       <label htmlFor="input1"  style={{marginTop: '10px'}}>Email</label>
                <input type="text" className="form-control" id='email' placeholder='Ex, ahmed@khaled.com' style={{height: "35px"}} onChange={handleInputEmail} required/>
                {emailError && <p style={{ color: 'red', marginTop: '5px' }}>{emailError}</p>}
                <label htmlFor="input1"  style={{marginTop: '10px'}}>Password</label>
                {/* <input type="password" className="form-control" id='passwords' placeholder='********' style={{ height: "35px", borderColor: passwordError ? 'red' : '' }} onChange={handleInputPassword} required />
            <span style={{ fontSize: '12px', color: 'red' }}>{passwordError}</span> */}



<input
          type={showPassword ? 'text' : 'password'}
          className="form-control password-input"
          id="passwords"
          placeholder="********"
          style={{ height: "35px", position: 'relative', borderColor: passwordError ? 'red' : '' }}
          onChange={handleInputPassword}
          required
        />
        <span
        
          className={`show-password-icon ${showPassword ? 'active' : ''}`}
          onClick={handleTogglePasswordVisibility} style={{cursor: 'pointer', position: 'absolute', left: '73%', top: '81.5%' }}
        >
          👁️
        </span>
     





  {/* <input type="password" className="form-control" id='passwords' placeholder='********' style={{height: "35px"}} onChange={handleInputPassword} required/> */}
  {/* {passwordError && <p style={{ color: 'red', marginTop: '5px' }}>{passwordError}</p>} */}
              
                <div className="form-check" style={{display: 'flex', marginTop: '10px' , marginRight: '80px'}}>
  <input className="check" type="checkbox" style={{width: '15px',  }} />
  <label className="form-check-label" style={{marginLeft: '20px'}} for="flexCheckIndeterminate">
   I Agree & <span style={{color: 'blue'}}>Terms and Conditions</span> 
  </label>
</div>
        <button className='Tbtn' onClick={ handlePostData}  style={{textDecoration: 'none', color: '#fff'}} type='submit'>Sign Up</button>

    <div className='logbtn' style={{display: 'flex', marginTop: '10px', marginBottom: '100px'}}>
    <img src='/images/Googlee.png' style={{ width: '150px', height: '35px',  marginLeft: '125px', borderRadius: '5px' }}/>
    <img src='/images/Linkedin.png' style={{ width: '150px', height: '35px', marginLeft: '65px',  borderRadius: '5px' }}/>
        </div>       
        {/* <div className='logp'>
            <p> Already have an Account? <Link to="/"> Sign In </Link> </p>
        </div> */}
      </div>
    
    </div>
    <div className="col-md-6">
        <div className='loginimg'>
    < img src='/images/image blur.png' className='response'/>
    <div className='logimg2'>
    <img src='/images/Vectors.png' style={{ width: '50px', height: '50px' }} />
    <p>Your time is limited, so don't waste it living someone  <br/> else's life. Don't be trapped by dogma</p>
    </div>
        <div>

        </div>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Signupsnd;