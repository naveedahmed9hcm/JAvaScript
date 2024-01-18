import React, { useState, useEffect } from 'react';
import "../css/style.css";
import styled from 'styled-components';
import axios from 'axios';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Link, useNavigate } from "react-router-dom";
import 'reactflow/dist/style.css';

const StyledNode = styled.div`
position: relative;
padding: 5px;
border-radius: 8px;
display: inline-block;
border: 1px solid black;
opacity: 1; 
transition: transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    // background-color: black;
    transition: width 0.5s ease-in-out;
  }
  
  &::before {
    top: 0;
    left: 0;
  }
  
  &::after {
    bottom: 0;
    right: 0;
  }
  
  &:hover {
    // background-color: #D9EDFF;
    transform: scale(1.1); 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    
    &::before,
    &::after {
      width: 100%;
    }
  }
`;

function Orgchart() {

  const [mydatas, setMydata] = useState('');
  const [member, setMember] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [person, setPerson] = useState('');
  const [organisationInformation, setOrganisationInformation] = useState({})
  const [getDesignation, setGetDesignation] = useState([])

  const [department, setDepartment] = useState('');
  let organisationid = sessionStorage.getItem("organisationid")
  // const GetCeoData = async () => {
  //   const res = await axios.get(`http://localhost:5247/api/OrganisationInformation/GetTopOrganisationMember?organisationid=${organisationid}`);   
  //   console.log(res.data);
  //   setPerson(res.data.Response)
  //   console.log(person);
  //   Object.values(person).map(data => console.log(data.nameofowner))
  // }
  // useEffect(() => {
  //   GetCeoData();
  // }, []);
 
  useEffect(() =>{const getOrganisation = async(organisationid) => {try {const getData = await axios.get(`http://localhost:5247/api/OrganisationInformation/GetTopOrganisationMember?organisationid=${organisationid}`); console.log(getData); setOrganisationInformation(...getData.data.Response);  console.log(organisationInformation) } catch (err) { console.error(err)}; setDepartment()}; getOrganisation(organisationid)}, [])

  useEffect(() =>{const getDesignations = async(organisationInformation) => {try {
    const getData = await axios.get(`http://localhost:5247/api/EmployeeInformation/GetDesignation?departmentid=${organisationInformation.departmentid}`); console.log(getData); setGetDesignation(getData.data.Response); 
    
    console.error(getDesignation) } catch (err) { console.error(err)}};
    organisationInformation.departmentid ? getDesignations(organisationInformation) : console.log("Err")
  }, [organisationInformation.departmentid])

  // useEffect(() =>{const getDepartment = async(organisationid) => {const getData = await axios.get(`http://localhost:5247/api/Designation/GetAllDepartment?organisationid=${organisationid}`); console.log(getData); setDepartment()}; getDepartment(organisationid)}, [])

  // Integration Get Top Members

  // const GetMemberData = async () => {
  //   const res = await axios.get('http://localhost:5247/api/OrganisationInformation/GetTopOrganisationMember?organisationid=4e0aa802-6697-4260-97dc-84e67aabc097');
  //   setMember(res.data.Response)
  // }

  // useEffect(() => {
  //   GetMemberData();
  // }, []);

  // INtegration Top Department

//   const [departmentData, setDepartmentData] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const departmentId = sessionStorage.getItem("departmentid");
//       const response = await axios.get(`http://localhost:5247/api/OrganisationInformation/GetAllEmployees?departmentid=${departmentId}`);
//       setDepartmentData(response.data);
//     } catch (error) {
//       console.error('Error fetching location data:', error);
//     }
//   };

//   fetchData();
// }, []);
//   // Integration Get Top Employee

//   const [departmentid, setDepartmentid] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log('department', departmentid);
//         const response = await axios.get(`http://localhost:5247/api/OrganisationInformation/GetAllEmployees?departmentid=${departmentid}`);
//         setDepartmentid(response.data);
//       } catch (error) {
//         console.error('Error fetching location data:', error);
//       }
//     };
//       fetchData();
//   }, [departmentid]);

//   // const handleAddressChange = (e) => {
//   //   setAddress(e.target.value);
//   // };

//   const GetEmployeeData = async (departmentid) => {
//     const res = await axios.get(`http://localhost:5247/api/OrganisationInformation/GetAllEmployees?departmentid=${departmentid}`);
//     setEmployee(res.data.Response)
//   }

  // useEffect(() => {
  //   GetEmployeeData();
  // }, []);
  

//   useEffect(() => {
//     let temp = sessionStorage.getItem("organisationid")
//     setPerson(temp)
//     // console.log(temp)
// }, [])


//   useEffect(() => {
//     let temp = sessionStorage.getItem("OrganizationName")
//     setPerson(temp)
//     // console.log(temp)
// }, [])

// useEffect(() => {
//   let tempd = sessionStorage.getItem("departmentid")
//   setDepartment(tempd)
//   // console.log(tempd)
// }, [])

  const [show, setShow] = useState(false);
  const [mangar, setManegar] = useState(false);
  const [ceo, setCeo] = useState(false)
  const [hr, setHr] = useState(false)

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
              
<div style={{display: 'flex', marginTop: '25px'}}>
<img src="/images/Layer 1.png" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: '0', width: '80.677px', height: '35px', marginLeft: '20px'}} />
</div>
<div className='sidelinddde'>
  <h2 style={{fontSize: '20px', color: '#626C83', marginLeft: '50px'}}>Saas</h2>
  <Link to="/Organization"> Organization </Link> 
  <Link to="/SubOrganization"> Sub Organization</Link>
  <Link to="/Department"> Department</Link> 
  <Link to="/Designation"> Designation</Link>
  <Link to="/Role"> Roles</Link> 
  <Link to="/Orgchart"> Org Chart</Link>
 </div>
                
                   </div>
        <div className='Acc-from'>
          <div className='navbar11'>
          
            <ul>
             
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
          <div className='Cover' style={{ padding: '10px' }}>
            <h2>Organization Chart</h2>
           
            <Tree
              lineWidth={'1px'}
              lineColor={'blue'}
              lineBorderRadius={'10px'}
              label={<StyledNode className="styleanimate"> <img src='/images/signlogo.png' style={{ cursor: 'pointer' }}  onClick={() => setShow(!show)} /> {organisationInformation &&  <div > <p style={{textTransform: "capitalize"}}>{organisationInformation.organisationname} </p> <p style={{textTransform: "capitalize"}}>{organisationInformation.nameofowner} </p> </div>} <br/> <div style={{ cursor: 'pointer'}} onClick={() => setShow(!show)}>
              </div> </StyledNode>}
            >
              <>{getDesignation ? Object.values(getDesignation).map((designations) => console.log(designations)) : null}</>
            
              <TreeNode label={<StyledNode className='styleanimate'>  {
                show ? <p style={{ cursor: 'pointer' }} onClick={() => setManegar(!mangar)}> <img src='/images/signlogo.png' />
                 {getDesignation && Object.values(getDesignation).map((Ddata) => (
                  <div > <p>{Ddata.designationname} </p> </div>
                ))} 
                </p> : null
              }
              </StyledNode>}>
                
                <TreeNode label={<StyledNode className='styleanimate'> {
                  mangar ? <p> <img src='/images/signlogo.png' /> {member.map((Ldata) => (
                    <option key={Ldata.TeamMemberid} value={Ldata.TeamMemberid}> <p>{Ldata.teammembername
                    } </p> </option>
                  ))
                  }  </p> : null
                }</StyledNode>}>
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    mangar ? <p> <img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    mangar ? <p><img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    mangar ? <p><img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                </TreeNode>
              </TreeNode>

              <TreeNode label={<StyledNode className='styleanimate'>{
                show ? <p style={{ cursor: 'pointer' }} onClick={() => setHr(!hr)}> <img src='/images/signlogo.png' />
                 {getDesignation && Object.values(getDesignation).map((Ddata) => (
                  <div > <p>{Ddata.designationname} </p> </div>
                ))} 
                </p> : null
              }
              </StyledNode>}>
                <TreeNode label={<StyledNode className='styleanimate'> {
                  hr ? <p> <img src='/images/signlogo.png' />  </p> : null
                }</StyledNode>}>

                  <TreeNode label={<StyledNode className='styleanimate'> {
                      hr ? <p> <img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    hr ? <p><img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    hr ? <p> <img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                </TreeNode>

              </TreeNode>
              <TreeNode label={<StyledNode className='styleanimate'>{
                show ? <p style={{ cursor: 'pointer' }} onClick={() => setCeo(!ceo)}> <img src='/images/signlogo.png' />
                 {getDesignation && Object.values(getDesignation).map((Ddata) => (
                  <div > <p>{Ddata.designationname} </p> </div>
                ))} 
                </p> : null
              }
              </StyledNode>}>
                <TreeNode label={<StyledNode className='styleanimate'> {
                  ceo ? <p> <img src='/images/signlogo.png' />  </p> : null
                }</StyledNode>}>
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    ceo ? <p> <img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    ceo ? <p> <img src='/images/signlogo.png' /></p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    ceo ? <p><img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                </TreeNode>
              </TreeNode>

            </Tree>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orgchart;