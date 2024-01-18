import React,  { useState, useEffect } from 'react';
import { fetchData, postData } from '../HttpService/HttpService';
import axios from "axios";
import { Menu } from "antd";
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";

function Project() {

    const [mydatas, setMydata] = useState([]);

    const [departmentid, setDepartmentid] = useState ([])
    const [project, setProject] = useState ([])
    const [start, setStart] = useState ([])
    const [end, setEnd] = useState ([])
    const [budget, setBudget] = useState ([])
    const [descrip, setDescrip] = useState ([])
    const [status, setStatus] = useState ([])

    const handleProjectSelect = (event) => {
        setDepartmentid(event.target.value)
    }

    const handleInputproject = (event) => {
        setProject(event.target.value)
    }

    const handleInputStart = (event) => {
        setStart(event.target.value)
    }

    const handleInputEnd = (event) => {
        setEnd(event.target.value)
    }

    const handleInputBudget = (event) => {
        setBudget(event.target.value)
    }

    const handleInputDescri = (event) => {
        setDescrip(event.target.value)
    }

    const handleInputStatus = (event) => {
        setStatus(event.target.value)
    }

      const handlePostData = async (event) => {
      
        var data ={
            'departmentid': departmentid,
            'projectname': project,
            'startdate': start,
            'enddate': end,
            'budget': budget, 
            'description': descrip,
            'projectstatus': status 
        }

        try {
          const result = await postData( "/Project/CreateProject", data);
          console.log(result);
        } catch (error) {
          console.error('Error posting data:', error);
        }
        // alert("Submitted")
      };

      // Get Integration 

      const getApidata = async() => {
      const res = await axios.get("http://localhost:5247/api/Project/GetAllDepartment");
          setMydata(res.data.Response)
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
    // Dark Mode Code
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    }
    return (
        <div className={`${darkMode ? 'dark-theme' : 'light-theme'}`}>
   <div className='form-data' style={{ display: 'flex', }}>

 <div className='sidebar'>

<img src="/images/signlogo.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div className="imgic">
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

</div>
<div>

<div id='sidemenu'  style={{
  width:  '220px',
  display: isMenuOpen ? 'none' : 'block',
}}
>
<h2>Saas</h2>
<div style={{display: 'flex', }}>
<img src="/images/Layer 1.png" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: '0', width: '60.677px', height: '35px'}} />
<img src="/images/Bar.png" style={{width: '24px', height: '24px', marginLeft:'125px'}}  onClick={toggleMenu}/>
</div>
<div className='sideline'>
<Menu 
onChange={(e) => window.location.href = e.target.value}
mode="inline"
items={[
    {
        label: "Organization",
        key: "Organization", 
        children: [
            {
                label: (
            <Link to="/Organization">
             Create Organization
            </Link>
          ),
          value: "/",
        },
            {
                label: (
            <Link to="/Department">
             Department
            </Link>
          ),
          value: "/Department",
        },
    {
        label: (
            <Link to="/Designation">
            Designation
            </Link>
          ),
          value: "/Designation",
          },
    {
            label: (
                <Link to="/Project">
                Project
                </Link>
              ),
              value: "/Project",
        },
    {
        label: (
            <Link to="/Role">
              User Roles
            </Link>
          ),
          value: "/Role",
        },
          {
              label: (
            <Link to="/Team">
             Teams
            </Link>          
    ),
    value: "/Team",
},
{
    label: (
        <Link to="/Orgchart">
         Organization Chart
        </Link>
      ),
      value: "/Orgchart",
    }, ], },
  ]}
  className='labelside'
  >
</Menu>
<ul>


</ul> </div> </div> </div> </div>
                <div className='Acc-from'>
                    <div className='navbar11'>
                        <input type='checkbox' name='' id='chk1' />
                        <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search' />
                                </form>
                        </div>
                        <ul>

                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                  
                        <div className='text'>     
                          <label className="switchh">
                          <input type="checkbox"  onClick={toggleDarkMode} />
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
                    <h2> Project  </h2>
                    <div className='Covermid'>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Department</label>
            <select className='sect' onChange={handleProjectSelect}>
            { mydatas.map( (Mdata) => (
            <option key={ Mdata.deparmentid} value={Mdata.deparmentid}> <p>{Mdata.depname} </p></option>
        ))
        }
        </select>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Project Name</label>
                <input type="text" className="form-control" onChange={handleInputproject} id='projectname' 
                 />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Start Date</label>
                <input type="date" className="form-control" onChange={handleInputStart} id='startdate'
                  />
            </div>
        </div> 

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">End Date</label>
                <input type="date" className="form-control" onChange={handleInputEnd} id='enddate' 
                 />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">   
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Budget</label>
                <input type="number" className="form-control" onChange={handleInputBudget} id='budget'
                  />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Description</label>
                <input type="text" className="form-control" onChange={handleInputDescri} id='description'
                 />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">   
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Project Status</label>
                <input type="text" className="form-control" onChange={handleInputStatus} id='projectstatus'
                  />
            </div>
        </div>

    </div>
</div>
<button onClick={() => { handlePostData(); navigate("/Role"); }} type='submit' className='Tbtn'>Save</button>
</div>
</div>
     </div>
</div>
        </div>
    )
}
export default Project;









