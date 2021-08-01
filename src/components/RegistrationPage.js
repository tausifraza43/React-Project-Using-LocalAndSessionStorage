import React  from 'react';
import '../App.css';
import { Link,useHistory } from 'react-router-dom';
import { useFormik } from 'formik'

 

const SignUp=()=>{
  const history=useHistory();
  const formik = useFormik({
  
  initialValues : {
  firstname: '',
  lastname: '',
  email:'',
  mobile:'',
  password:'',

 },

 onSubmit : values => {
  localStorage.setItem('firstname',values.firstname);
  localStorage.setItem('lastname',values.lastname);
  localStorage.setItem('email', values.email);
  localStorage.setItem('mobile',values.mobile);
  localStorage.setItem('password',values.password);
  history.push('/')
},
  validate :values => {
  const errors = {}
  if(!values.firstname){
       
    errors.firstname = 'Enter First Name'

  }
  else if(values.firstname.length<3){
   
    errors.firstname = 'Enter more than 3 Character'
    
  }
  if(!values.lastname){
    errors.lastname = 'Enter Last Name'
  }
  else if(values.lastname.length<3){
  
    errors.lastname = 'Enter more than 3 Character'
  }
   if ( !values.email){  
        errors.email='Enter Email '
    } else if(!/^[a-zA-Z0-9]+@\S+\.\S+/.test(values.email)){
          errors.email='Invalid format'
    }
  if (!/^[6-9]\d{9}$/.test(values.mobile)){
        errors.mobile='Enter 10 digit Valid Number'
    }
   if ( !values.password){ 
        errors.password='Enter your password'
    }else if(values.password.length <6){
           errors.password='More than 6  character'
    }else if (!/^(?=.*\d)(?=.*[a-z]).{6,20}$/.test(values.password)){
         errors.password='Enter valid format'
    }
    return errors

}

  })
    return(
        <div className='project'>
        <form onSubmit={formik.handleSubmit}>
          <h2 style={{color:'#0000FF'}}>Registration</h2> 
      <div>
        <input 
         type='text'
          name='firstname' 
          id='firstname'
          placeholder="Enter First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
          />
    </div>
    {formik.touched.firstname && formik.errors.firstname ? (
          <div  style={{color:'red'}}>{formik.errors.firstname}</div>
        ) : null}
      <br/>
        <div> 
        <input 
          name='lastname' 
          type='text'
          id='lastname'
          placeholder=" Enter Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
        />
        </div>
        {formik.touched.lastname && formik.errors.lastname ? (
          <div style={{color:'red'}} >{formik.errors.lastname}</div>
        ) : null}
        <br />
        <div>
        <input 
          name='email' 
          type='text'
          id='email'
          placeholder="Enter Your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div  style={{color:'red'}}>{formik.errors.email}</div>
        ) : null}
        <br />
        <div>
          <input 
          name='mobile' 
          type='text'
          id='mobile'
          placeholder="Enter Moble No."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
        />
        </div>
        {formik.touched.mobile && formik.errors.mobile ? (
          <div  style={{color:'red'}}>{formik.errors.mobile}</div>
        ) : null}
        <br />
        <div>
        <input 
          name='password' 
          type='password'
          id='password'
          placeholder="Enter Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div  style={{color:'red'}}>{formik.errors.password}</div>
        ) : null}
        <br/>
        <button style={{margin:'auto',color:'#ffff',backgroundColor:'#ffa500',borderRadius:10,border:'none',padding:10}}>Submit</button>
        <br/>
        <p>Already have an Account? <Link to="/" >Login </Link></p>
        </form>
        </div>
    );
}

export default SignUp;