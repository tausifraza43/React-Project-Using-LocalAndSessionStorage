import React from 'react';
import './MyStyles.css';
import { NavLink,useHistory } from 'react-router-dom';

const DashBoard=()=>{
  let history=useHistory();
  const Logout=()=>{
    sessionStorage.clear();
    history.push('/')
  }
    return(
      <header className='header'>
         <div>My App</div>
         <ul className='menu'>
         <li><NavLink
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
          Home
          </NavLink></li>
        <li><NavLink
            to="/userprofile"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
          Profile
          </NavLink></li>
                <li><NavLink
                  to="/addproject"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                 Manage Project
                </NavLink></li>
                <li onClick={Logout}>
               <NavLink
                  to="/"
                  exact
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                 Logout
                </NavLink></li>
                      </ul>
     </header>
      )
}
export default DashBoard;