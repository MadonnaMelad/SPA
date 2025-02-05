import React from 'react'

export default function Contact() {
  return (
<>
<div className='white py-5'>
 <div className='container py-5'>
    <h1 className='py-2 txt-color'> CONTACT SECTION</h1>
    <div className='star-container'>
  <i className="fa-solid fa-star pb-4 txt-color"></i>
</div>
     <div className="row">
          <div className="col-md-6 mx-auto">
            <form>
              <div className="mb-5">
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  id="name"
                  placeholder="userName"
                />
              </div>
              <div className="mb-5">
                <input
                  type="nymber"
                  className="form-control border-0 border-bottom"
                  id="number"
                  placeholder="userAge"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  className="form-control border-0 border-bottom"
                  id="email"
                  placeholder="userEmail"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  className="form-control border-0 border-bottom"
                  id="name"
                  placeholder="userPasssword"
                />
              </div>
              <button type="submit" className="btn w-100">Send Message</button>
            </form>
          </div>
        </div>
 </div>
</div>
</>
  )
}
