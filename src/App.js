import './App.css';
import { Route,Switch } from 'react-router-dom';
import SignUp from './components/RegistrationPage';
import Login from './components/LoginPage';
import UserProfile from './components/UserProfile';
import AddProject from './components/AddProject';
import React from 'react';
import Home from './components/Home';
import EditProfile from './components/EditProfile';

function App() {

 return (
  <div>
    
  <Switch>
       <Route  exact path="/" component={Login}/>
       <Route   path="/registration" component={SignUp}/>
       <Route    path="/home"      component={Home} />
       <Route   path="/userprofile" component={UserProfile} />
       <Route   path="/edit" component={EditProfile} />
       <Route    path="/addproject"  component={AddProject} />
 </Switch>
  </div>

);
}

export default App;
