import React,  { useState } from 'react';
import "../css/style.css";
import Select from 'react-select';
import ReactFlagsSelect from "react-flags-select";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  // const [selected, setSelected] = useState("");

  const [organisationname, setOrganizationName] = useState('');
  const [country, setCountry] = useState('');
  const [noofemployees, setEmployeeCount] = useState('');

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if (!organisationname.trim()  || !noofemployees) {
      alert('Please fill in all required fields.');
      return;
    }
   
    sessionStorage.setItem('OrganizationName', organisationname)
    sessionStorage.setItem('Country', country)
    sessionStorage.setItem('EmployeeCount', noofemployees)
    
    navigate('/Signupsnd');
    console.log("session", sessionStorage);
  };

  const employeeOptions = [
    { value: '', label: 'Select' },
    { value: '1-5', label: '1-5' },
    { value: '6-20', label: '6-20' },
    { value: '21-50', label: '21-50' },
    { value: '50+', label: '50+' },
  ];

  return (
    <div className='container-fluid'> 
    <div className="row">
    <div className="col-md-6 ">
      <div className='logined'>
      <img src='/images/signlogo.png'/>
      <h2>Sign Up</h2>
      <p>Fill Your Information And Start Your Bussiness <br/>  With Us </p>

      <label htmlFor="input1">Organization Name</label>
                <input type="text" className="form-control" id='organisationname' placeholder='9 HCM' style={{height: "35px"}}  value={organisationname}
        onChange={(e) => setOrganizationName(e.target.value)}/>

      <label htmlFor="noofemployees" style={{ marginTop: '10px' }}>Number Of Employee</label> <br />
            <Select
              className='dropsign'
              id='noofemployees'
              value={employeeOptions.find(option => option.value === noofemployees)}
              onChange={(selectedOption) => setEmployeeCount(selectedOption.value)}
              options={employeeOptions}
            /> 

    <label htmlFor="input1" style={{marginTop: '15px'}}>Country</label>
    <ReactFlagsSelect
        selected={country}
        searchable
        onSelect={(code) => setCountry(code)}
        placeholder="Select Country"
        searchPlaceholder="Search countries"
        className="menu-flags"
        id='zipcode' 
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ width: '200px', height: '40px' }}
      />

    <button className='Tbtn'  onClick={handleNextButtonClick} style={{textDecoration: 'none', color: '#fff'}} type='submit'>Next</button>
        <div className='logp'>
            <p> Already have an Account? <Link to="/"> Sign In </Link> </p>
        </div>           
      </div>
    
    </div>
    <div className="col-md-6">
        <div className='loginimg'>
    < img src='/images/image blur.png'/>
    <div className='logimg2'>
    <img src='/images/Vectors.png' style={{ width: '50px', height: '50px' }} />
    <p>Your time is limited, so don't waste it living someone <br/> else's life.  Don't be trapped by dogma</p>
    </div>
        <div>

        </div>
    </div>
    </div>
  </div>
    </div>
  )
}
export default Signup;