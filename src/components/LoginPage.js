import React,{useState} from 'react';
import '../App.css';
import { Link,useHistory,Redirect } from 'react-router-dom';
 

const Login=()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    let history=useHistory();

   const handleSubmit= () => {
      let mail= localStorage.getItem('email');
    let pass= localStorage.getItem('password');
      if(!password || !email)  {
        alert("email and password is empty")
      }
  
   else if ((password !== pass) && (email !== mail)) {
    alert('Email or Password is not matched')
     
    } else {
      sessionStorage.setItem('email', email);
      history.push('/home')
    
    }
      }
      const isLogged = sessionStorage.getItem('email');

      if (isLogged) {
          return (
              <Redirect to='/home' />
          )
      }
    return(
      <div className='project' >
        <form onSubmit={handleSubmit}>
            <h2 style={{color:'#0000FF'}}>Login</h2>
            <div>
        
        <input 
          name='emailid' 
          type='text'
          placeholder="Enter your UserName"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
      
        </div> 
        <br/>
        <div>
        <input 
          name='pwd' 
          type='password'
          placeholder="Enter Your Password"
          value={password}
          onChange={e=> setPassword(e.target.value)}
        />
    
        </div>
       
        <br />
       
        <button style={{margin:'auto',color:'#ffff',backgroundColor:'#ffa500',borderRadius:10,border:'none',padding:10}}>Submit</button>
      
        <br/>
        <p>Don't have an Account? <Link to="/registration" >Sign Up </Link></p>
        </form>
        </div>

    );
}
export default Login;