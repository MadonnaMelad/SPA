import React from 'react'
import port1 from '../../imgs/poert1.png'
import port2 from '../../imgs/port2.png'
import port3 from '../../imgs/port3.png'

export default function Portfolio() {
  return (
<>
<div className='white py-5'>
  <div className='container py-5'>
    <h1 className='py-2 txt-color'> PORTFOLIO COMPONENT</h1>
    <div className='star-container'>
  <i className="fa-solid fa-star pb-4 txt-color"></i>
</div>

  <div className='row d-flex g-5'>
    <div className='col-md-4'>
      <div className="portfolio-item position-relative">
        <img src={port1} className='w-100 rounded-2' alt="" />
        <div className="overlay rounded-2 d-flex align-items-center justify-content-center">
          <i className="fa-solid fa-plus text-white fs-1 "></i>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="portfolio-item position-relative">
        <img src={port2} className='w-100 rounded-2' alt="" />
        <div className="overlay rounded-2 d-flex align-items-center justify-content-center">
          <i className="fa-solid fa-plus text-white fs-1"></i>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="portfolio-item position-relative">
        <img src={port3} className='w-100 rounded-2' alt="" />
        <div className="overlay rounded-2 d-flex align-items-center justify-content-center">
          <i className="fa-solid fa-plus text-white fs-1"></i>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="portfolio-item position-relative">
        <img src={port1} className='w-100 rounded-2' alt="" />
        <div className="overlay rounded-2 d-flex align-items-center justify-content-center">
          <i className="fa-solid fa-plus text-white fs-1"></i>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="portfolio-item position-relative">
        <img src={port2} className='w-100 rounded-2' alt="" />
        <div className="overlay rounded-2 d-flex align-items-center justify-content-center">
          <i className="fa-solid fa-plus text-white fs-1"></i>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className="portfolio-item position-relative">
        <img src={port3} className='w-100 rounded-2' alt="" />
        <div className="overlay rounded-2 d-flex align-items-center justify-content-center">
          <i className="fa-solid fa-plus text-white fs-1"></i>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</>
  )
}
