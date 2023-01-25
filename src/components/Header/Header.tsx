import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='all-texts-container'>
        <div className='sub-texts-container'>
          <h3 className='blue-text'>FUTURE <br/> LEADERS'</h3>
          <h3 className='white-text'>LEAGUE</h3>
        </div>
        <h1>Your UNIway begins here</h1>
      </div>
      <img 
      className='side-image'
      src="https://scontent.xx.fbcdn.net/v/t1.15752-9/323587983_464093755774163_3771504531795847320_n.png?stp=dst-png_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Nt-yHlqKtLEAX9oWSIo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRw6dVSN1Cy1F9lc0ltlMQ9WtrRgeqGge-nhoOZCgBWLQ&oe=63F82D5F" 
      alt="h"/>
      <img 
      src="https://scontent.xx.fbcdn.net/v/t1.15752-9/325450381_3325204561077246_3864924260810303048_n.jpg?stp=dst-jpg_p403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_lZGREDT1ksAX-prsyO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT3fnSQoWl6rXfaLwa0W9ZF6IldpZyAXt1J40e43v_vuw&oe=63F81C9B" 
      alt=""
      className='fixed-logo'
      />
    </div>
  )
}

export default Header
