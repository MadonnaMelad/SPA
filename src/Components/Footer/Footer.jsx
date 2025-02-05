import React from 'react'

export default function Footer() {
  return (
<>
<div className=''>
<div className='main-color text-white py-5'>
  <div className='container-fluid py-4'>
  <div className='row d-flex'>
    <div className='col-md-4'>
      <h3>LOCATION</h3>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className='col-md-4'>
      <h3>AROUND THE WEB</h3>
      <div className="d-flex justify-content-center gap-3">
      <i className="fa-brands fa-facebook border p-2 rounded-circle"></i>
      <i className="fa-brands fa-twitter border p-2 rounded-circle"></i>        
      <i className="fa-brands fa-linkedin-in border p-2 rounded-circle"></i>        
      <i className="fa-solid fa-globe border p-2 rounded-circle"></i>      
      </div>
    </div>
    <div className='col-md-4'>
      <h3>ABOUT FREELANCER</h3>
      <p>Freelance is a free to use, licensed , <br/> Bootstrap theme created by Route</p>
    </div>
  </div>
</div>
</div>

<div className='second-color text-white py-3 '>
Copyright © Your Website 2021    
</div>
</div>
</>  )
}
