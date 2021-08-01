import React from 'react';
import DashBoard from  './DashBoard'
import '../App.css';
import './MyStyles.css';
import { useHistory,Redirect } from 'react-router-dom';

 const UserProfile=()=>{
    let history=useHistory();
   let Fname= localStorage.getItem('firstname');
   let Lname= localStorage.getItem('lastname');
   let mail= localStorage.getItem('email');
   let mob= localStorage.getItem('mobile');
   const  handleSubmit=()=>{
      history.push('/edit');
   }
   const isLogged = sessionStorage.getItem('email');

   if (!isLogged) {
       return (
           <Redirect to='/' />
       )
   }
     return(
         <>
         <DashBoard />
         <div className='project' >
         <div >
            <div>
          <h2>Profile Information</h2>
         </div>
         <br/>
         <div>
            <label> Name  :</label> &nbsp; {Fname} {Lname}
         </div>
         <br/>
         <div>
            <label>  Personal Email  :</label> &nbsp; {mail}
         </div>
         <br/>
         <div>
            <label> Mobile No.:</label> &nbsp; {mob}
         </div>
         <br />
         <button style={{backgroundColor:'#87CEEB',color:'#ffff',borderRadius:8, border:'none',padding:13,fontSize:16}} onClick={handleSubmit}>Update Profile</button>
        </div>
        </div>


        </> 
     );
 }
 export default UserProfile;