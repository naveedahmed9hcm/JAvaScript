import axios from "axios"
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"


const Orgchart = () => {
    const [selectedNode, setSelectedNode] = useState(null);

    const handleNodeClick = (node) => {
      setSelectedNode(node);
    };
    const [organisationInformation, setOrganisationInformation] = useState([])
    // let organisationid = sessionStorage.getItem = organisationid
    let organisationid = "05bdb252-ed14-4e19-8129-bd4788046974"
    useEffect(() =>{const getOrganisation = async(organisationid) => {try {const getData = await axios.get(`http://localhost:5247/api/Department/GetDepartmentsDesignationsByOrganizationId?organizationId=${organisationid}`); setOrganisationInformation(getData.data.Response) } catch (err) { console.error(err)}}; getOrganisation(organisationid)}, [])

    const TreeNode = ({ node, onNodeClick }) => {
        const [isOpen, setIsOpen] = useState(false);
        const handleToggle = () => {
          setIsOpen(!isOpen);
          console.log(organisationInformation)
        } 
        return (
          <div className="mb-4 w-full flex flex-col capitalize items-center justify-center">
          <div  className="flex flex-col cursor-pointer space-x-2 " onClick={handleToggle}>
          <span className={`text-2xl p-2.5 rounded-full font-medium text-${isOpen ? 'blue' : 'black'}-500`}>
            {node.organizationname ? <div > <img src='/images/signlogo.png' className="w-16 h-16 p-2.5 bg-white ml-3" style={{borderRadius: '50%'}}/>  </div> : null}
            {node.organizationname || node.departmentname || node.departmentname || node.designationame }
            {node.departmentname || node.organizationname  ? <hr class="transform rotate-45  border-solid border-black"/>  : null } 
            </span> 
        </div>
          
        <div className="text-2xl items-center justify-center">
       {node.departments && isOpen && (
         <div className="ml-4 flex gap-4 h-6 w-6 space-y-2 justify-center">
            {Object.values(node.departments).map((department) => (<div> {console.log(department.departmentimage)}
        <img src='https://drive.google.com/file/d/1DpqbrD6zbeGKu4IksqOOMOZMpY0DIjy0/view?usp=drive_link' className="w-10 h-10 border p-2.5 bg-white" style={{borderRadius: '50%'}}/>
       <div className="flex flex-row items-center space-x-2">
           <TreeNode node={department} onNodeClick={onNodeClick}/></div></div>))}</div>)}
       </div>
     
        {node.designations && isOpen && (
          <ul className="ml-8 space-y-2 ">
             {Object.values(node.designations).map((designation) => (
              <li>
                <span className="text-black-500"> {designation.designationame}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
        )
      }
      const [darkMode, setDarkMode] = useState(false);
      const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
      }
      return (
        <div className={`${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className='form-data' style={{ display: 'flex'}}>
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
              <div>
        <div className=" w-full flex justify-center items-center space-y-2">
        <TreeNode node={organisationInformation} onNodeClick={handleNodeClick} />
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
    export default Orgchart;