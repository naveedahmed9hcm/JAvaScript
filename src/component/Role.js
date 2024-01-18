import React,  { useState, useEffect } from 'react';
import { fetchData, postData } from '../HttpService/HttpService'
import { Menu } from "antd";
import  {buttonsIcon} from '../SVGImages';
import axios from 'axios';
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";

function Role() {

    const [mydatas, setMydata] = useState([]);

    const [designate, setDesignate] = useState ([])
    const [role, setRole] = useState ([])
    const [Response, setReponse] = useState ([])
    const [active, setActive] = useState ([])

    const handleDesigSelect = (event) => {
      setDesignate(event.target.value)
    }

    const handleInputRole = (event) => {
      setRole(event.target.value)
  }

    const handleInputRespon = (event) => {
      setReponse(event.target.value)
  }

    const handleInputActive = (event) => {
      setActive(event.target.value)
  }
      const handlePostData = async (event) => {
         
        var data ={
          'Designationid': designate,
          'roles': role,
          'responsibility': Response ,
          'activity': active,
          'organisationid': sessionStorage.getItem("organisationid"),
          'organisationid': sessionStorage.getItem("organisationid"),
      }
    
        try {
          const result = await postData("/RoleResponsibilities/CreateRole",data);
          console.log(result);

        } catch (error) {
          console.error('Error posting data:', error);
        }
    
      };

      // Get Integration
      
      const getApidata = async() => {
        const res = await axios.get("http://localhost:5247/api/RoleInformation/GetAllDesginaion");
            setMydata(res.data.Response)
        } 
        console.log(mydatas);
          useEffect(() => {
            getApidata();
          }, []);

  // const [isMenuOpen, setMenuOpen]  = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };
    const navigate = useNavigate();
    // Dark Mode Color
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    }
    return (
        <div className={`${darkMode ? 'dark-theme' : 'light-theme'}`}>

   <div className='form-data' style={{ display: 'flex', }}>

 <div className='sidebar'>
<div>

<div style={{display: 'flex', marginTop: '25px'}}>
<img src="/images/Layer 1.png" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: '0', width: '80.677px', height: '35px', marginLeft: '20px'}} />
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
     </div>

                <div className='Acc-from'>
                    <div className='navbar11'>
                        {/* <input type='checkbox' name='' id='chk1' />
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
                    <h2> Role & Responsibilities </h2>
                    <div className='Covermid'>
<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
            <label className='labels'>Designation</label>
           
            <select className='sect' onChange={handleDesigSelect}>
            { mydatas.map( (Ddata) => (
            <option key={ Ddata.Designationid} value={Ddata.Designationid}> {Ddata.DesignationName} </option>
        ))
        }
        </select>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Role</label>
             
                <input type="text" className="form-control" onChange={handleInputRole} id='roles'/>
            </div>  
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Responsibility</label>
             
                <input type="text" className="form-control" onChange={handleInputRespon} id='responsibility'
                 />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Activity</label>
            
                <input type="text" className="form-control" onChange={handleInputActive} id='activity' />
            </div>
        </div>
    </div>
</div>
<button onClick={() => { handlePostData(); navigate("/Orgchart"); }} type='submit' className='Tbtns'>Save</button>
</div>
</div>

     </div>
</div>
        </div>
    )
}
export default Role;