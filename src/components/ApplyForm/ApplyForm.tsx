import React from 'react'

import './applyForm.css'

const ApplyForm = () => {
  return (
    <div className="apply-form-container" >
      <div  className="apply-form-heading" >
        <h1>HOW TO APPLY?</h1>
      </div>
      <form action="" className="apply-form">
        <div className="apply-form-step" >
          <h2>STEP 1</h2>
          <label htmlFor="">choose your teammates</label>
          <input type="text"/>
          <label htmlFor="">pick a name for your team </label>
          <input type="text"/>
        </div>
        
        <div className="apply-form-step" >
          <h2>STEP 2</h2>
          <p>fill the requested information.</p>
          <label htmlFor="">team name:</label>
          <input type="text"/>
          <label htmlFor="">contact email:</label>
          <input type="text"/>
          <label htmlFor="">contact number</label>
          <input type="text"/>
        </div>

        <div className="apply-form-step" >
          <h2>STEP 3</h2>
          <p>
            share with us your thoughts on how brands can seek more
             effective sustainable solutions in a way that doesn't affect 
             a product's quality and, at the same time, encourages an 
             increase in its sales.
          </p>
          <textarea name="" id=""></textarea>
        </div>
        
        <div className="apply-form-step" >
          <h2>STEP 4(OPTIONAL)</h2>
          <p>help us make a decision by letting us know about you and your way of thinking.</p>
          <p>introduce yourself, tell us more about your ideas,and explain why you are interested in being a part of UNIway in a video that doesn't exceed 5 minutes.</p>
          <button className="apply-form-secondary-button">submit here</button>
          <button className="apply-form-primary-button">apply now</button>
        </div>
      </form>
    </div>
  )
}

export default ApplyForm
