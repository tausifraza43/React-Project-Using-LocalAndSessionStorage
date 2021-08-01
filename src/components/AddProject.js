import React,{useState,useEffect} from 'react';
import '../App.css';
import DashBoard from  './DashBoard';
import DatePicker from "react-datepicker";
import {Redirect} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";


 const getLocalItmes = () => {
  let list = localStorage.getItem('lists');
  if (list) {
      return JSON.parse(localStorage.getItem('lists'));
  } else {
      return [];
  }
}

const AddProject=()=>{
    const [projectid,setProjectId]=useState('');
    const [pname,setPname]=useState('');
    const [desc,setDesc]=useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const[radio,setRadio]=useState();
    const [lists,setLists]=useState(getLocalItmes());
    const [updateSubmit, setUpdateSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
   

   useEffect(() => {
      localStorage.setItem('lists', JSON.stringify(lists))
    },[lists]) 
     

    const handleSubmit= (e) => {
      e.preventDefault();
        if ( !projectid ) {
          alert('Enter Project Id ')
         }
         else if(!pname){
              alert('Enter Project Name')
         }
         else if(!startDate){
            alert('Enter Project Start Date')
         }
         else if(!radio){
            alert('Enter Project Status')
         }
         else if(pname && !updateSubmit) {
          setLists(
           lists.map((item) => {
            if (item.Id === isEditItem) {
             return { ...item, projectid,pname,desc,startDate,endDate,radio }
             }
            return item;
              })
          )
               setUpdateSubmit(true);

        setProjectId('')
        setPname('')
        setDesc('')
        setStartDate('')
        setEndDate('')
        setRadio('')

        setIsEditItem(null);
      }
          else {
           const list= {Id: new Date().getTime().toString(),projectid,pname,desc,startDate,endDate,radio}

           setLists([...lists,list])
           setProjectId('')
           setPname('')
           setDesc('')
           setStartDate('')
           setEndDate('')
           setRadio('')
         }
      }

   const deleteItem = (index) => {
        const updateditems = lists.filter((item) => {
            return index !== item.Id;
        });
          console.log(updateditems)
        setLists(updateditems);
    }
    const editItem = (index) => {
      let EditItem = lists.find((item) => {
          return item.Id === index
      });
      console.log(EditItem)
     console.log(EditItem.pname);
      setPname(EditItem.pname)
      setProjectId(EditItem.projectid)
      setDesc(EditItem.desc)
      setRadio(EditItem.radio)
      setUpdateSubmit(false);
      setIsEditItem(index);
    }

    const handleClear=()=>{
      setLists([]);
  }
  const isLogged = sessionStorage.getItem('email');
  if (!isLogged) {
      return (
          <Redirect to='/' />
      )
  }

    return(
      
       <div >
          <DashBoard />
          <div className='item'>
         <div style={{marginLeft:25}}>
        <form onSubmit={ handleSubmit }>
          <h2 style={{color:'#0000FF'}}>Add Project Details</h2> 
     
        <div>
           <label  > Project Id </label>
          <br/> 
          <div style={{marginTop:5}}>
        <input 
          name='pid' 
          type='text'
          placeholder="Enter Project Id"
          value={projectid}
          onChange={e=>setProjectId(e.target.value)}
          required
          
        />
        </div>
        </div>
      <br/>
        <div>
        <label> Project Name </label> <br />
        <div style={{marginTop:5}}>
        <input 
          name='pname' 
          type='text'
          placeholder=" Enter Project Name"
          value={pname}
          onChange={e=> setPname(e.target.value)}
          required
        />
        </div>
       </div>
        <br />
        <div>
        <label> Description </label>
          <br/>
          <div style={{marginTop:5}}>
        <textarea
          name='desc' 
          placeholder="Enter Description"
          value={desc}
          onChange={e=>setDesc(e.target.value)}
        />
        </div>
        </div>
        <br />
        <div>
       <label> Start Date </label>
        <br/>
        <div style={{marginTop:5}}>
       <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)} 
        placeholderText="Enter Start Date"
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        showYearDropdown
        scrollableMonthYearDropdown
        required
        />
        </div> 
        </div>
        <br />
        <div>
       <label> End Date </label>
        <br/>
        <div style={{marginTop:5}}>
       <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)} 
        placeholderText="Enter End Date"
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        showYearDropdown
        scrollableMonthYearDropdown
        />
        </div>
        </div>
        <br/>
        <div>
        <label> Status </label>
         <br/>
        <div style={{marginTop:5}}>
        <input 
          type='radio'
          checked={radio ==='completed'}
          value='completed'
          onChange={e=>setRadio(e.target.value)}
          required
        />
         <label>

          Completed
          </label>
           
        <input 
          type='radio'
          checked={radio ==='In Progress'}
          value='In Progress'
          onChange={e=>setRadio(e.target.value)}
          required
        />
         <label>

          In Progress
          </label>
           
        <input 
          type='radio'
          checked={radio ==='Not Completed'}
          value='Not Completed'
          onChange={e=>setRadio(e.target.value)}
          required
        />
         <label>

          Not Completed
          </label>
 
        
        </div>
        </div>
        <br/>
        {
           updateSubmit ? <button  style={{color:'#ffff',backgroundColor:'#ffa500',borderRadius:12 , padding: 12 , border:'none' , fontSize :18  }} onClick={ handleSubmit }>Add Project</button> :
           <button  style={{color:'#ffff',backgroundColor:'#ffa500',borderRadius:12 , padding: 12 , border:'none' , fontSize :18  }} onClick={ handleSubmit }>Update</button>
       }
        </form>
        </div> 
   <div style={{marginLeft:10,marginTop:10}}>
           <h2 style={{textAlign:'center',color:'blue'}}>Project List</h2><br />
    <table>
            <thead>
              <tr style={{padding:50}}>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
            {lists.map(item => (
              <tr key={item.Id} >
                <td><h5>{item.projectid}</h5></td>
                <td><h5>{item.pname}</h5></td>
                <td><h5>{item.desc}</h5></td>
                <td><h5>{new Date(item.startDate).toString()}</h5></td>
                <td><h5>{new Date(item.endDate).toString()}</h5></td>
                <td><h5>{item.radio}</h5></td>
                <td><button type='submit' onClick={()=>editItem(item.Id)} >Edit</button></td>
                <td><button type='button' onClick={()=>deleteItem(item.Id)}>Delete</button></td>
                </tr>
                ))}
          
            </tbody>
          </table> 
          <button type='button' onClick={handleClear}>Clear All</button>       
            </div> 
            </div>
        </div>
      
    );
}

export default AddProject;