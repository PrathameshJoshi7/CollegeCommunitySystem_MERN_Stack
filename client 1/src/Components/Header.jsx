import React from 'react'
import header from './CSS files/Header.module.css'

const Header = () => {
  return (
    <div className='full-header'>
        <header className={header.main}>
            <img src={require("./Images/CollegeLogo.jpg")} alt="LOGO" className={header.logoimg}/>
            <div className={header.headerDiv} align="center">
                <label className={header.head1}>Maharashtra Education </label>
                <br/>
                <label className={header.head2}>Abasaheb Garware College of Arts & Science</label>
                <br/>
                <label className={header.head3}>Karve Road, Pune - 411004</label>
            </div>
        </header>
      
    </div>
  )
}

export default Header
