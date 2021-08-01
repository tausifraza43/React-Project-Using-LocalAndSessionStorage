import React from 'react';
import '../App.css';
import DashBoard from  './DashBoard';
import {Redirect } from 'react-router-dom';

const Home=()=>{
    let Fname= localStorage.getItem('firstname');
    let Lname= localStorage.getItem('lastname');
    const isLogged = sessionStorage.getItem('email');
  if (!isLogged) {
      return (
          <Redirect to='/' />
      )
  }
    return(
        <div>
            <DashBoard />
            <div className='Body'>
        <h1 style={{color:'#FFA500'}}>welcome  {Fname} {Lname}</h1>
        <div>
           <h2><p style={{marginTop:70,color:'#87ceff'}}>To your website,Here you can manage your project  related stuff </p></h2> 
        </div>
        </div>
       </div>
    );
}
export default Home;