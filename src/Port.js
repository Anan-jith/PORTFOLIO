import React, { useState } from 'react'
import './Port.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'





const   Port = () => {


  const result = useSelector((state)=>state.ports.data)
  console.log(result)


 const navigate=useNavigate()
   

  const fun=()=>{
   navigate('/new')
  }

 
 
  

  return (
    <div className='all'>
        <h1 className='heading'>PORTFOLIO</h1>
        <h2 className='hd2'>ABOUT ME</h2>
        <h3 className='h3'>ADITHYA VARMA</h3>
        <div class="w3-card-4">
  <img className='img' src="https://st3.depositphotos.com/3864435/13079/v/450/depositphotos_130797414-stock-illustration-male-face-avatar.jpg" alt="Alps"></img>
  <div class="w3-container w3-center">
    <p className='p3'>

I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease.<br></br>
 I believe that a person should work on developing their professional skills and learning new things all the time.<br></br>
  Currently, I am looking for new career opportunities my current job position cannot provide.</p>


<h3 className='pro'>PROJECTS</h3>
<button className='btn' onClick={fun}>ADD</button>

  </div>
 
</div>
      <div>

{result.map((item)=>{
  return(
    <div>
    <h1>{item.title}</h1>
    <h1>{item.year}</h1>
    <img src={item.image} width="20%"></img>
</div>
  )
})}
</div>
    </div>
  )
  }

export default Port
