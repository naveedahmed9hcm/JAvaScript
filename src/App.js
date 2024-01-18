import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Organization from "./component/Organization"
import Department from './component/Department';
import Designation from './component/Designation';
import Role from './component/Role';
import Project from './component/Project';
import Team from './component/Team';
import Login from './component/Login';
import Signup from './component/Signup';
import Signupsnd from './component/Signupsnd';
import Pricing from './component/Pricing';
import Payment from './component/Payment';
import SubOrganization from './component/SubOrganization';
import Orgchart from './component/Orgchart';


function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Login/>}></Route>
   <Route path='Signup' element={<Signup/>}></Route>
   <Route path='Signupsnd' element={<Signupsnd/>}></Route>
   <Route path='Pricing' element={<Pricing/>}></Route>
   <Route path='Payment' element={<Payment/>}></Route>
   <Route path='Organization' element={<Organization/>}></Route>
   <Route path='SubOrganization' element={<SubOrganization/>}></Route>
   <Route path='Department' element={<Department/>}></Route>
   <Route path='Designation' element={<Designation/>}></Route>
   <Route path='Role' element={<Role/>}></Route>
   <Route path='Project' element={<Project/>}></Route>
   <Route path='Team' element={<Team/>}></Route>
   <Route path='Orgchart' element={<Orgchart/>}></Route>
  
   
   </Routes>
   </BrowserRouter>
 </>

  );
}

export default App;
