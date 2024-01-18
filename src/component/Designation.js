import React,  { useState, useEffect } from 'react';
import { fetchData, postData } from '../HttpService/HttpService';
import axios from 'axios';
import "../css/style.css";

import { Link, useNavigate } from "react-router-dom";

function Designation() {
    
    const [mydatas, setMydata] = useState([]);
    const [Dependonid, getDependon] = useState([]);
    const [depend, setDepend] = useState ([]);
    

    const [departmentid, setDepartmentid] = useState ([])
    const [designation, setDesignation] = useState ([])
    const [Createon, setCreateon] = useState ([])
    const [purpose, setPurpose] = useState ([])
    const [type, setType] = useState ([])

    const handleDeparSelect = (event) => {
        setDepartmentid(event.target.value)
        getApiDepend(event.target.value)
    }

    const handleInputDesi = (event) => {
        setDesignation(event.target.value)
    }

    const handleInputCreat = (event) => {
        setCreateon(event.target.value)
    }

    const handleInputPurp = (event) => {
        setPurpose(event.target.value)
    }

    const handleInputtype = (event) => {
        setType(event.target.value)
    }

    const handleInputdepend = (event) => {
        getDependon(event.target.value)
    }

    const handlePostData = async (e) => {
        e.preventDefault();
        if (!isString(purpose) || !isString(type) || !Createon || !departmentid || !designation || !Dependonid) {
           
            alert('Please fill in all required fields.');
            return;
        }

       var data = {
            'departmentid':departmentid,
            'designation': designation,
            'createdon': Createon,
            'createdpurpose': purpose,
            'designationtype': type,
            'dependon': Dependonid,
            'organisationid': sessionStorage.getItem("organisationid"),
            'organisationid': sessionStorage.getItem("organisationid"),
        }

        function isString(value) {
            return typeof value === 'string' || value instanceof String;
        }
        
        try {
          const result = await postData("/Designation/Createdesignation", data)
          console.log(result)
        } catch (error) {
          console.error('Error', error);
        }
        navigate('/Role')
        // alert("Submitted")
      }

        // Get Integration Department
      const getApidata = async() => {
      const res = await axios.get("http://localhost:5247/api/Designation/GetAllDepartment");
          setMydata(res.data.Response)
    }

        // Integration Get DependOn
        const getApiDepend = async(deparmentid) => {  
            const res = await axios.get("http://localhost:5247/api/EmployeeInformation/GetDesignation?departmentid="+ deparmentid +""); 
            setDepend(res.data.Response) 
        } 

      console.log(mydatas);
        useEffect(() => {
          getApidata();
        }, []);

    const [isMenuOpen, setMenuOpen]  = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate();
    // Dark mode Code
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    }

    return (  
        <div className={`${darkMode ? 'dark-theme' : 'light-theme'}`}>
    <div className='form-data' style={{ display: 'flex', }}>

    <div className='sidebar'>

{/* <img src="/images/signlogo.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} /> */}

{/* <div className="imgic">
<a href='#'> <img src="/images/Asset provisionary.svg " onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Attendences.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Health safety and well being.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/HR analytics & reporting.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/legal compliance.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Onboarding & offboarding.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/payroll.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Performance Mangament.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Recruitment.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/training & learning.svg" onClick={toggleMenu} /> </a>

<div className='imgic2'>
<img src="/images/Ellipse 47.png" onClick={toggleMenu}/>
</div>
 </div> */}
 

{/* <div id='sidemenu'  style={{
  width:  '220px',
  display: isMenuOpen ? 'none' : 'block',
}}
> */}

<div style={{display: 'flex', marginTop: '25px'}}>
<img src="/images/Layer 1.png" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: '0', width: '80.677px', height: '35px', marginLeft: '20px'}} />
{/* <img src="/images/Bar.png" style={{width: '24px', height: '24px', marginLeft:'125px'}} /> */}
</div>
<div className='sidelinddde'>
  <h2 style={{fontSize: '20px', color: '#626C83', marginLeft: '50px'}}>Saas</h2>
  <Link to="/Organization">    Organization </Link> 
  <Link to="/SubOrganization">  Sub Organization</Link>
  <Link to="/Department">  Department</Link> 
  <Link to="/Designation">  Designation</Link>
  <Link to="/Role">    Roles</Link> 
  <Link to="/Orgchart">   Org Chart</Link>
 </div>
   
    </div>
                <div className='Acc-from'>
                    <div className='navbar11'>
                        {/* <input type='checkbox' id='chk1' />
                        <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search' />
                                </form>
                        </div> */}
                        <ul>

                        {/* <i className="fa fa-bell-o" aria-hidden="true"></i> */}
                  
                        <div className='text'>     
                          <label className="switchh">
                          <input type="checkbox" onClick={toggleDarkMode} />
                      <span className="sliders"></span>
                                 </label>
                        </div>
                        <div className='text2'>
                           <p className='pra'> Welcome </p>
                           <p className='para'> Heydim (Admin) </p>
                        </div>

                        <div className='text3'>
                            <img src="/images/Ellipse 47.png" />
                        </div>
                        </ul>                   
                        <div className='menu'>
                            <label htmlFor="chk1">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </div>
                 </div>

                 <div className='Cover' style={{ padding: '10px', height: '85vh'}}>
                    <h2> Designation </h2>
                    <div className='Covermid'>
<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Department</label>
            <select className='sect' onChange={handleDeparSelect}>
            { mydatas.map( (Mdata) => (
            <option key={ Mdata.deparmentid} value={Mdata.deparmentid}>
                 <p>{Mdata.depname} </p>
                 </option>
        ))
        }
        </select>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Designation</label>
                <input type="text" className="form-control" onChange={handleInputDesi} id='designation' required/>
            </div> 
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Created On</label>
                <input type="date" className="form-control" onChange={handleInputCreat} id='createdon' required/>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Created Purpose</label>
                <input type="text" className="form-control" onChange={handleInputPurp} id='createdpurpose' required/>
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Designation Type</label>
                <input type="text" className="form-control" onChange={handleInputtype}  id='designationtype' required/>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label className='labels'>Depend On</label>
                <select className='sect' onChange={handleInputdepend}> 
            { depend.map( (Ddata) => (
            <option key={ Ddata.DesignationId} value={Ddata.DesignationId}>
               <p>{Ddata.designationname} </p>
               </option>
      ))
      } 
       </select> 
            </div>
        </div>

    </div>
</div>
<button onClick={ handlePostData} type='submit' className='Tbtn'>Save</button>  

</div>
</div>                    
                </div>
            </div>
         
        </div>
    )
}
export default Designation;