import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { add } from './redux';
import FileBase64 from 'react-file-base64';


const New = () => {


  const [data,setdata] =useState({title:"",year:"",image:""});
  const dispatch=useDispatch();
  const navigate=useNavigate()
   

  

  const onchangeform = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setdata({...data,[event.target.name]:event.target.value})
    console.log(data)
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    dispatch(add(data))
    navigate ('/')
    

  }

    
    

  return (


  

    <div>
      <div class="login-box">
  <h2>ADD</h2>
  <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text"  required="" onChange={onchangeform} name='title' value={data.title}></input>
      <label>TITLE</label>
    </div>
    <div class="user-box">
      <input type="TEXT"  required=""onChange={onchangeform} name='year' value={data.year}></input>
      <label>YEAR</label>
    </div>
    <div>
      
    <FileBase64
    multiple={ false }
    onDone={(res)=>{
console.log(res);
setdata({...data,image:res.base64})
    }}
    />
    </div>
   <input type='submit' value='submit'>
   </input>
  </form>
</div>
      

    </div>
 

    

    

    


    
 
    
  )
}

export default New
