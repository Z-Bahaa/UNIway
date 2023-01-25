import React from 'react'
import './description.css'


const Description = () => {
  return (
    <div className='description-container' >
      <div className='description'>
        <p className='description-main' >Every Student has gone through years of university to 
        get prepared for their future careers, and now with Unilever FutureLeader's competition,
         they get a real opportunity to test their market skills by tackling real business needs 
         to finally find their UNIway.</p>
        <p className='description-white' >It's More than Just a Game <br/> it's Finding Your UNIway!</p>
      </div>
      <img 
      src="https://scontent.xx.fbcdn.net/v/t1.15752-9/327289428_1426831408129149_2551471000764996412_n.png?stp=dst-png_p403x403&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=slBp9C2dTIUAX-d-1lr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRuo5qUD3c7_iWumrMxcSA9o75TNAHMFS9sB0dR1L5o7A&oe=63F841D2" 
      alt="hi"
      className='side-image'
      />
    </div>
  )
}

export default Description
