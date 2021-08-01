import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import DashBoard from  './DashBoard'
import {Redirect } from 'react-router-dom';

const EditProfile=()=>{
    const [firstname,setFirstName]=useState('');
    const [lastname,setLasttName]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    let history=useHistory();

    const handleSubmit= (e) => {
      e.preventDefault();
      // alert([firstname,lastname,email,mobile])
    
    if(!firstname){
      alert("Enter First Name")
    }
    else if(firstname.length<3){
      alert("Enter more than 3 Character")
    }
    else if(!lastname){
      alert("Enter Last Name")
    }
    else if(lastname.length<3){
      alert("Enter more than 3 Character")
    }
      else if ( !email){  
        alert("email can't be blank"); 
      } else if(!/^[a-zA-Z0-9]+@\S+\.\S+/.test(email)){
        alert("email not valid")
      }
      else if (!/^[6-9]\d{9}$/.test(mobile)){
        alert("enter 10 digit valid Phone Numbers")
      }
    else{
      localStorage.setItem('firstname',firstname);
        localStorage.setItem('lastname',lastname);
        localStorage.setItem('email', email);
        localStorage.setItem('mobile',mobile);
        history.push('/userprofile')
    }
      }
      let Fname= localStorage.getItem('firstname');
      let Lname= localStorage.getItem('lastname');
      let Mail=localStorage.getItem('email');
      let Mob=localStorage.getItem('mobile')
      useEffect(()=>{
        setFirstName(Fname)
        setLasttName(Lname)
        setEmail(Mail)
        setMobile(Mob)
      },[Fname,Lname,Mail,Mob])
      const isLogged = sessionStorage.getItem('email');
  if (!isLogged) {
      return (
          <Redirect to='/' />
      )
  }
    return(
        <div >
            <DashBoard />
            <div className='project'>
        <form onSubmit={ handleSubmit }>
          <h2 style={{color:'#0000FF'}}>Edit Your Profile</h2> 
      <div>
        <input 
          name='fname' 
          type='text'
          placeholder="Enter First Name"
          value={firstname}
          onChange={e=>setFirstName(e.target.value)}
        />
    </div>
      <br/>
        <div> 
        <input 
          name='lastname' 
          type='text'
          placeholder=" Enter Last Name"
          value={lastname}
          onChange={e=> setLasttName(e.target.value)}
        />
        </div>
        <br />
        <div>
        <input 
          name='email' 
          type='text'
          placeholder="Enter Your email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
        </div>
        <br />
        <div>
          <input 
          name='mobile' 
          type='text'
          placeholder="Enter Moble No."
          value={mobile}
          onChange={e=>setMobile(e.target.value)}
        />
        </div>
        <br />
        <button style={{backgroundColor:'#87CEEB',color:'#ffff',borderRadius:8, border:'none',padding:9,fontSize:15}} onClick={handleSubmit}>Update Profile</button>
        <br/>
        </form>
        </div>
        </div>
    );
}
export default EditProfile;